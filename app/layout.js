'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, TrendingUp, Brain, CheckSquare, Users, Calendar } from 'lucide-react';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            <span className="text-slate-900">The Case for</span>{' '}
            <span className="text-orange-600">Growth</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 hover:text-orange-600 transition">
              Home
            </Link>
            
            <div className="relative group">
              <button className="text-slate-700 hover:text-orange-600 transition flex items-center gap-1">
                Resources
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all max-h-[600px] overflow-y-auto">
                <div className="p-4">
                  {/* Browse All */}
                  <Link href="/resources" className="block mb-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-50 transition border-2 border-orange-200">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">Browse All Resources</div>
                        <div className="text-sm text-slate-600">30+ templates, calculators & guides</div>
                      </div>
                    </div>
                  </Link>

                  {/* Featured Pages */}
                  <div className="border-t border-slate-200 pt-3 mb-3">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide px-3 mb-2">Featured</div>
                    
                    <Link href="/ai-prompts" className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-50 transition">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-slate-900 text-sm">AI Prompts</div>
                        <div className="text-xs text-slate-600">56 prompts for legal work</div>
                      </div>
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded">New</span>
                    </Link>

                    <Link href="/growth-calculator" className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-50 transition">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-slate-900 text-sm">Growth Calculator</div>
                        <div className="text-xs text-slate-600">Revenue projections</div>
                      </div>
                    </Link>

                    <Link href="/ai-calculator" className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-50 transition">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-slate-900 text-sm">AI Assessment</div>
                        <div className="text-xs text-slate-600">Evaluate your readiness</div>
                      </div>
                    </Link>
                  </div>

                  {/* All Categories */}
                  <div className="border-t border-slate-200 pt-3">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide px-3 mb-2">By Category</div>

                    <div className="grid grid-cols-2 gap-2 px-2">
                      <Link href="/resources" className="text-left p-3 hover:bg-blue-50 rounded-lg transition-all group">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-all">
                            <TrendingUp className="w-3 h-3 text-blue-600" />
                          </div>
                          <span className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-all">Marketing</span>
                        </div>
                        <div className="text-xs text-slate-600">Client acquisition</div>
                      </Link>

                      <Link href="/resources" className="text-left p-3 hover:bg-purple-50 rounded-lg transition-all group">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-all">
                            <Brain className="w-3 h-3 text-purple-600" />
                          </div>
                          <span className="text-sm font-semibold text-slate-900 group-hover:text-purple-600 transition-all">AI Tools</span>
                        </div>
                        <div className="text-xs text-slate-600">Implementation</div>
                      </Link>

                      <Link href="/resources" className="text-left p-3 hover:bg-green-50 rounded-lg transition-all group">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-all">
                            <CheckSquare className="w-3 h-3 text-green-600" />
                          </div>
                          <span className="text-sm font-semibold text-slate-900 group-hover:text-green-600 transition-all">Operations</span>
                        </div>
                        <div className="text-xs text-slate-600">Efficiency</div>
                      </Link>

                      <Link href="/resources" className="text-left p-3 hover:bg-orange-50 rounded-lg transition-all group">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 transition-all">
                            <Users className="w-3 h-3 text-orange-600" />
                          </div>
                          <span className="text-sm font-semibold text-slate-900 group-hover:text-orange-600 transition-all">Business Dev</span>
                        </div>
                        <div className="text-xs text-slate-600">Growth strategies</div>
                      </Link>

                      <Link href="/resources" className="text-left p-3 hover:bg-amber-50 rounded-lg transition-all group">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 bg-amber-100 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-amber-200 transition-all">
                            <Calendar className="w-3 h-3 text-amber-600" />
                          </div>
                          <span className="text-sm font-semibold text-slate-900 group-hover:text-amber-600 transition-all">Financial</span>
                        </div>
                        <div className="text-xs text-slate-600">Revenue growth</div>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-slate-200">
                    <a
                      href="https://pioneerly.com/book-consultation"
                      className="block m-2 rounded-lg overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 transition group"
                    >
                      <div className="p-4 relative">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl"></div>
                        
                        <div className="relative">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Users className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <div className="font-semibold text-white group-hover:text-orange-300 transition">Growth Counsel</div>
                              </div>
                            </div>
                            <span className="px-2 py-0.5 bg-orange-500/20 text-orange-300 text-xs font-semibold rounded border border-orange-500/30">
                              Premium
                            </span>
                          </div>
                          <p className="text-sm text-slate-400 leading-relaxed">
                            Personal advisor who knows your firm and delivers real results
                          </p>
                          <div className="mt-3 flex items-center text-orange-400 text-sm font-medium">
                            <span>Book consultation</span>
                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/about" className="text-slate-700 hover:text-orange-600 transition">
              About
            </Link>

            <a
              href="https://pioneerly.com/book-consultation"
              className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <Link href="/" className="block py-2 text-slate-700 hover:text-orange-600">
              Home
            </Link>
            <Link href="/resources" className="block py-2 text-slate-700 hover:text-orange-600">
              Resources
            </Link>
            <Link href="/ai-prompts" className="block py-2 text-slate-700 hover:text-orange-600 pl-4">
              → AI Prompts
            </Link>
            <Link href="/growth-calculator" className="block py-2 text-slate-700 hover:text-orange-600 pl-4">
              → Growth Calculator
            </Link>
            <Link href="/ai-calculator" className="block py-2 text-slate-700 hover:text-orange-600 pl-4">
              → AI Assessment
            </Link>
            <Link href="/about" className="block py-2 text-slate-700 hover:text-orange-600">
              About
            </Link>
            <a
              href="https://pioneerly.com/book-consultation"
              className="block mt-4 px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold text-center"
            >
              Book Consultation
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">The Case for Growth</h3>
          <p className="text-slate-400 mb-6">
            Resources and tools to help law firms scale with AI and marketing
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <Link href="/resources" className="text-slate-400 hover:text-white transition">
              Resources
            </Link>
            <Link href="/ai-prompts" className="text-slate-400 hover:text-white transition">
              AI Prompts
            </Link>
            <Link href="/about" className="text-slate-400 hover:text-white transition">
              About
            </Link>
          </div>
          <p className="text-slate-500 text-sm">
            A project by{' '}
            <a href="https://pioneerly.com" className="text-orange-500 hover:text-orange-400">
              Pioneerly
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
