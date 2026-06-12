import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  BarChart3,
  Binary,
  BookOpen,
  Briefcase,
  Building2,
  ChevronRight,
  CircuitBoard,
  Clock3,
  Cpu,
  Globe,
  GraduationCap,
  Landmark,
  Languages,
  Network,
  Scale,
  Server,
  TrendingUp,
  Users,
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeader from '../components/SectionHeader';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const faculties = [
  {
    id: 'digital',
    name: 'Faculty of Digital Economy',
    tagline: "Powering Cambodia's Digital Future",
    icon: Cpu,
    accent: 'from-blue-500 to-cyan-400',
    description: "NUM's flagship innovation faculty builds practical technology, finance, data, and digital economy skills for the next generation of leaders.",
    programs: [
      {
        name: 'BSc FinTech',
        icon: TrendingUp,
        duration: '4 years',
        language: 'English',
        description: 'Study blockchain, digital payments, cryptocurrency, financial innovation, and applied fintech projects.',
      },
      {
        name: 'BSc Digital Economy',
        icon: Globe,
        duration: '4 years',
        language: 'English',
        description: 'Explore how digital platforms, data, and technology reshape markets, organizations, and public systems.',
      },
      {
        name: 'BSc Computer Science',
        icon: Binary,
        duration: '4 years',
        language: 'English',
        description: 'Build software engineering, algorithms, data science, and AI foundations through practical coursework.',
      },
      {
        name: 'BSc Smart City Planning',
        icon: Building2,
        duration: '4 years',
        language: 'English',
        description: 'Design smarter urban systems with IoT, GIS mapping, analytics, and sustainable city planning.',
      },
    ],
  },
  {
    id: 'business',
    name: 'Business, Finance & Law',
    tagline: 'Legacy Strengths, Modern Edge',
    icon: Briefcase,
    accent: 'from-gold-500 to-amber-300',
    description: "NUM's core business and law programs prepare students for leadership in commerce, banking, accounting, management, and legal practice.",
    programs: [
      {
        name: 'BBA Finance & Banking',
        icon: BarChart3,
        duration: '4 years',
        language: 'Khmer / English',
        description: 'Develop financial analysis, investment, banking operations, and corporate finance capability.',
      },
      {
        name: 'BBA Management',
        icon: Users,
        duration: '4 years',
        language: 'Khmer / English',
        description: 'Build leadership, operations, strategy, and entrepreneurship skills for modern organizations.',
      },
      {
        name: 'Bachelor of Business Law',
        icon: Scale,
        duration: '4 years',
        language: 'Khmer / English',
        description: 'Study commercial law, intellectual property, trade rules, contracts, and governance.',
      },
      {
        name: 'BBA Accounting',
        icon: BookOpen,
        duration: '4 years',
        language: 'Khmer / English',
        description: 'Prepare for accounting, auditing, taxation, reporting, and professional certification pathways.',
      },
    ],
  },
  {
    id: 'policy',
    name: 'School of Public Policy',
    tagline: "Shaping Tomorrow's Policy Leaders",
    icon: Landmark,
    accent: 'from-emerald-400 to-blue-400',
    description: 'The School of Public Policy develops governance, diplomacy, research, and policy talent for Cambodia and Southeast Asia.',
    programs: [
      {
        name: 'Master of Public Policy',
        icon: Landmark,
        duration: '2 years',
        language: 'English',
        description: 'Advanced study in policy analysis, governance, public administration, and development frameworks.',
      },
      {
        name: 'MSc Digital Economy',
        icon: CircuitBoard,
        duration: '2 years',
        language: 'English',
        description: 'Research digital governance, data-driven decisions, platform regulation, and economic transformation.',
      },
      {
        name: 'BA International Relations',
        icon: Network,
        duration: '4 years',
        language: 'English',
        description: "Study diplomacy, international organizations, security, and Cambodia's role in global affairs.",
      },
      {
        name: 'Master of Laws',
        icon: Scale,
        duration: '2 years',
        language: 'English',
        description: 'Specialize in international law, trade law, and legal frameworks for cross-border commerce.',
      },
    ],
  },
];

const partners = [
  { name: 'University of London', country: 'UK' },
  { name: 'RMIT University', country: 'Australia' },
  { name: 'Nagoya University', country: 'Japan' },
  { name: 'Seoul National University', country: 'South Korea' },
  { name: 'Thammasat University', country: 'Thailand' },
  { name: 'University of Malaya', country: 'Malaysia' },
];

const researchCards = [
  {
    icon: Server,
    title: 'Digital Governance Lab',
    description: 'AI-assisted policy tools, open data systems, and modern public-service research for Southeast Asia.',
  },
  {
    icon: CircuitBoard,
    title: 'Blockchain Research Center',
    description: "Applied research in digital finance, DeFi, smart contracts, and Cambodia's growing fintech sector.",
  },
  {
    icon: Award,
    title: 'Student Innovation Awards',
    description: 'Annual student project showcases with mentoring, funding pathways, and industry feedback.',
  },
];

