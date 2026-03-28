import { Webhook } from 'svix';
import { headers } from 'next/headers';

export async function POST(req) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;
  const HUBSPOT_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;

  if (!WEBHOOK_SECRET || !HUBSPOT_TOKEN) {
    return Response.json({ error: 'Missing secrets' }, { status: 500 });
  }

  // Get headers - await in Next.js 15
  const headersList = await headers();
  const svix_id = headersList.get('svix-id');
  const svix_timestamp = headersList.get('svix-timestamp');
  const svix_signature = headersList.get('svix-signature');

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return Response.json({ error: 'Missing svix headers' }, { status: 400 });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Verify webhook
  const wh = new Webhook(WEBHOOK_SECRET);
  let evt;

  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    });
  } catch (err) {
    console.error('Webhook verification failed:', err);
    return Response.json({ error: 'Invalid signature' }, { status: 400 });
  }

  // Handle user.created event
  if (evt.type === 'user.created') {
    const { email_addresses, first_name, last_name } = evt.data;
    
    const primaryEmail = email_addresses?.find(e => e.id === evt.data.primary_email_address_id);
    
    if (primaryEmail) {
      try {
        const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${HUBSPOT_TOKEN}`,
          },
          body: JSON.stringify({
            properties: {
              email: primaryEmail.email_address,
              firstname: first_name || '',
              lastname: last_name || '',
              lifecyclestage: 'lead',
            }
          })
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error('HubSpot API error:', errorText);
          return Response.json({ error: 'HubSpot error', details: errorText }, { status: 500 });
        }

        console.log('Contact created in HubSpot:', primaryEmail.email_address);
        return Response.json({ success: true }, { status: 200 });
      } catch (error) {
        console.error('Error creating HubSpot contact:', error);
        return Response.json({ error: error.message }, { status: 500 });
      }
    }
  }

  return Response.json({ received: true }, { status: 200 });
}