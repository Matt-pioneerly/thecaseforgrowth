'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Check, Download } from 'lucide-react';

export default function ThankYouAIPrompts() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/downloads/AI-Prompts-for-Legal-Research-Guide.pdf';
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white py-12 px-4">
      <div className="text-center max-w-2xl">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-12 h-12 text-green-600" />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Thank You!</h1>
        <p className="text-xl text-slate-600 mb-2">Your download will begin automatically in 2 seconds...</p>
        <p className="text-sm text-slate-500 mb-8">Check your email for the download link as well</p>
        <div className="bg-white rounded-xl border-2 border-orange-200 p-8 mb-8 shadow-lg">
          <Download className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <p className="text-slate-700 mb-4 font-semibold">If the download doesn't start automatically:</p>
          <a href="/downloads/AI-Prompts-for-Legal-Research-Guide.pdf" className="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition">
            Click Here to Download PDF
          </a>
        </div>
        <div className="space-y-3">
          <p className="text-slate-600">You'll also receive occasional emails with legal tech insights and resources</p>
          <Link href="/resources" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Browse More Resources
          </Link>
        </div>
      </div>
    </div>
  );
}
