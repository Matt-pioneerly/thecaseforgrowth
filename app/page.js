'use client';

import { useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Lock, TrendingUp, Brain, Calculator, CheckCircle, Zap, Users } from 'lucide-react';

export default function PublicLandingPage() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  // Redirect signed-in users to resources
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push('/resources');
    }
  }, [isLoaded, isSignedIn, router]);

  // Show loading while checking auth
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Don't render landing page if signed in (will redirect)
  if (isSignedIn) {
    return null;
  }

  const featuredResources = [
    {
      id: 1,
      title: 'AI Prompts for Legal Research',
      type: 'Guide',
      description: '56 battle-tested prompts for case research, document drafting, and client communication',
      icon: Brain,
      color: 'purple',
      badge: 'New'
    },
    {
      id: 2,
      title: 'Law Firm Growth Calculator',
      type: 'Calculator',
      description: 'Calculate your firm\'s growth potential and identify revenue opportunities',
      icon: Calculator,
      color: 'blue',
    },
    {
      id: 3,
      title: 'Client Intake Checklist',
      type: 'Checklist',
      description: '15-point checklist to streamline your client onboarding process',
      icon: CheckCircle,
      color: 'green',
    },
    {
      id: 4,
      title: 'Marketing Budget Template',
      type: 'Template',
      description: 'Monthly and quarterly marketing spend template with ROI tracking',
      icon: TrendingUp,
      color: 'orange',
    },
    {
      id: 5,
      title: 'AI Sophistication Assessment',
      type: 'Calculator',
      description: 'Assess your firm\'s AI readiness and get personalized recommendations',
      icon: Zap,
      color: 'amber',
    },
  ];

  const benefits = [
    '30+ templates, guides & checklists',
    'Interactive growth calculators',
    'AI implementation resources',
    'Marketing strategies & tools',
    'Financial planning templates',
    'Operations optimization guides'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-slate-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Scale Your Law Firm with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              Data-Driven Growth
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Get instant access to 30+ templates, calculators, and guides designed specifically for law firm growth. From AI implementation to client acquisition strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition shadow-lg hover:shadow-xl"
            >
              Sign Up Free →
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white text-slate-700 rounded-lg font-semibold text-lg hover:bg-slate-50 transition border-2 border-slate-200"
            >
              Learn More
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            ✨ No credit card required • Instant access • Free forever
          </p>
        </div>
      </div>

      {/* Featured Resources Preview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Preview Our Resources
          </h2>
          <p className="text-lg text-slate-600">
            Sign up free to unlock all 30+ resources
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredResources.map((resource) => {
            const Icon = resource.icon;
            const colorClasses = {
              purple: 'bg-purple-100 text-purple-600',
              blue: 'bg-blue-100 text-blue-600',
              green: 'bg-green-100 text-green-600',
              orange: 'bg-orange-100 text-orange-600',
              amber: 'bg-amber-100 text-amber-600',
            };

            return (
              <div
                key={resource.id}
                className="bg-white rounded-xl border-2 border-slate-200 p-6 hover:border-orange-300 transition group relative overflow-hidden"
              >
                {/* Lock overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white/95 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link
                    href="/sign-up"
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition shadow-lg flex items-center gap-2"
                  >
                    <Lock className="w-4 h-4" />
                    Sign Up to Access
                  </Link>
                </div>

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg ${colorClasses[resource.color]} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {resource.badge && (
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded">
                        {resource.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                    {resource.type}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {resource.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/sign-up"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition shadow-lg"
          >
            <Lock className="w-5 h-5" />
            Unlock All Resources Free
          </Link>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Grow
            </h2>
            <p className="text-lg text-slate-400">
              Join hundreds of law firms using our resources to scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/sign-up"
              className="inline-block px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold text-lg hover:bg-slate-100 transition"
            >
              Get Started Free →
            </Link>
            <p className="mt-4 text-slate-400">
              Already have an account?{' '}
              <Link href="/sign-in" className="text-orange-400 hover:text-orange-300 font-semibold">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Growth Counsel CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Want Personalized Growth Strategy?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Get a dedicated growth advisor who knows your firm and delivers real results. Premium service for firms serious about scaling.
            </p>
            <a
              href="https://pioneerly.com/book-consultation"
              className="inline-block px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold text-lg hover:bg-slate-100 transition"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
