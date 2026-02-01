'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, CheckSquare, FileText, TrendingUp, Users, Zap, Brain, Heart, MapPin, Copy, Check, Download, Search, Target, Clock, Calculator } from 'lucide-react';
import AIPromptsPage from './AIPromptsPage';

const TheCaseForGrowth = ({ initialPage = 'home' }) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [selectedStage, setSelectedStage] = useState('solo');
  const [selectedTopic, setSelectedTopic] = useState('all');

  // Image paths - These will work once you add images to public/images/ folder
  const mattPhoto = "/images/matt-photo.jpg";
  const piotrPhoto = "/images/piotr-photo.jpg";

  // Firm stages
  const stages = [
    { id: 'solo', name: 'Solo/Small Firms', subtitle: '1-5 Attorneys', icon: Users },
    { id: 'mid', name: 'Mid-Size Firms', subtitle: '6-20 Attorneys', icon: TrendingUp },
    { id: 'large', name: 'Large Firms', subtitle: '20+ Attorneys', icon: Zap }
  ];

  // Topics
  const topics = [
    { id: 'all', name: 'All Resources', icon: FileText },
    { id: 'marketing', name: 'Client Acquisition', icon: TrendingUp },
    { id: 'ai', name: 'AI Implementation', icon: Brain },
    { id: 'operations', name: 'Operations', icon: CheckSquare },
    { id: 'business', name: 'Business Development', icon: Users },
    { id: 'financial', name: 'Financial Growth', icon: Calendar }
  ];

  // Sample resources (you'll expand these)
  const resources = [
    // Calculators
    {
      id: 1,
      title: 'Law Firm Growth Calculator',
      type: 'calculator',
      stage: ['solo', 'mid', 'large'],
      topic: 'financial',
      description: 'Calculate your firm\'s growth potential and identify revenue opportunities',
      isCalculator: true,
      calculatorUrl: 'https://pioneerly-tool.vercel.app/'
    },
    {
      id: 2,
      title: 'AI Sophistication Assessment',
      type: 'calculator',
      stage: ['solo', 'mid', 'large'],
      topic: 'ai',
      description: 'Assess your firm\'s AI readiness and get personalized recommendations',
      isCalculator: true,
      calculatorUrl: 'https://aeo-calculator.vercel.app/'
    },

    // Marketing Resources
    {
  id: 3,
  title: 'Client Intake Checklist',
  type: 'Checklist',
  description: '50+ point checklist with interactive checkboxes to streamline client onboarding',
  category: 'Operations',
  stage: 'all',
  downloadUrl: '/downloads/Client-Intake-Checklist.pdf',
  isPremium: false
},
    {
  id: 4,
  title: 'Marketing Budget Template',
  type: 'Template',
  description: 'Excel template with monthly/quarterly tracking and ROI calculator',
  category: 'Marketing',
  stage: 'all',
  downloadUrl: '/downloads/Marketing-Budget-Template.xlsx', 
  isPremium: false
},
    {
      id: 5,
      title: 'Google Ads Setup Guide',
      type: 'guide',
      stage: ['solo', 'mid'],
      topic: 'marketing',
      description: 'Step-by-step guide to launching your first profitable Google Ads campaign',
      downloadUrl: '/downloads/Google-Ads-Setup-Guide.pdf'
    },
    {
      id: 6,
      title: 'SEO Keyword Research Template',
      type: 'template',
      stage: ['solo', 'mid', 'large'],
      topic: 'marketing',
      description: 'Find and track the keywords that bring you qualified leads',
      downloadUrl: '/downloads/SEO-Keyword-Research-Template.xlsx'
    },
    {
      id: 7,
      downloadUrl: '/downloads/Referral-Program-Playbook.pdf'
    },
    {
      id: 8,
      downloadUrl: '/downloads/Social-Media-Content-Calendar.xlsx'
    },

    // AI Resources
    {
      id: 9,
      title: 'AI Prompts for Legal Research',
      type: 'cheatsheet',
      stage: ['solo', 'mid', 'large'],
      topic: 'ai',
      description: '56 proven prompts for case research, document drafting, and client communication',
      isSpecialPage: true,
      pageRoute: 'ai-prompts'
    },
    {
      id: 10,
      title: 'AI Tools Comparison Chart',
      type: 'guide',
      stage: ['mid', 'large'],
      topic: 'ai',
      description: 'Compare ChatGPT, Claude, Harvey AI, and CoCounsel for your practice area',
      downloadUrl: '#'
    },
    {
      id: 11,
      title: 'AI Implementation Roadmap',
      type: 'template',
      stage: ['mid', 'large'],
      topic: 'ai',
      description: '90-day plan to integrate AI into your firm without disrupting operations',
      downloadUrl: '/downloads/AI-Implementation-Roadmap.pdf'
    },
    {
      id: 12,
      title: 'Client Communication AI Prompts',
      type: 'cheatsheet',
      stage: ['solo', 'mid'],
      topic: 'ai',
      description: 'Templates for emails, status updates, and difficult conversations',
      downloadUrl: '/downloads/Client-Communication-AI-Prompts.pdf'
    },
    {
      id: 13,
      title: 'AI Ethics & Compliance Guide',
      type: 'guide',
      stage: ['mid', 'large'],
      topic: 'ai',
      description: 'Navigate bar rules and ethical considerations when using AI',
      downloadUrl: '/downloads/AI-Ethics-Guide.pdf'
    },

    // Operations Resources
    {
      id: 14,
      title: 'Practice Management System Comparison',
      type: 'guide',
      stage: ['mid', 'large'],
      topic: 'operations',
      description: 'Compare top 10 practice management systems for growing firms',
      downloadUrl: '#'
    },
    {
      id: 15,
      title: 'Case Management Workflow',
      type: 'template',
      stage: ['solo', 'mid'],
      topic: 'operations',
      description: 'Standard workflows for intake, discovery, trial prep, and closing',
      downloadUrl: '/downloads/Case-Management-Workflow.xlsx'
    },
    {
      id: 16,
      title: 'Document Automation Setup',
      type: 'guide',
      stage: ['mid', 'large'],
      topic: 'operations',
      description: 'Automate your most common documents and save 10+ hours per week',
      downloadUrl: '/downloads/Document-Automation-Templates.xlsx'
    },
    {
      id: 17,
      title: 'Remote Work Policy Template',
      type: 'template',
      stage: ['mid', 'large'],
      topic: 'operations',
      description: 'Comprehensive policy for hybrid and remote team management',
      downloadUrl: '/downloads/Remote-Work-Policy.pdf'
    },
    {
      id: 18,
      title: 'Time Tracking & Billing Checklist',
      type: 'checklist',
      stage: ['solo', 'mid'],
      topic: 'operations',
      description: 'Never miss billable hours with this daily tracking system',
      downloadUrl: '/downloads/Time-Tracking-Billing-Checklist.pdf'
    },
    {
      id: 19,
      title: 'Client Portal Setup Guide',
      type: 'guide',
      stage: ['mid', 'large'],
      topic: 'operations',
      description: 'Improve client experience with secure document sharing and updates',
      downloadUrl: '/downloads/Client-Portal-Guide.pdf'
    },

    // Business Development
    {
      id: 20,
      downloadUrl: '/downloads/Lead-Conversion-Playbook.pdf'
    },
    {
      id: 21,
      downloadUrl: '/downloads/Consultation-Script-Template.pdf'
    },
    {
      id: 22,
      title: 'Networking Tracker',
      type: 'template',
      stage: ['solo', 'mid'],
      topic: 'business',
      description: 'Track connections, follow-ups, and referrals from networking events',
      downloadUrl: '/downloads/Networking-Tracker.xlsx'
    },
    {
      id: 23,
      title: 'Partnership Outreach Templates',
      type: 'template',
      stage: ['mid', 'large'],
      topic: 'business',
      description: 'Email templates for accountants, financial advisors, and other referral sources',
      downloadUrl: '#'
    },
    {
      id: 24,
      title: 'Speaking Engagement Checklist',
      type: 'checklist',
      stage: ['solo', 'mid'],
      topic: 'business',
      description: 'Prepare and deliver presentations that generate leads',
      downloadUrl: '/downloads/Speaking-Engagement-Kit.xlsx'
    },

    // Financial Resources
    {
      id: 25,
      title: 'Financial KPIs Dashboard',
      type: 'template',
      stage: ['mid', 'large'],
      topic: 'financial',
      description: 'Track the 12 most important metrics for law firm profitability',
      downloadUrl: '#'
    },
    {
      id: 26,
      title: 'Pricing Strategy Workbook',
      type: 'template',
      stage: ['solo', 'mid'],
      topic: 'financial',
      description: 'Calculate your rates and create value-based pricing packages',
      downloadUrl: '#'
    },
    {
      id: 27,
      title: 'Cash Flow Projection Template',
      type: 'template',
      stage: ['solo', 'mid', 'large'],
      topic: 'financial',
      description: '12-month cash flow forecast with scenario planning',
      downloadUrl: '#'
    },
    {
      id: 28,
      title: 'Annual Budget Template',
      type: 'template',
      stage: ['mid', 'large'],
      topic: 'financial',
      description: 'Comprehensive budget template with department breakdowns',
      downloadUrl: '/downloads/Annual-Budget-Template.xlsx'
    },
    {
      id: 29,
      title: 'Profitability Analysis Guide',
      type: 'guide',
      stage: ['mid', 'large'],
      topic: 'financial',
      description: 'Analyze profitability by practice area, attorney, and case type',
      downloadUrl: '/downloads/Profitability-Analysis.xlsx'
    },
    {
      id: 30,
      title: 'Collections Process Checklist',
      type: 'checklist',
      stage: ['solo', 'mid'],
      topic: 'financial',
      description: 'Systematic approach to reduce outstanding receivables',
      downloadUrl: '#'
    }
  ];

  // Filter resources
  const filteredResources = resources.filter(resource => {
    const stageMatch = resource.stage && resource.stage.includes(selectedStage);
    const topicMatch = selectedTopic === 'all' || resource.topic === selectedTopic;
    return stageMatch && topicMatch;
  });

  // Login component
  // Main app - removed authentication
  // Users can always access content
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Content */}
      {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
      {currentPage === 'resources' && <ResourcesPage selectedStage={selectedStage} setSelectedStage={setSelectedStage} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} resources={resources} stages={stages} topics={topics} />}
      {currentPage === 'calculators' && <CalculatorsPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'growth-calculator' && <GrowthCalculatorPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'ai-calculator' && <AICalculatorPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'ai-prompts' && <AIPromptsPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'about' && <AboutPage />}
    </div>
  );

  // HomePage Component
  function HomePage({ setCurrentPage }) {
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
              <button 
                onClick={() => setCurrentPage('resources')}
                className="px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition text-lg shadow-lg shadow-orange-500/30"
              >
                Browse Resources
              </button>
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
                  Battle-tested frameworks for intake, marketing, operations, and more  ready to use today.
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
                Get a dedicated Growth Counsel  your personal advisor who knows your firm, your market, and exactly what moves the needle.
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
                  Your counsel brings the entire Pioneerly team  marketing, tech, operations  when you need them.
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
              <button
                onClick={() => { setCurrentPage('resources'); /* Set topic filter here */ }}
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
              </button>

              {/* AI Tools */}
              <button
                onClick={() => { setCurrentPage('resources'); }}
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
              </button>

              {/* Operations */}
              <button
                onClick={() => { setCurrentPage('resources'); }}
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
              </button>

              {/* Business Development */}
              <button
                onClick={() => { setCurrentPage('resources'); }}
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
              </button>

              {/* Financial */}
              <button
                onClick={() => { setCurrentPage('resources'); }}
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
              </button>

              {/* Calculators */}
              <button
                onClick={() => { setCurrentPage('calculators'); }}
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
              </button>
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
              <button
                onClick={() => setCurrentPage('calculators')}
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
              </button>

              {/* AI Prompts Library - Featured */}
              <button
                onClick={() => setCurrentPage('resources')}
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
                  50+ tested prompts for legal research, client communication, and document drafting.
                </p>
                <div className="flex items-center text-orange-600 font-medium">
                  <span>Download now</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>

            {/* Secondary Resources */}
            <div className="grid md:grid-cols-3 gap-6">
              <button
                onClick={() => setCurrentPage('resources')}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-orange-300 hover:shadow-md transition text-left group"
              >
                <div className="p-3 bg-orange-100 rounded-lg inline-flex mb-4">
                  <CheckSquare className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Client Intake Checklist</h4>
                <p className="text-sm text-slate-600">15-point system to streamline onboarding</p>
              </button>

              <button
                onClick={() => setCurrentPage('resources')}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-orange-300 hover:shadow-md transition text-left group"
              >
                <div className="p-3 bg-orange-100 rounded-lg inline-flex mb-4">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Marketing Budget Template</h4>
                <p className="text-sm text-slate-600">Track spend and ROI month by month</p>
              </button>

              <button
                onClick={() => setCurrentPage('resources')}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-orange-300 hover:shadow-md transition text-left group"
              >
                <div className="p-3 bg-orange-100 rounded-lg inline-flex mb-4">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Lead Conversion Playbook</h4>
                <p className="text-sm text-slate-600">Turn consultations into retained clients</p>
              </button>
            </div>

            <div className="text-center mt-12">
              <button 
                onClick={() => setCurrentPage('resources')}
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition"
              >
                Browse All Resources
              </button>
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
            <button 
              onClick={() => setCurrentPage('resources')}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition text-lg"
            >
              Browse All Resources
            </button>
          </div>
        </div>
      </>
    );
  }

  // ResourcesPage Component
  function ResourcesPage({ selectedStage, setSelectedStage, selectedTopic, setSelectedTopic, resources, stages, topics }) {
    const filteredResources = resources.filter(resource => {
      const stageMatch = resource.stage.includes(selectedStage);
      const topicMatch = selectedTopic === 'all' || resource.topic === selectedTopic;
      return stageMatch && topicMatch;
    });

    const totalResources = resources.length;
    const calculators = resources.filter(r => r.isCalculator).length;
    const guides = totalResources - calculators;

    return (
      <>
        {/* Header */}
        <div className="bg-slate-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Resource Library</h1>
            <p className="text-xl text-slate-300 mb-8">Checklists, templates, and guides to help your firm grow</p>
            
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-bold text-orange-400">{totalResources}</div>
                <div className="text-slate-400 text-sm">Total Resources</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">{calculators}</div>
                <div className="text-slate-400 text-sm">Calculators</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">{guides}</div>
                <div className="text-slate-400 text-sm">Guides & Templates</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stage Selector */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Select Your Firm Stage</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stages.map((stage) => {
                const Icon = stage.icon;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setSelectedStage(stage.id)}
                    className={`p-6 rounded-xl border-2 text-left transition ${
                      selectedStage === stage.id
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${
                        selectedStage === stage.id ? 'bg-gradient-to-br from-orange-500 to-orange-600' : 'bg-slate-100'
                      }`}>
                        <Icon className={`w-6 h-6 ${
                          selectedStage === stage.id ? 'text-white' : 'text-slate-600'
                        }`} />
                      </div>
                      <div>
                        <h4 className={`font-semibold mb-1 ${
                          selectedStage === stage.id ? 'text-orange-900' : 'text-slate-900'
                        }`}>
                          {stage.name}
                        </h4>
                        <p className="text-sm text-slate-600">{stage.subtitle}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Topic Filter */}
        <div className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-wrap gap-3">
              {topics.map((topic) => {
                const Icon = topic.icon;
                return (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedTopic(topic.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition ${
                      selectedTopic === topic.id
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white border-orange-500'
                        : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{topic.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900">
              {filteredResources.length} Resources Available
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${
                    resource.isCalculator ? 'bg-purple-100' : 'bg-orange-100'
                  }`}>
                    {resource.isCalculator ? (
                      <Calculator className="w-6 h-6 text-purple-600" />
                    ) : (
                      <FileText className="w-6 h-6 text-orange-600" />
                    )}
                  </div>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                    {resource.type}
                  </span>
                </div>

                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  {resource.title}
                </h4>
                <p className="text-sm text-slate-600 mb-4">
                  {resource.description}
                </p>

                {resource.isCalculator ? (
                  <Link 
                    href={resource.id === 1 ? '/growth-calculator' : '/ai-calculator'}
                    className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition text-center block"
                  >
                    Open Calculator
                  </Link>
                ) : resource.id === 9 ? (
                  <Link 
                    href="/ai-prompts"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 px-4 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition text-center block"
                  >
                    View Resource
                  </Link>
                ) : resource.isSpecialPage ? (
                  <button 
                    onClick={() => setCurrentPage(resource.pageRoute)}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 px-4 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition"
                  >
                    View Resource
                  </button>
                ) : (
                  <button 
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = resource.downloadUrl;
                      link.download = "";
                      link.click();
                    }}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 px-4 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition"
                  >
                    Download
                  </button>
                )}
              </div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No resources found</h3>
              <p className="text-slate-600">Try selecting a different stage or topic</p>
            </div>
          )}
        </div>
      </>
    );
  }

  // CalculatorsPage Component
  function CalculatorsPage({ setCurrentPage }) {
    return (
      <>
        <div className="bg-slate-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Interactive Calculators</h1>
            <p className="text-xl text-slate-300 mb-8">Data-driven tools to guide your growth strategy</p>
            
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-bold text-orange-400">2</div>
                <div className="text-slate-400 text-sm">Free Tools</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">~5 min</div>
                <div className="text-slate-400 text-sm">Per Assessment</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Growth Calculator */}
            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-sm">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex-shrink-0">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Growth Calculator</h4>
                  <p className="text-slate-600">Project your firm's revenue potential</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h5 className="font-semibold text-slate-900 mb-3">What you'll get:</h5>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckSquare className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Revenue projections for 6, 12, and 24 months</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckSquare className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Case volume needed to hit your targets</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckSquare className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Marketing budget recommendations</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckSquare className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Hiring timeline and capacity planning</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <iframe 
                  src="https://pioneerly-tool.vercel.app/" 
                  className="w-full border-0 rounded-lg" 
                  style={{height: '600px'}}
                  title="Growth Calculator"
                  allowFullScreen
                />
              </div>
            </div>

            {/* AI Sophistication Calculator */}
            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-sm">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex-shrink-0">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">AI Sophistication Assessment</h4>
                  <p className="text-slate-600">Benchmark your AI readiness</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h5 className="font-semibold text-slate-900 mb-3">What you'll get:</h5>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckSquare className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Your firm's AI maturity score (0-100)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckSquare className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Comparison to similar-sized firms</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckSquare className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Recommended AI tools for your practice</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckSquare className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>90-day implementation roadmap</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <iframe 
                  src="https://aeo-calculator.vercel.app/" 
                  className="w-full border-0 rounded-lg" 
                  style={{height: '600px'}}
                  title="AI Sophistication Calculator"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* CTA to other resources */}
          <div className="bg-slate-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Want more tools?</h3>
            <p className="text-slate-600 mb-6">
              Browse our complete library of templates, checklists, and guides
            </p>
            <button 
              onClick={() => setCurrentPage('resources')}
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition"
            >
              Browse All Resources
            </button>
          </div>
        </div>
      </>
    );
  }

  // GrowthCalculatorPage Component
  function GrowthCalculatorPage({ setCurrentPage }) {
    return (
      <>
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button 
              onClick={() => setCurrentPage('resources')}
              className="flex items-center gap-2 text-white/80 hover:text-white transition mb-6"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Resources
            </button>
            
            <div className="flex items-start gap-6">
              <div className="p-4 bg-white/10 rounded-xl backdrop-blur">
                <TrendingUp className="w-12 h-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Law Firm Growth Calculator</h1>
                <p className="text-xl text-blue-100 max-w-3xl">
                  See exactly where your revenue could be in 6, 12, and 24 months with our data-driven projections
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 px-8 py-6 border-b border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">What you'll discover:</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckSquare className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Revenue projections for 6, 12, and 24 months</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckSquare className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Case volume needed to hit your targets</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckSquare className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Marketing budget recommendations</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckSquare className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Hiring timeline and capacity planning</span>
                </div>
              </div>
            </div>
            
            <div className="p-0">
              <iframe 
                src="https://pioneerly-tool.vercel.app/" 
                className="w-full border-0" 
                style={{height: '800px', display: 'block'}}
                title="Growth Calculator"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-slate-50 rounded-2xl p-8 inline-block">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Want personalized guidance?</h3>
              <p className="text-slate-600 mb-6 max-w-2xl">
                Get a dedicated Growth Counsel to help you implement these strategies
              </p>
              <a 
                href="https://pioneerly.com/book-consultation"
                className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition text-lg"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  // AICalculatorPage Component
  function AICalculatorPage({ setCurrentPage }) {
    return (
      <>
        <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button 
              onClick={() => setCurrentPage('resources')}
              className="flex items-center gap-2 text-white/80 hover:text-white transition mb-6"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Resources
            </button>
            
            <div className="flex items-start gap-6">
              <div className="p-4 bg-white/10 rounded-xl backdrop-blur">
                <Brain className="w-12 h-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Sophistication Assessment</h1>
                <p className="text-xl text-purple-100 max-w-3xl">
                  Assess your firm's AI readiness and get personalized recommendations for implementation
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 px-8 py-6 border-b border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">What you'll discover:</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckSquare className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Your firm's AI maturity score (0-100)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckSquare className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Comparison to similar-sized firms</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckSquare className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Recommended AI tools for your practice</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckSquare className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">90-day implementation roadmap</span>
                </div>
              </div>
            </div>
            
            <div className="p-0">
              <iframe 
                src="https://aeo-calculator.vercel.app/" 
                className="w-full border-0" 
                style={{height: '800px', display: 'block'}}
                title="AI Sophistication Calculator"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-slate-50 rounded-2xl p-8 inline-block">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Ready to implement AI?</h3>
              <p className="text-slate-600 mb-6 max-w-2xl">
                Work with experts who understand both AI and law firm operations
              </p>
              <a 
                href="https://pioneerly.com/book-consultation"
                className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition text-lg"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  // AboutPage Component
  function AboutPage() {
    return (
      <>
        <div className="bg-slate-900 text-white py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">About The Case for Growth</h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              We built this resource hub because we were tired of seeing law firms struggle with the same challenges over and over. 
              Instead of reinventing the wheel, we packaged everything we've learned into tools you can actually use.
            </p>
          </div>
        </div>

        <div className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-16 text-center">Meet the founders</h2>
            
            <div className="space-y-20">
              {/* Matt */}
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-40 h-40 mb-6 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 p-1">
                    <img src={mattPhoto} className="w-full h-full rounded-full object-cover" alt="Matt" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Matt</h3>
                  <p className="text-orange-600 font-medium mb-4">Co-Founder, Growth Strategy</p>
                  <a 
                    href="https://www.linkedin.com/in/matt-sarson/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-600 hover:text-orange-600 transition"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
                <div className="max-w-3xl mx-auto space-y-6 text-lg text-slate-600 leading-relaxed text-center">
                  <p>
                    I grew up at Shakespeare's school in Stratford-upon-Avon and went on to study creative writing, 
                    before embarking on two decades of high-impact growth work within some of the most innovative tech sectors.
                  </p>
                  <p>
                    This journey eventually led me into the legaltech world, where I began to take a huge interest in law firm marketing. 
                    I saw an opportunity to bring fresh thinking and proven growth strategies from the tech world to help law firms scale 
                    in ways that actually work.
                  </p>
                  <p>
                    These days, I focus on cutting through the noise and finding what actually moves the needle for law firms  
                    whether that's rethinking your positioning, optimizing your funnel, or building systems that bring in cases consistently.
                  </p>
                </div>
              </div>

              {/* Piotr */}
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-40 h-40 mb-6 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 p-1">
                    <img src={piotrPhoto} className="w-full h-full rounded-full object-cover" alt="Piotr" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Piotr</h3>
                  <p className="text-orange-600 font-medium mb-4">Co-Founder, Operations & AI</p>
                  <a 
                    href="https://www.linkedin.com/in/piotrszalkiewicz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-600 hover:text-orange-600 transition"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
                <div className="max-w-3xl mx-auto space-y-6 text-lg text-slate-600 leading-relaxed text-center">
                  <p>
                    I launched my first business from my bedroom as a teenager, which I grew to acquisition. 
                    That early success taught me the fundamentals of building and scaling companies from the ground up.
                  </p>
                  <p>
                    I then decided to lead growth at other companies in the tech space, combining my operations and tech skills 
                    alongside business nous. After spending several years working side by side with law firms, I saw a great 
                    opportunity to support them in a meaningful way.
                  </p>
                  <p>
                    My mission is to help law firms use AI and automation without losing the personal touch that makes them great. 
                    Every template, calculator, and tool in this hub is designed to save you time while improving outcomes for your clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Want to work with us?</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              These resources are just the beginning. Get personalized guidance from a dedicated growth counsel.
            </p>
            <a 
              href="https://pioneerly.com/book-consultation" 
              className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition text-lg"
            >
              Make us Your Growth Counsel
            </a>
          </div>
        </div>
      </>
    );
  }
};

export default TheCaseForGrowth;
