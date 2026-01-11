'use client';

import React, { useState } from 'react';
import { Copy, Check, Download, Brain, FileText, MessageSquare, Search, Target, Clock, ChevronDown } from 'lucide-react';

const AIPromptsPage = ({ setCurrentPage }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [copiedId, setCopiedId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const categories = [
    { id: 'all', name: 'All Prompts', icon: Brain, count: 56 },
    { id: 'Case Research & Analysis', name: 'Case Research', icon: Search, count: 10 },
    { id: 'Document Drafting', name: 'Drafting', icon: FileText, count: 12 },
    { id: 'Client Communication', name: 'Client Comms', icon: MessageSquare, count: 10 },
    { id: 'Discovery & Evidence', name: 'Discovery', icon: Target, count: 8 },
    { id: 'Legal Strategy', name: 'Strategy', icon: Brain, count: 8 },
    { id: 'Time-Saving Tasks', name: 'Time-Savers', icon: Clock, count: 8 }
  ];

  const prompts = [
    // Case Research & Analysis
    {
      id: 1,
      category: "Case Research & Analysis",
      title: "Case Law Summary",
      prompt: "Analyze [CASE NAME] and provide: 1) Key facts, 2) Legal issues addressed, 3) Court's holding, 4) Reasoning, 5) Practical implications for [YOUR PRACTICE AREA]",
      useCase: "Quickly understand relevant case precedents"
    },
    {
      id: 2,
      category: "Case Research & Analysis",
      title: "Statute Interpretation",
      prompt: "Explain [STATUTE/CODE SECTION] in plain English. Include: 1) Purpose and scope, 2) Key requirements, 3) Common interpretations, 4) Recent amendments, 5) How it applies to [SPECIFIC SITUATION]",
      useCase: "Break down complex statutes for client understanding"
    },
    {
      id: 3,
      category: "Case Research & Analysis",
      title: "Legal Issue Spot",
      prompt: "Review this fact pattern: [FACTS]. Identify: 1) All potential legal issues, 2) Applicable areas of law, 3) Potential claims or defenses, 4) Jurisdiction-specific considerations, 5) Priority issues to research",
      useCase: "Comprehensive initial case assessment"
    },
    {
      id: 4,
      category: "Case Research & Analysis",
      title: "Jurisdiction Comparison",
      prompt: "Compare how [LEGAL ISSUE] is handled in [STATE A] vs [STATE B]. Include: 1) Key statutory differences, 2) Case law trends, 3) Procedural variations, 4) Practical impact on outcomes",
      useCase: "Multi-state practice strategy"
    },
    {
      id: 5,
      category: "Case Research & Analysis",
      title: "Recent Developments Research",
      prompt: "Summarize recent (last 12 months) legal developments in [PRACTICE AREA] regarding [SPECIFIC ISSUE]. Include: 1) New case law, 2) Statutory changes, 3) Regulatory updates, 4) Emerging trends",
      useCase: "Stay current on legal developments"
    },
    {
      id: 6,
      category: "Case Research & Analysis",
      title: "Adverse Authority Analysis",
      prompt: "Analyze this opposing case: [CASE]. Provide: 1) How it differs from our facts, 2) Distinguishing arguments, 3) Weaknesses in the court's reasoning, 4) Alternative interpretations, 5) Counter-authorities",
      useCase: "Prepare responses to opposing counsel's citations"
    },
    {
      id: 7,
      category: "Case Research & Analysis",
      title: "Settlement Value Assessment",
      prompt: "Based on these facts [FACTS] and applicable law [JURISDICTION/STATUTES], analyze: 1) Potential verdict range, 2) Strengths and weaknesses of case, 3) Cost of litigation, 4) Reasonable settlement range, 5) Risk factors",
      useCase: "Advise clients on settlement negotiations"
    },
    {
      id: 8,
      category: "Case Research & Analysis",
      title: "Precedent Finding",
      prompt: "Find cases similar to [DESCRIBE SITUATION] in [JURISDICTION] involving [LEGAL ISSUE]. Prioritize: 1) Most recent cases, 2) Same court level, 3) Favorable holdings, 4) Similar fact patterns",
      useCase: "Build persuasive case authority"
    },
    {
      id: 9,
      category: "Case Research & Analysis",
      title: "Legislative History",
      prompt: "Research the legislative history of [STATUTE]. Provide: 1) Original intent, 2) Committee reports, 3) Floor debates, 4) Amendments over time, 5) How courts have interpreted this history",
      useCase: "Statutory interpretation arguments"
    },
    {
      id: 10,
      category: "Case Research & Analysis",
      title: "Conflict of Laws Analysis",
      prompt: "Analyze which state's law should apply to [DISPUTE] involving parties from [STATE A] and [STATE B] with events in [STATE C]. Consider: 1) Choice of law rules, 2) Most significant relationship test, 3) Policy considerations",
      useCase: "Multi-jurisdictional disputes"
    },

    // Document Drafting (12 prompts)
    {
      id: 11,
      category: "Document Drafting",
      title: "Demand Letter",
      prompt: "Draft a professional demand letter for [CLIENT] to [RECIPIENT] regarding [ISSUE]. Include: 1) Statement of facts, 2) Legal basis for claim, 3) Damages/remedy sought, 4) Deadline for response, 5) Consequences of non-compliance. Tone: [firm/conciliatory]",
      useCase: "Pre-litigation client representation"
    },
    {
      id: 12,
      category: "Document Drafting",
      title: "Motion to Dismiss Draft",
      prompt: "Draft a Motion to Dismiss under Rule [12(b)(6)] for [CASE]. Arguments: [LIST GROUNDS]. Include: 1) Caption, 2) Introduction, 3) Statement of facts, 4) Legal argument with citations, 5) Conclusion. Format for [JURISDICTION]",
      useCase: "Early case dismissal strategy"
    },
    {
      id: 13,
      category: "Document Drafting",
      title: "Discovery Requests",
      prompt: "Draft [interrogatories/requests for production/requests for admission] for [CASE TYPE] focusing on [KEY ISSUES]. Target areas: [LIST TOPICS]. Make them specific, relevant, and difficult to evade",
      useCase: "Effective discovery planning"
    },
    {
      id: 14,
      category: "Document Drafting",
      title: "Contract Clause",
      prompt: "Draft a [TYPE] clause for a [CONTRACT TYPE] that addresses [SPECIFIC ISSUE]. Requirements: 1) Protect [PARTY], 2) Cover scenarios: [LIST], 3) Comply with [JURISDICTION] law, 4) Clear and enforceable language",
      useCase: "Custom contract provisions"
    },
    {
      id: 15,
      category: "Document Drafting",
      title: "Settlement Agreement",
      prompt: "Draft a settlement agreement for [PARTIES] resolving [DISPUTE]. Terms: [LIST TERMS]. Include: 1) Release language, 2) Confidentiality clause, 3) Payment terms, 4) Enforcement provisions, 5) Representations and warranties",
      useCase: "Finalize case resolutions"
    },
    {
      id: 16,
      category: "Document Drafting",
      title: "Memorandum of Law",
      prompt: "Write an internal memorandum analyzing [LEGAL QUESTION] for [CLIENT/CASE]. Structure: 1) Question Presented, 2) Brief Answer, 3) Facts, 4) Discussion (with case citations), 5) Conclusion. Jurisdiction: [STATE/FEDERAL]",
      useCase: "Internal legal research documentation"
    },
    {
      id: 17,
      category: "Document Drafting",
      title: "Objection Response",
      prompt: "Draft a response to opposing counsel's objection to [DISCOVERY REQUEST/MOTION/EVIDENCE]. Their grounds: [OBJECTION]. Counter with: 1) Legal basis for request, 2) Relevance, 3) Authority supporting your position, 4) Proportionality argument",
      useCase: "Discovery disputes"
    },
    {
      id: 18,
      category: "Document Drafting",
      title: "Affidavit Draft",
      prompt: "Draft an affidavit for [AFFIANT NAME] regarding [SUBJECT MATTER] for use in [PROCEEDING]. Include: 1) Personal knowledge statements, 2) Relevant facts in chronological order, 3) Exhibits reference, 4) Proper oath language for [JURISDICTION]",
      useCase: "Evidentiary support for motions"
    },
    {
      id: 19,
      category: "Document Drafting",
      title: "Retainer Agreement",
      prompt: "Draft a client retainer agreement for [PRACTICE AREA] representation. Include: 1) Scope of representation, 2) Fee structure [hourly/flat/contingency], 3) Costs and expenses, 4) Client responsibilities, 5) Termination provisions, 6) Conflict waiver language",
      useCase: "Client engagement documentation"
    },
    {
      id: 20,
      category: "Document Drafting",
      title: "Cease and Desist Letter",
      prompt: "Draft a cease and desist letter to [RECIPIENT] regarding [INFRINGING/HARMFUL ACTIVITY]. Include: 1) Description of protected rights, 2) Specific infringing conduct, 3) Legal basis for demand, 4) Concrete actions required, 5) Timeline for compliance, 6) Consequences",
      useCase: "IP protection and harassment cases"
    },
    {
      id: 21,
      category: "Document Drafting",
      title: "Notice of Appeal",
      prompt: "Draft a Notice of Appeal for [CASE] from [LOWER COURT DECISION] to [APPELLATE COURT]. Include: 1) Proper caption, 2) Identification of judgment appealed, 3) Statement of jurisdiction, 4) Relief sought. Format per [JURISDICTION] rules",
      useCase: "Appellate procedure initiation"
    },
    {
      id: 22,
      category: "Document Drafting",
      title: "Expert Witness Disclosure",
      prompt: "Draft expert witness disclosure for [EXPERT NAME] in [CASE]. Include: 1) Qualifications summary, 2) Opinions to be offered, 3) Basis for opinions, 4) Materials reviewed, 5) Compensation, 6) Prior testimony list. Comply with [FRCP 26/State Rule]",
      useCase: "Expert testimony preparation"
    },

    // Client Communication (10 prompts)
    {
      id: 23,
      category: "Client Communication",
      title: "Case Update Email",
      prompt: "Write a client update email for [CLIENT] regarding [CASE/MATTER]. Recent developments: [LIST EVENTS]. Include: 1) Summary of what happened, 2) Implications for case, 3) Next steps, 4) What client needs to do, 5) Timeline. Tone: professional, reassuring",
      useCase: "Regular client communication"
    },
    {
      id: 24,
      category: "Client Communication",
      title: "Complex Legal Concept Explanation",
      prompt: "Explain [LEGAL CONCEPT] to client in plain English. Use: 1) Simple analogies, 2) Real-world examples, 3) Why it matters to their case, 4) Avoid jargon. Context: [CLIENT'S SITUATION]",
      useCase: "Client education and transparency"
    },
    {
      id: 25,
      category: "Client Communication",
      title: "Bad News Communication",
      prompt: "Draft a sensitive email to [CLIENT] explaining [NEGATIVE DEVELOPMENT] in their case. Include: 1) Clear statement of what happened, 2) Why it happened, 3) Impact on case, 4) Options going forward, 5) Recommendations. Be honest but constructive",
      useCase: "Managing client expectations"
    },
    {
      id: 26,
      category: "Client Communication",
      title: "Settlement Recommendation",
      prompt: "Write a memo to [CLIENT] recommending [ACCEPT/REJECT] settlement offer of [AMOUNT/TERMS]. Analysis: 1) Offer vs. trial risks, 2) Costs consideration, 3) Non-monetary factors, 4) Likely trial outcomes, 5) Your professional recommendation with reasoning",
      useCase: "Settlement negotiations"
    },
    {
      id: 27,
      category: "Client Communication",
      title: "Initial Consultation Follow-up",
      prompt: "Draft follow-up email after consultation with [PROSPECTIVE CLIENT] about [MATTER TYPE]. Include: 1) Thank you, 2) Summary of their situation, 3) Preliminary assessment, 4) Proposed approach, 5) Fee structure, 6) Next steps, 7) Deadline to respond",
      useCase: "Client intake and conversion"
    },
    {
      id: 28,
      category: "Client Communication",
      title: "Document Request to Client",
      prompt: "Write an email to [CLIENT] requesting specific documents for [PURPOSE]. Need: [LIST DOCUMENTS]. Include: 1) Why each document is needed, 2) Acceptable formats, 3) Deadline, 4) How to send securely, 5) What to do if they can't find something",
      useCase: "Case preparation and discovery"
    },
    {
      id: 29,
      category: "Client Communication",
      title: "Deposition Preparation Instructions",
      prompt: "Create deposition preparation instructions for [CLIENT]. Cover: 1) What to expect, 2) Key dos and don'ts, 3) How to answer questions, 4) What to wear, 5) Topics likely to be covered: [LIST], 6) How to stay calm and credible",
      useCase: "Preparing clients for testimony"
    },
    {
      id: 30,
      category: "Client Communication",
      title: "Billing Statement Explanation",
      prompt: "Draft a cover letter for [CLIENT] explaining their invoice. Bill includes: [MAJOR LINE ITEMS]. Address: 1) Work performed, 2) Outcomes achieved, 3) Value provided, 4) Next phase costs, 5) Payment options. Be transparent and appreciative",
      useCase: "Billing transparency"
    },
    {
      id: 31,
      category: "Client Communication",
      title: "Case Closure Letter",
      prompt: "Write a case closure letter for [CLIENT] after [RESOLUTION]. Include: 1) Summary of outcome, 2) Actions taken, 3) Final deliverables, 4) Outstanding items (if any), 5) Future considerations, 6) Thank you and request for feedback/referral",
      useCase: "Professional case conclusion"
    },
    {
      id: 32,
      category: "Client Communication",
      title: "Statute of Limitations Warning",
      prompt: "Draft urgent communication to [CLIENT] about approaching statute of limitations for [CLAIM]. Deadline: [DATE]. Include: 1) Clear explanation of risk, 2) Actions needed immediately, 3) Consequences of inaction, 4) Decision they must make, 5) Your recommendation",
      useCase: "Risk management communication"
    },

    // Discovery & Evidence (8 prompts)
    {
      id: 33,
      category: "Discovery & Evidence",
      title: "Deposition Questions",
      prompt: "Generate deposition questions for [WITNESS NAME, ROLE]. Topics to cover: [LIST ISSUES]. Structure: 1) Background questions, 2) Timeline establishment, 3) Document foundation, 4) Key facts, 5) Impeachment areas. Strategy: [exploratory/pin down/impeach]",
      useCase: "Effective deposition strategy"
    },
    {
      id: 34,
      category: "Discovery & Evidence",
      title: "Document Review Checklist",
      prompt: "Create a review checklist for [DOCUMENT TYPE] in [CASE TYPE]. Include: 1) Privilege review criteria, 2) Relevance markers, 3) Key terms to flag, 4) Redaction requirements, 5) Metadata considerations, 6) Production format requirements",
      useCase: "Efficient document production"
    },
    {
      id: 35,
      category: "Discovery & Evidence",
      title: "Evidence Organization",
      prompt: "Organize these exhibits [LIST/DESCRIBE DOCUMENTS] for [TRIAL/MOTION/HEARING]. Create: 1) Numbering system, 2) Categorical grouping, 3) Timeline sequence, 4) Relevance to each claim/defense, 5) Foundation witness for each",
      useCase: "Trial preparation and presentation"
    },
    {
      id: 36,
      category: "Discovery & Evidence",
      title: "Privilege Log Entry",
      prompt: "Create privilege log entries for [NUMBER] documents withheld in [CASE]. For each entry include: 1) Document date, 2) Author/recipient, 3) Brief description, 4) Privilege claimed, 5) Basis for privilege. Be specific but protect privilege",
      useCase: "Discovery compliance"
    },
    {
      id: 37,
      category: "Discovery & Evidence",
      title: "ESI Protocol",
      prompt: "Draft ESI (electronically stored information) protocol for [CASE]. Address: 1) Custodians, 2) Data sources, 3) Search terms, 4) Date range, 5) Format of production, 6) Cost allocation, 7) Clawback provisions",
      useCase: "Modern discovery planning"
    },
    {
      id: 38,
      category: "Discovery & Evidence",
      title: "Chain of Custody Documentation",
      prompt: "Create chain of custody documentation for [EVIDENCE TYPE] in [CASE]. Track: 1) Initial collection details, 2) Storage location, 3) Each transfer/access, 4) Current location, 5) Condition/alterations, 6) Persons with access",
      useCase: "Evidence integrity and admissibility"
    },
    {
      id: 39,
      category: "Discovery & Evidence",
      title: "Authentication Foundation",
      prompt: "Draft questions to authenticate [DOCUMENT/EVIDENCE TYPE] through [WITNESS]. Establish: 1) Witness's familiarity, 2) How document was created, 3) Custody/control, 4) Reliability indicators, 5) Recognition of signatures/marks",
      useCase: "Evidence admissibility at trial"
    },
    {
      id: 40,
      category: "Discovery & Evidence",
      title: "Expert Discovery Analysis",
      prompt: "Analyze opposing expert report by [EXPERT NAME] on [TOPIC]. Identify: 1) Methodology weaknesses, 2) Unsupported conclusions, 3) Missing analysis, 4) Contradictions, 5) Daubert/Frye challenges, 6) Deposition topics",
      useCase: "Challenging opposing experts"
    },

    // Legal Strategy (8 prompts)
    {
      id: 41,
      category: "Legal Strategy",
      title: "Case Theme Development",
      prompt: "Develop a compelling case theme for [CLIENT] in [CASE TYPE]. Consider: 1) Key facts, 2) Legal theories, 3) Jury appeal, 4) Emotional elements, 5) Simple narrative arc. Create a one-sentence theme that captures the heart of the case",
      useCase: "Trial storytelling and persuasion"
    },
    {
      id: 42,
      category: "Legal Strategy",
      title: "Motion Strategy",
      prompt: "Analyze whether to file [MOTION TYPE] in [CASE] given these facts: [FACTS]. Evaluate: 1) Legal merit, 2) Procedural timing, 3) Strategic advantages/risks, 4) Impact on settlement, 5) Cost-benefit, 6) Judge's tendencies. Recommend: [file/don't file/wait]",
      useCase: "Strategic litigation decisions"
    },
    {
      id: 43,
      category: "Legal Strategy",
      title: "Negotiation Position",
      prompt: "Develop negotiation strategy for [MATTER]. Our position: [STARTING POINT]. Their position: [OPPOSING POSITION]. Analyze: 1) BATNA (best alternative), 2) Walk-away point, 3) Leverage points, 4) Concession strategy, 5) Creative solutions, 6) Opening move",
      useCase: "Settlement and deal negotiations"
    },
    {
      id: 44,
      category: "Legal Strategy",
      title: "Jury Selection Strategy",
      prompt: "Create voir dire strategy for [CASE TYPE] involving [KEY ISSUES]. Identify: 1) Ideal juror profile, 2) Red flags to avoid, 3) Questions to uncover bias about [SPECIFIC ISSUES], 4) Cause challenges, 5) Peremptory challenge priorities",
      useCase: "Jury trial preparation"
    },
    {
      id: 45,
      category: "Legal Strategy",
      title: "Appellate Strategy",
      prompt: "Assess appeal prospects for [ISSUE] from [TRIAL COURT DECISION]. Analyze: 1) Standard of review, 2) Preservation of error, 3) Likelihood of reversal, 4) Cost vs. benefit, 5) Appealable issues, 6) Potential outcomes. Recommend: [appeal/settle/accept]",
      useCase: "Post-trial decision making"
    },
    {
      id: 46,
      category: "Legal Strategy",
      title: "Risk Assessment Matrix",
      prompt: "Create risk assessment for [LITIGATION/TRANSACTION]. Identify: 1) Best case scenario, 2) Worst case scenario, 3) Most likely outcome, 4) Major uncertainties, 5) Risk mitigation strategies, 6) Percentage likelihood of each outcome",
      useCase: "Client counseling and strategy"
    },
    {
      id: 47,
      category: "Legal Strategy",
      title: "Alternative Dispute Resolution",
      prompt: "Evaluate ADR options for [DISPUTE]. Compare: 1) Mediation vs. arbitration vs. litigation, 2) Costs, 3) Timeline, 4) Likely outcomes, 5) Preservation of relationship, 6) Enforceability. Recommend best approach given [CLIENT'S PRIORITIES]",
      useCase: "Dispute resolution planning"
    },
    {
      id: 48,
      category: "Legal Strategy",
      title: "Pre-Trial Brief Strategy",
      prompt: "Outline pre-trial brief for [CASE]. Key arguments: [LIST]. Structure to: 1) Frame favorable narrative, 2) Address weaknesses proactively, 3) Emphasize strong evidence, 4) Distinguish adverse authority, 5) Provide clear relief requested",
      useCase: "Trial preparation and positioning"
    },

    // Time-Saving Tasks (8 prompts)
    {
      id: 49,
      category: "Time-Saving Tasks",
      title: "Email Triage",
      prompt: "Review these emails [PASTE EMAILS] and: 1) Categorize by urgency, 2) Identify required actions, 3) Draft quick responses where appropriate, 4) Flag items needing detailed attention, 5) Summarize key information from each",
      useCase: "Inbox management efficiency"
    },
    {
      id: 50,
      category: "Time-Saving Tasks",
      title: "Meeting Agenda",
      prompt: "Create agenda for [MEETING TYPE] with [PARTICIPANTS] regarding [MATTER]. Include: 1) Topics to cover, 2) Time allocation, 3) Key questions to address, 4) Decisions needed, 5) Preparation required from attendees, 6) Desired outcomes",
      useCase: "Productive meeting planning"
    },
    {
      id: 51,
      category: "Time-Saving Tasks",
      title: "Call Notes Summary",
      prompt: "Summarize this client call/meeting: [NOTES/RECORDING]. Extract: 1) Key discussion points, 2) Decisions made, 3) Action items (with owners), 4) Follow-up needed, 5) Deadlines mentioned, 6) Client concerns/questions",
      useCase: "Documentation and task management"
    },
    {
      id: 52,
      category: "Time-Saving Tasks",
      title: "Calendar Blocking",
      prompt: "Review my tasks for [MATTER]: [LIST TASKS]. Create time-blocking schedule for this week that: 1) Prioritizes urgent items, 2) Batches similar work, 3) Accounts for [COURT DATES/MEETINGS], 4) Includes buffer time, 5) Balances reactive vs. proactive work",
      useCase: "Productivity and time management"
    },
    {
      id: 53,
      category: "Time-Saving Tasks",
      title: "Research Quick Check",
      prompt: "Before I dive deep into research on [LEGAL ISSUE], quickly check: 1) Has this been clearly settled by [JURISDICTION] courts? 2) Most relevant cases I should start with, 3) Any recent changes in law, 4) Is this worth extensive research or straightforward?",
      useCase: "Efficient research scoping"
    },
    {
      id: 54,
      category: "Time-Saving Tasks",
      title: "Template Creation",
      prompt: "Convert this [DOCUMENT TYPE] into a reusable template. Identify: 1) Standard language to keep, 2) Fields to make customizable [in brackets], 3) Optional sections to include, 4) Best practices notes to add, 5) Common variations needed",
      useCase: "Building firm resources"
    },
    {
      id: 55,
      category: "Time-Saving Tasks",
      title: "Delegation Brief",
      prompt: "Create delegation instructions for [TASK] to [ASSOCIATE/PARALEGAL/ASSISTANT]. Include: 1) Objective and context, 2) Step-by-step process, 3) Resources needed, 4) Quality standards, 5) Deadline, 6) When to check in, 7) Example or reference",
      useCase: "Effective team management"
    },
    {
      id: 56,
      category: "Time-Saving Tasks",
      title: "Status Report",
      prompt: "Generate status report for [CLIENT/SUPERVISOR] on [MATTER]. Include: 1) Work completed since last update, 2) Current status of key issues, 3) Upcoming deadlines, 4) Outstanding items, 5) Budget status, 6) Next steps",
      useCase: "Stakeholder communication"
    }
  ];

  const filteredPrompts = activeCategory === 'all' 
    ? prompts 
    : prompts.filter(p => p.category === activeCategory);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-20">
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
          
          <div className="flex items-start gap-6 mb-8">
            <div className="p-5 bg-white/10 rounded-2xl backdrop-blur">
              <Brain className="w-16 h-16 text-white" />
            </div>
            <div>
              <span className="px-3 py-1 bg-white/20 text-white text-sm font-semibold rounded-full backdrop-blur">
                56 Quick Reference Prompts
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-4">AI Prompts for Legal Research</h1>
              <p className="text-2xl text-orange-100 max-w-3xl">
                Copy, paste, and customize these proven prompts for case research, document drafting, and client communication
              </p>
              <p className="text-lg text-orange-200 mt-3 max-w-3xl">
                Browse quick reference versions below, or download the enhanced PDF guide with detailed examples and strategic notes
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <FileText className="w-10 h-10 text-white mb-3" />
              <h3 className="text-xl font-bold mb-2">Quick Reference</h3>
              <p className="text-orange-100">Browse concise versions on this page for immediate use</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <Download className="w-10 h-10 text-white mb-3" />
              <h3 className="text-xl font-bold mb-2">Enhanced PDF</h3>
              <p className="text-orange-100">Get detailed 50+ page guide with examples and strategy</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <Target className="w-10 h-10 text-white mb-3" />
              <h3 className="text-xl font-bold mb-2">Battle-Tested</h3>
              <p className="text-orange-100">Used by real attorneys in actual practice</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Download CTA Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white mb-12">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-white/20 text-white text-sm font-bold rounded-full backdrop-blur">
                  ENHANCED VERSIONS
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-2">Want the Professional PDF Guide?</h2>
              <p className="text-orange-100 text-lg mb-2">Download all 56 prompts with enhanced detail, examples, and strategic guidance</p>
              <div className="flex items-center gap-4 text-sm text-orange-100">
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4" />
                  <span>3-5x more detailed than web versions</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4" />
                  <span>Real examples included</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4" />
                  <span>Pro tips & strategy notes</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="px-8 py-4 bg-white text-orange-600 rounded-lg font-bold text-lg hover:bg-orange-50 transition flex items-center gap-2 whitespace-nowrap"
            >
              <Download className="w-5 h-5" />
              Get Enhanced PDF
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6 overflow-x-auto pb-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium whitespace-nowrap transition ${
                    activeCategory === cat.id
                      ? 'bg-orange-500 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.name}
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    activeCategory === cat.id
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-200 text-slate-600'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Prompts Grid */}
        <div className="grid gap-6">
          {filteredPrompts.map((prompt) => (
            <div key={prompt.id} className="bg-white rounded-xl border-2 border-slate-200 p-6 hover:border-orange-300 transition">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">
                    {prompt.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-3">{prompt.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">Use case: {prompt.useCase}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(prompt.prompt, prompt.id)}
                  className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition flex-shrink-0"
                >
                  {copiedId === prompt.id ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 font-mono text-sm leading-relaxed whitespace-pre-wrap">
                  {prompt.prompt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-br from-slate-50 to-orange-50 rounded-2xl p-12 border-2 border-orange-200">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Brain className="w-16 h-16 text-orange-500" />
              <Download className="w-12 h-12 text-orange-500" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-3">Get the Enhanced Professional Guide</h3>
            <p className="text-slate-600 text-lg mb-6 max-w-2xl mx-auto">
              The PDF version includes 3-5x more detail for each prompt, with strategic guidance, real examples, and best practices from experienced attorneys
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="inline-block px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition text-xl shadow-lg mb-6"
            >
              Download Enhanced PDF Guide
            </button>
            <p className="text-sm text-slate-500">Free • 50+ page guide • Instant download</p>
          </div>

          <div className="border-t-2 border-orange-200 pt-8 mt-8 text-center">
            <h4 className="text-xl font-bold text-slate-900 mb-4">Need help implementing AI in your practice?</h4>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Work with experts who understand both AI and law firm operations
            </p>
            <a
              href="https://pioneerly.com/book-consultation"
              className="inline-block px-8 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>

      {/* HubSpot Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowForm(false)}>
          <div className="bg-white rounded-2xl max-w-lg w-full p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Download Enhanced PDF Guide</h3>
                <p className="text-sm text-orange-600 font-semibold mt-1">Professional versions with 3-5x more detail</p>
              </div>
              <button onClick={() => setShowForm(false)} className="text-slate-400 hover:text-slate-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="mb-6">
              <p className="text-slate-600 mb-4">
                Get instant access to the complete 50+ page guide with enhanced prompts including:
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Detailed instructions</strong> (500-1000 words per prompt)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Real-world examples</strong> and sample outputs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Strategic guidance</strong> on when and how to use each prompt</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Best practices</strong> from experienced attorneys</span>
                </li>
              </ul>
            </div>

            {/* HubSpot form will be embedded here */}
            <iframe
              src="https://41k8vz.share-na2.hsforms.com/26MnFTNbVSMWc3WBhIZ4wAA"
              className="w-full h-96 border-0"
              title="Download AI Prompts PDF"
            />

            <p className="text-xs text-slate-500 text-center mt-4">
              We respect your privacy. Unsubscribe anytime. By downloading, you'll receive occasional emails with legal tech insights.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AIPromptsPage;