export default function FacultiesPage() {
  const [activeTab, setActiveTab] = useState('digital');
  const activeFaculty = faculties.find((faculty) => faculty.id === activeTab) || faculties[0];
  const ActiveIcon = activeFaculty.icon;

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-slate-950 pb-20 pt-32 text-white md:pb-28 md:pt-40" id="faculties-hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(212,175,55,0.22),transparent_26rem),radial-gradient(circle_at_82%_22%,rgba(20,184,166,0.2),transparent_30rem)]" />
        <motion.div
          aria-hidden="true"
          className="absolute right-10 top-24 h-28 w-28 rounded-lg border border-white/10 bg-white/10 backdrop-blur"
          animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection>
            <Badge variant="outline" className="mb-7 gap-2 rounded-full border-white/20 bg-white/10 px-4 py-1.5 text-gold-200">
              <GraduationCap className="h-4 w-4" />
              Academic Excellence
            </Badge>
            <h1 className="max-w-4xl font-heading text-4xl font-extrabold leading-tight md:text-6xl">
              Faculties and programs built for modern careers.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Explore technology, business, finance, law, governance, and global pathways designed for students who want practical momentum.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28" id="faculty-tabs">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {faculties.map((faculty) => {
              const Icon = faculty.icon;
              const isActive = activeTab === faculty.id;
              return (
                <button
                  key={faculty.id}
                  type="button"
                  onClick={() => setActiveTab(faculty.id)}
                  className={`flex items-center gap-2 rounded-lg border px-4 py-3 font-heading text-sm font-bold transition ${
                    isActive
                      ? 'border-blue-700 bg-blue-700 text-white shadow-lg shadow-blue-900/15'
                      : 'border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-800'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{faculty.name}</span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFaculty.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-8 overflow-hidden rounded-lg border border-slate-200 bg-slate-950 text-white shadow-2xl shadow-slate-900/15">
                <div className={`h-1 bg-gradient-to-r ${activeFaculty.accent}`} />
                <div className="grid grid-cols-1 gap-8 p-7 md:grid-cols-[auto_1fr] md:p-9">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br ${activeFaculty.accent} text-slate-950`}>
                    <ActiveIcon className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-gold-300">{activeFaculty.tagline}</p>
                    <h2 className="mt-2 font-heading text-3xl font-extrabold text-white">{activeFaculty.name}</h2>
                    <p className="mt-4 max-w-4xl text-sm leading-7 text-blue-100">{activeFaculty.description}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {activeFaculty.programs.map((program, index) => {
                  const Icon = program.icon;
                  return (
                    <motion.article
                      key={program.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.06, duration: 0.35 }}
                      whileHover={{ y: -8 }}
                      className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
                    >
                      <div className="mb-5 flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-heading text-lg font-bold text-slate-950">{program.name}</h3>
                          <div className="mt-2 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500">
                            <span className="flex items-center gap-1.5">
                              <Clock3 className="h-3.5 w-3.5" />
                              {program.duration}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Languages className="h-3.5 w-3.5" />
                              {program.language}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm leading-7 text-slate-600">{program.description}</p>
                    </motion.article>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="bg-slate-100 py-20 md:py-28" id="dual-degree">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeader
            subtitle="Global Pathways"
            title="3+1 Dual Degree Framework"
            description="Complete core study at NUM, then continue abroad with selected partner universities for international credentials."
          />

          <AnimatedSection>
            <div className="mx-auto mb-12 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
              {[
                { icon: GraduationCap, title: '3 Years at NUM', text: 'Build strong foundations in Phnom Penh with international faculty and practical projects.' },
                { icon: ArrowRight, title: 'Guided Transfer', text: 'Prepare documentation, academic planning, and partner-university readiness with support.' },
                { icon: Globe, title: '1 Year Abroad', text: 'Complete the final stage overseas and graduate with broader regional or global exposure.' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-7 text-center shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
                    <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner, index) => (
              <AnimatedSection key={partner.name} delay={index * 0.05}>
                <div className="h-full rounded-lg border border-slate-200 bg-white p-4 text-center shadow-sm">
                  <GraduationCap className="mx-auto mb-2 h-5 w-5 text-gold-600" />
                  <div className="font-heading text-xs font-bold text-slate-900">{partner.name}</div>
                  <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">{partner.country}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28" id="research">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeader
            subtitle="Research & Innovation"
            title="Pushing Practical Ideas Forward"
            description="Students and faculty work on digital governance, blockchain, public policy, and applied innovation projects."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {researchCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <AnimatedSection key={card.title} delay={index * 0.08}>
                  <motion.div whileHover={{ y: -8 }} className="h-full rounded-lg border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
                    <Icon className="mb-5 h-7 w-7 text-blue-700" />
                    <h3 className="font-heading text-lg font-bold text-slate-950">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection delay={0.2}>
            <div className="mt-10 flex justify-center">
              <Button asChild size="lg" className="h-12 gap-2 bg-blue-700 px-8 font-bold text-white hover:bg-blue-800">
                <Link to="/admissions">
                  View Admission Requirements
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
