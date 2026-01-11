# The Case for Growth - Complete Next.js Project

This is a complete, ready-to-run Next.js project with proper multi-page routing.

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages:
- React 18
- Next.js 15
- Tailwind CSS
- Lucide Icons

### 2. Add Your Team Photos (Optional)

Add your photos to `public/images/`:
- `matt-photo.jpg`
- `piotr-photo.jpg`

(The site will work without these, but team photos won't show on the About page)

### 3. Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000

### 4. Test Build

```bash
npm run build
```

### 5. Deploy to Vercel

#### Option A: Connect to GitHub (Recommended)

1. Create a new GitHub repository
2. Initialize git in this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/thecaseforgrowth.git
   git push -u origin main
   ```
3. Go to https://vercel.com
4. Click "Import Project"
5. Select your GitHub repository
6. Click "Deploy"

#### Option B: Vercel CLI

```bash
npm i -g vercel
vercel
```

---

## 📁 Project Structure

```
thecaseforgrowth/
├── app/
│   ├── layout.js                      # Main layout with navigation
│   ├── page.js                        # Home page (/)
│   ├── globals.css                    # Global styles
│   ├── resources/page.js              # /resources
│   ├── ai-prompts/page.js             # /ai-prompts
│   ├── growth-calculator/page.js      # /growth-calculator
│   ├── ai-calculator/page.js          # /ai-calculator
│   ├── about/page.js                  # /about
│   └── thank-you-ai-prompts/page.js   # /thank-you-ai-prompts
├── components/
│   ├── TheCaseForGrowth.jsx           # Main component with all pages
│   ├── HomePage.js                    # Home page component
│   └── AIPromptsPage.js               # AI Prompts page component
├── public/
│   ├── downloads/
│   │   └── AI-Prompts-for-Legal-Research-Guide.pdf
│   └── images/
│       └── (add your team photos here)
├── package.json                       # Dependencies
├── next.config.js                     # Next.js configuration
├── tailwind.config.js                 # Tailwind configuration
└── postcss.config.js                  # PostCSS configuration
```

---

## 🌐 Available URLs

After deployment, you'll have:

- **/** - Home page
- **/resources** - Resource library
- **/ai-prompts** - AI Prompts page (with HubSpot form)
- **/growth-calculator** - Growth calculator
- **/ai-calculator** - AI assessment
- **/about** - About page
- **/thank-you-ai-prompts** - Thank you page (auto-downloads PDF)

---

## 🔧 HubSpot Setup

After deploying:

1. Go to your HubSpot AI Prompts form
2. **Options** tab → "What happens after form submission"
3. Select **"Redirect to another page"**
4. Enter: `https://yourdomain.com/thank-you-ai-prompts`
5. **Save**

The form will redirect users to the thank you page, which auto-downloads the PDF after 2 seconds.

---

## ✨ Features

✅ Multi-page routing with individual URLs
✅ SEO-friendly with proper metadata
✅ Responsive design (mobile + desktop)
✅ Navigation dropdown with all resources
✅ Resource library with filtering
✅ Embedded calculators
✅ AI Prompts page with HubSpot form
✅ Auto-download thank you page
✅ Professional design with Tailwind CSS

---

## 🛠️ Customization

### Update Team Photos
Replace files in `public/images/`:
- matt-photo.jpg (400x400px recommended)
- piotr-photo.jpg (400x400px recommended)

### Update Content
Main content is in:
- `components/TheCaseForGrowth.jsx` - Resources, calculators, about page
- `components/HomePage.js` - Home page hero and features
- `components/AIPromptsPage.js` - AI prompts page

### Update HubSpot Form
In `components/AIPromptsPage.js`, find the HubSpot form embed code and update the form URL to your own.

### Update Links
- Book consultation link: Update in `app/layout.js`
- Calculator external URLs: Update in `components/TheCaseForGrowth.jsx`

---

## 📦 Dependencies

### Main Dependencies
- **next**: ^15.1.3 - React framework
- **react**: ^18.3.1 - UI library
- **react-dom**: ^18.3.1 - React DOM renderer
- **lucide-react**: ^0.263.1 - Icon library

### Dev Dependencies
- **tailwindcss**: ^3.4.17 - CSS framework
- **autoprefixer**: ^10.4.20 - CSS processing
- **postcss**: ^8.4.49 - CSS processing
- **eslint**: ^8.57.0 - Code linting

---

## 🆘 Troubleshooting

### Build Errors

**Error: Module not found**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Tailwind not working**
- Check `tailwind.config.js` paths are correct
- Make sure `globals.css` has `@tailwind` directives
- Restart dev server after config changes

**Images not showing**
- Make sure images are in `public/images/`
- Check filenames match exactly (case-sensitive)
- Use `/images/filename.jpg` in code (no `public/` prefix)

### Deploy Errors

**Vercel build fails**
- Check all files are committed to git
- Verify `package.json` has all dependencies
- Check build locally first: `npm run build`

---

## 📝 License

This project is for The Case for Growth by Pioneerly.

---

## 🤝 Support

Need help? Contact hello@pioneerly.com
