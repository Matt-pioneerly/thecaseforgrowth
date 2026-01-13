'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Mail, TrendingUp, Brain, Users, CheckCircle, ArrowRight } from 'lucide-react';

export default function NewsletterPage() {
  useEffect(() => {
    // Load Beehiiv tracking script
    const trackingScript = document.createElement('script');
    trackingScript.type = 'text/javascript';
    trackingScript.async = true;
    trackingScript.src = 'https://subscribe-forms.beehiiv.com/attribution.js';
    document.head.appendChild(trackingScript);

    return () => {
      // Cleanup on unmount
      if (trackingScript.parentNode) {
        trackingScript.parentNode.removeChild(trackingScript);
      }
    };
  }, []);

  const benefits = [
    {
      icon: Brain,
      title: 'AI & Legal Tech Insights',
      description: 'Latest trends in AI implementation for law firms'
    },
    {
      icon: TrendingUp,
      title: 'Growth Strategies',
      description: 'Marketing tactics and client acquisition strategies that work'
    },
    {
      icon: Users,
      title: 'Case Studies',
      description: 'Real examples from law firms successfully scaling'
    }
  ];

  const topics = [
    'AI implementation strategies',
    'Marketing & client acquisition',
    'Operational efficiency',
    'Financial growth tactics',
    'Legal tech reviews',
    'Industry trends & analysis'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-slate-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            The Case for Growth Newsletter
          </h1>
          <p className="text-xl text-slate-600 mb-6">
            Weekly insights on AI, marketing, and growth strategies for law firms. Join hundreds of attorneys building more profitable practices.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>Free forever</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>Weekly delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>Unsubscribe anytime</span>
            </div>
          </div>
        </div>

        {/* Beehiiv Embed Form */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-orange-100">
            <script async src="https://subscribe-forms.beehiiv.com/embed.js"></script>
            <iframe 
              src="https://subscribe-forms.beehiiv.com/2b9c6838-43c2-4194-b43b-8cd39758e4a7" 
              className="beehiiv-embed" 
              data-test-id="beehiiv-embed" 
              frameBorder="0" 
              scrolling="no" 
              style={{
                width: '100%',
                height: '339px',
                margin: 0,
                borderRadius: 0,
                backgroundColor: 'transparent',
                maxWidth: '100%'
              }}
            />
          </div>
        </div>

        {/* What You'll Get */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            What You'll Get Every Week
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 border-2 border-slate-100 hover:border-orange-200 transition">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Topics Covered */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">
            Topics We Cover
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {topics.map((topic, index) => (
              <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-4 border border-slate-200">
                <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Past Issues CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Want to See What We Send?
            </h2>
            <p className="text-lg text-slate-300 mb-6">
              Browse our archive of past newsletters and see the quality insights we deliver every week.
            </p>
            <a
              href="https://thecaseforgrowth.beehiiv.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition"
            >
              View Past Issues
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Social Proof */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-slate-600 mb-6">
            Trusted by attorneys and legal professionals at:
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-slate-400 text-sm">
            <span>Solo Practitioners</span>
            <span>•</span>
            <span>Boutique Firms</span>
            <span>•</span>
            <span>Mid-Size Practices</span>
            <span>•</span>
            <span>Legal Tech Companies</span>
          </div>
        </div>

        {/* Additional Resources CTA */}
        <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">
            Want More Than Just the Newsletter?
          </h3>
          <p className="text-lg mb-6 text-orange-50">
            Get instant access to 30+ templates, calculators, and guides for law firm growth
          </p>
          <Link
            href="/sign-up"
            className="inline-block px-6 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-slate-50 transition"
          >
            Access Free Resources
          </Link>
        </div>
      </div>
    </div>
  );
}
