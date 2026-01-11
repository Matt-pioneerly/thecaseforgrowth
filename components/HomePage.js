'use client';

import Link from 'next/link';
import { TrendingUp, CheckSquare, Brain, Users, Zap, Calculator, Calendar, FileText } from 'lucide-react';
import mattPhoto from '@/public/images/matt-photo.jpg';
import piotrPhoto from '@/public/images/piotr-photo.jpg';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-32 overflow-hidden">
        {/* Abstract Background Illustrations */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          
          {/* Motion lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: '#f97316', stopOpacity: 0}} />
                <stop offset="50%" style={{stopColor: '#f97316', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#f97316', stopOpacity: 0}} />
              </linearGradient>
            </defs>
            <path d="M0,100 Q250,80 500,100 T1000,100" stroke="url(#lineGradient)" strokeWidth="2" fill="none" opacity="0.3">
              <animate attributeName="d" dur="8s" repeatCount="indefinite"
                values="M0,100 Q250,80 500,100 T1000,100;
                        M0,100 Q250,120 500,100 T1000,100;
                        M0,100 Q250,80 500,100 T1000,100"/>
            </path>
            <path d="M0,200 Q250,180 500,200 T1000,200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" opacity="0.2">
              <animate attributeName="d" dur="10s" repeatCount="indefinite"
                values="M0,200 Q250,180 500,200 T1000,200;
                        M0,200 Q250,220 500,200 T1000,200;
                        M0,200 Q250,180 500,200 T1000,200"/>
            </path>
            <path d="M0,300 Q250,280 500,300 T1000,300" stroke="url(#lineGradient)" strokeWidth="2" fill="none" opacity="0.15">
              <animate attributeName="d" dur="12s" repeatCount="indefinite"
                values="M0,300 Q250,280 500,300 T1000,300;
                        M0,300 Q250,320 500,300 T1000,300;
                        M0,300 Q250,280 500,300 T1000,300"/>
            </path>
          </svg>

          {/* Stardust particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-400 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5,
                animation: `twinkle ${3 + Math.random() * 4}s infinite ${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Growing your law firm<br />just got easier
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Exclusive resources from the Pioneerly team. Start with calculators and templates, or work directly with a growth counsel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/resources"
              className="px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition text-lg shadow-lg shadow-orange-500/30"
            >
              Browse Resources
            </Link>
            <a
              href="https://pioneerly.com/book-consultation"
              className="px-10 py-5 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition text-lg shadow-lg"
            >
              Make us Your Growth Counsel
            </a>
          </div>
        </div>

        <style>{`
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.5); }
          }
        `}</style>
      </div>

      {/* What's Inside */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What's inside</h2>
            <p className="text-xl text-slate-600">Tools and resources tailored to your firm's stage</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Growth Calculators</h3>
              <p className="text-slate-600">
                Data-driven tools to forecast revenue, assess your AI readiness, and identify growth opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                <CheckSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Checklists & Templates</h3>
              <p className="text-slate-600">
                Battle-tested frameworks for intake, marketing, operations, and more — ready to use today.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Resources</h3>
              <p className="text-slate-600">
                Prompt libraries, implementation guides, and AI strategies specifically for legal practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Growth Counsel Premium */}
      <div className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-orange-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-sm font-semibold rounded-full border border-orange-500/30">
                Premium
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-6">Need more than resources?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get a dedicated Growth Counsel — your personal advisor who knows your firm, your market, and exactly what moves the needle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="font-semibold mb-2">Strategic Partner</h3>
              <p className="text-slate-400 text-sm">
                Not a consultant who disappears after a report. Your Growth Counsel works with you month after month.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="font-semibold mb-2">Execution Team</h3>
              <p className="text-slate-400 text-sm">
                Your counsel brings the entire Pioneerly team — marketing, tech, operations — when you need them.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="font-semibold mb-2">Real Results</h3>
              <p className="text-slate-400 text-sm">
                We measure success by cases signed, not reports delivered. Your growth is our only metric.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://pioneerly.com/book-consultation"
              className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition text-lg shadow-lg shadow-orange-500/30"
            >
              Make us Your Growth Counsel
            </a>
            <p className="text-slate-400 text-sm mt-4">
              30-minute call to see if we're a fit
            </p>
          </div>
        </div>
      </div>

      {/* Browse by Topic */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Browse by topic</h2>
            <p className="text-lg text-slate-600">Find exactly what you need for your firm</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Marketing */}
            <Link
              href="/resources"
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-left hover:shadow-lg transition group border border-blue-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-2xl font-bold text-blue-600">8</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Marketing & Client Acquisition</h3>
              <p className="text-sm text-slate-600 mb-3">
                SEO, ads, referrals, and lead generation strategies
              </p>
              <div className="flex items-center text-blue-600 font-medium text-sm">
                <span>View resources</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            {/* AI Tools */}
            <Link
              href="/resources"
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-left hover:shadow-lg transition group border border-purple-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-2xl font-bold text-purple-600">5</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">AI Implementation</h3>
              <p className="text-sm text-slate-600 mb-3">
                Prompts, tools, and strategies to leverage AI
              </p>
              <div className="flex items-center text-purple-600 font-medium text-sm">
                <span>View resources</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            {/* Operations */}
            <Link
              href="/resources"
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-left hover:shadow-lg transition group border border-green-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <CheckSquare className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-2xl font-bold text-green-600">6</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Operations</h3>
              <p className="text-sm text-slate-600 mb-3">
                Systems, workflows, and efficiency tools
              </p>
              <div className="flex items-center text-green-600 font-medium text-sm">
                <span>View resources</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            {/* Business Development */}
            <Link
              href="/resources"
              className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-left hover:shadow-lg transition group border border-orange-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <span className="text-2xl font-bold text-orange-600">5</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Business Development</h3>
              <p className="text-sm text-slate-600 mb-3">
                Conversion, networking, and partnership strategies
              </p>
              <div className="flex items-center text-orange-600 font-medium text-sm">
                <span>View resources</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            {/* Financial */}
            <Link
              href="/resources"
              className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 text-left hover:shadow-lg transition group border border-amber-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <Calendar className="w-6 h-6 text-amber-600" />
                </div>
                <span className="text-2xl font-bold text-amber-600">6</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Financial Growth</h3>
              <p className="text-sm text-slate-600 mb-3">
                Pricing, profitability, and financial planning
              </p>
              <div className="flex items-center text-amber-600 font-medium text-sm">
                <span>View resources</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            {/* Calculators */}
            <Link
              href="/growth-calculator"
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 text-left hover:shadow-lg transition group border border-slate-700 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-white/10 rounded-lg backdrop-blur">
                    <Calculator className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-orange-400">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Interactive Calculators</h3>
                <p className="text-sm text-slate-300 mb-3">
                  Data-driven tools for growth and AI assessment
                </p>
                <div className="flex items-center text-orange-400 font-medium text-sm">
                  <span>Try calculators</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Resources Preview */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Start here</h2>
            <p className="text-lg text-slate-600">Popular resources to kickstart your growth</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Growth Calculator - Featured */}
            <Link
              href="/growth-calculator"
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-slate-900 text-left hover:shadow-xl transition group border border-blue-100"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <Calculator className="w-8 h-8 text-blue-600" />
                </div>
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Growth Calculator</h3>
              <p className="text-slate-600 mb-4">
                See exactly where your revenue could be in 6, 12, and 24 months with our data-driven projections.
              </p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Try it now</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            {/* AI Prompts Library - Featured */}
            <Link
              href="/ai-prompts"
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 text-slate-900 text-left hover:shadow-xl transition group border border-amber-100"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <Brain className="w-8 h-8 text-amber-600" />
                </div>
                <span className="px-3 py-1 bg-orange-600 text-white text-xs font-semibold rounded-full">
                  New
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">AI Prompts Library</h3>
              <p className="text-slate-600 mb-4">
                56 tested prompts for legal research, client communication, and document drafting.
              </p>
              <div className="flex items-center text-orange-600 font-medium">
                <span>View prompts</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>

          {/* Secondary Resources */}
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/resources"
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-orange-300 hover:shadow-md transition text-left group"
            >
              <div className="p-3 bg-orange-100 rounded-lg inline-flex mb-4">
                <CheckSquare className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Client Intake Checklist</h4>
              <p className="text-sm text-slate-600">15-point system to streamline onboarding</p>
            </Link>

            <Link
              href="/resources"
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-orange-300 hover:shadow-md transition text-left group"
            >
              <div className="p-3 bg-orange-100 rounded-lg inline-flex mb-4">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Marketing Budget Template</h4>
              <p className="text-sm text-slate-600">Track spend and ROI month by month</p>
            </Link>

            <Link
              href="/resources"
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-orange-300 hover:shadow-md transition text-left group"
            >
              <div className="p-3 bg-orange-100 rounded-lg inline-flex mb-4">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Lead Conversion Playbook</h4>
              <p className="text-sm text-slate-600">Turn consultations into retained clients</p>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/resources"
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition inline-block"
            >
              Browse All Resources
            </Link>
          </div>
        </div>
      </div>

      {/* Meet the Team */}
      <div className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Built by practitioners, for practitioners</h2>
            <p className="text-lg text-slate-300">
              We're not theorists. We work with law firms every day, testing what actually moves the needle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 p-1">
                <img src={mattPhoto} className="w-full h-full rounded-full object-cover" alt="Matt" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Matt</h3>
              <p className="text-slate-400 text-sm text-center mb-4">Co-Founder, Growth Strategy</p>
              <p className="text-slate-300 text-center text-sm">
                Two decades of tech growth expertise meets legaltech innovation. I help law firms find what actually works in their market.
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 p-1">
                <img src={piotrPhoto} className="w-full h-full rounded-full object-cover" alt="Piotr" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Piotr</h3>
              <p className="text-slate-400 text-sm text-center mb-4">Co-Founder, Operations & AI</p>
              <p className="text-slate-300 text-center text-sm">
                Built and scaled businesses from bedroom startup to acquisition. Now building systems that help law firms grow smarter.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Dive into our free resources and start growing your practice today.
          </p>
          <Link 
            href="/resources"
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition text-lg inline-block"
          >
            Browse All Resources
          </Link>
        </div>
      </div>
    </>
  );
}
