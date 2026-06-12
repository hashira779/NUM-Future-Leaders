import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Briefcase,
  Building2,
  ChevronRight,
  Globe,
  GraduationCap,
  Handshake,
  Heart,
  Lightbulb,
  Quote,
  Rocket,
  Search,
  ShieldCheck,
  Share2,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  Video,
  Zap,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeader from '../components/SectionHeader';
import StatCounter from '../components/StatCounter';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const partners = [
  'University of London',
  'RMIT University',
  'Nagoya University',
  'Seoul National University',
  'Thammasat University',
  'AIT Bangkok',
  'Waseda University',
  'University of Malaya',
  'LCC International',
  'Zion International School',
];

export default function HomePage() {
  const { t } = useTranslation();

  const heroStats = [
    { value: '15K+', label: t('home.hero.stats.students') },
    { value: '70K+', label: t('home.hero.stats.alumni') },
    { value: '562+', label: t('home.hero.stats.staff') },
    { value: '#46', label: t('home.hero.stats.ranking') },
  ];

  const campaignGoals = [
    t('home.campaign.goals.awareness', { returnObjects: true }),
    t('home.campaign.goals.consideration', { returnObjects: true }),
    t('home.campaign.goals.conversion', { returnObjects: true }),
  ];

  const campaignChannels = [
    { icon: Search, ...t('home.campaign.channels.search', { returnObjects: true }) },
    { icon: Video, ...t('home.campaign.channels.video', { returnObjects: true }) },
    { icon: Share2, ...t('home.campaign.channels.social', { returnObjects: true }) },
    { icon: BarChart3, ...t('home.campaign.channels.conversion', { returnObjects: true }) },
  ];

  const whyNumFeatures = [
    { icon: Trophy, tone: 'text-gold-600 bg-gold-50 border-gold-200', ...t('home.why.cards.ranking', { returnObjects: true }) },
    { icon: Globe, tone: 'text-blue-700 bg-blue-50 border-blue-200', ...t('home.why.cards.pathways', { returnObjects: true }) },
    { icon: Zap, tone: 'text-emerald-700 bg-emerald-50 border-emerald-200', ...t('home.why.cards.digital', { returnObjects: true }) },
    { icon: Users, tone: 'text-slate-700 bg-slate-50 border-slate-200', ...t('home.why.cards.network', { returnObjects: true }) },
  ];

  const programs = [
    { icon: Building2, ...t('home.programs.digital', { returnObjects: true }) },
    { icon: Briefcase, ...t('home.programs.business', { returnObjects: true }) },
    { icon: Target, ...t('home.programs.policy', { returnObjects: true }) },
  ];

  const testimonials = [
    t('home.testimonials.sokha', { returnObjects: true }),
    t('home.testimonials.dara', { returnObjects: true }),
    t('home.testimonials.maly', { returnObjects: true }),
  ];

  const scholarships = [
    { icon: Award, ...t('home.scholarships.excellence', { returnObjects: true }) },
    { icon: Lightbulb, ...t('home.scholarships.innovation', { returnObjects: true }) },
    { icon: Globe, ...t('home.scholarships.asean', { returnObjects: true }) },
  ];

  const campusLife = [
    { label: t('home.campus.items.lab'), icon: Lightbulb },
    { label: t('home.campus.items.clubs'), icon: Heart },
    { label: t('home.campus.items.library'), icon: BookOpen },
    { label: t('home.campus.items.career'), icon: ShieldCheck },
  ];

  return (
    <div className="bg-background">
      <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden bg-blue-950 text-white" id="hero">
        <motion.img
          src="/images/num-campus-hero.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,17,38,0.97)_0%,rgba(4,17,38,0.82)_42%,rgba(4,17,38,0.24)_78%,rgba(4,17,38,0.58)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.25),transparent_28rem),radial-gradient(circle_at_78%_30%,rgba(59,130,217,0.18),transparent_24rem)]" />

        <motion.div
          aria-hidden="true"
          className="absolute right-[8%] top-[18%] h-28 w-28 rounded-full border border-white/15 bg-white/10 backdrop-blur-md"
          animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute bottom-[18%] right-[24%] h-20 w-20 rounded-lg border border-gold-300/30 bg-gold-300/15 backdrop-blur-md"
          animate={{ y: [0, 16, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="container relative z-10 mx-auto px-4 pb-14 pt-28 md:px-6 md:pb-20 md:pt-36 lg:px-8">
          <motion.div className="max-w-4xl" initial="hidden" animate="visible" transition={{ staggerChildren: 0.11 }}>
            <motion.div variants={reveal}>
              <Badge variant="outline" className="gap-2 rounded-full border-white/20 bg-white/10 px-4 py-1.5 text-gold-200 backdrop-blur-md">
                <Trophy className="h-4 w-4" />
                <span className="text-sm font-semibold">{t('home.hero.badge')}</span>
              </Badge>
            </motion.div>

            <motion.h1 variants={reveal} className="mt-7 max-w-4xl font-heading text-4xl font-extrabold leading-[1.04] text-white md:text-6xl lg:text-7xl">
              {t('brand.primary')}
            </motion.h1>

            <motion.p variants={reveal} className="mt-4 text-xl font-semibold text-gold-200 md:text-2xl">
              {t('brand.secondary')}
            </motion.p>

            <motion.p variants={reveal} className="mt-6 max-w-2xl text-base leading-8 text-blue-100 md:text-xl">
              {t('home.hero.description')}
            </motion.p>

            <motion.div variants={reveal} className="mt-9 flex flex-wrap gap-4">
              <Button asChild size="lg" className="h-12 gap-2 bg-white px-8 font-bold text-primary shadow-xl shadow-black/15 hover:-translate-y-0.5 hover:bg-white/90">
                <Link to="/faculties" id="hero-explore-cta">
                  {t('common.explorePrograms')}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" className="h-12 gap-2 bg-accent px-8 font-bold text-blue-950 shadow-xl shadow-black/15 hover:-translate-y-0.5 hover:bg-gold-400">
                <a href="https://numregister.com" target="_blank" rel="noopener" id="hero-apply-cta">
                  {t('nav.apply')}
                  <ChevronRight className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div variants={reveal} className="mt-10 grid max-w-3xl grid-cols-2 overflow-hidden rounded-lg border border-white/15 bg-white/10 backdrop-blur-xl md:grid-cols-4">
              {heroStats.map((stat) => (
                <div key={stat.label} className="border-white/10 px-4 py-4 md:border-r md:last:border-r-0">
                  <div className="font-heading text-2xl font-bold text-white">{stat.value}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-100">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="bg-white py-20 md:py-28" id="campaign">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <AnimatedSection direction="right">
              <Badge className="mb-5 bg-gold-50 text-gold-700 hover:bg-gold-50">
                <Sparkles className="mr-2 h-4 w-4" />
                {t('home.campaign.badge')}
              </Badge>
              <h2 className="font-heading text-3xl font-extrabold leading-tight text-blue-900 md:text-5xl">
                {t('home.campaign.title')}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                {t('home.campaign.description')}
              </p>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {campaignGoals.map((goal) => (
                  <div key={goal.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <div className="font-heading text-sm font-extrabold uppercase tracking-[0.16em] text-blue-800">{goal.label}</div>
                    <p className="mt-2 text-xs leading-6 text-slate-600">{goal.value}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {campaignChannels.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <AnimatedSection key={channel.title} delay={index * 0.07} direction="left">
                    <motion.article
                      whileHover={{ y: -8, rotate: index % 2 === 0 ? -0.4 : 0.4 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                      className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
                    >
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-slate-950">{channel.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{channel.description}</p>
                    </motion.article>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20 md:py-28" id="why-num">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeader subtitle={t('home.why.subtitle')} title={t('home.why.title')} description={t('home.why.description')} />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whyNumFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <AnimatedSection key={feature.title} delay={index * 0.06}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                    className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
                  >
                    <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-lg border ${feature.tone}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-slate-950">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-slate-950 py-20 text-white md:py-28" id="programs">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeader light subtitle={t('home.programs.subtitle')} title={t('home.programs.title')} description={t('home.programs.description')} />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <AnimatedSection key={program.title} delay={index * 0.08}>
                  <motion.article
                    whileHover={{ y: -10, scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 250, damping: 22 }}
                    className="relative h-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] p-7 shadow-2xl shadow-black/20 backdrop-blur"
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-400 via-blue-300 to-emerald-300" />
                    <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-lg bg-white/10 text-gold-300">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white">{program.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-blue-100">{program.description}</p>
                    <ul className="mt-6 space-y-3">
                      {program.degrees.map((degree) => (
                        <li key={degree} className="flex items-center gap-3 text-sm font-medium text-white/90">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                          {degree}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="link" className="mt-7 h-auto p-0 font-bold text-gold-300 hover:text-gold-200">
                      <Link to="/faculties">
                        {t('common.viewAllPrograms')}
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.article>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-blue-700 py-16 text-white md:py-20" id="stats">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
              <StatCounter end={15000} suffix="+" label={t('home.stats.studentPopulation')} light />
              <StatCounter end={45} suffix="+" label={t('home.stats.degreePrograms')} duration={1.5} light />
              <StatCounter end={562} suffix="+" label={t('home.stats.academicStaff')} duration={1.8} light />
              <StatCounter end={70000} suffix="+" label={t('home.stats.alumniNetwork')} duration={2} light />
              <StatCounter end={56} suffix="+" label={t('home.stats.globalPartners')} duration={2.2} light />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28" id="student-life">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <AnimatedSection direction="right">
              <Badge className="mb-5 bg-blue-50 text-blue-700 hover:bg-blue-50">
                <Sparkles className="mr-2 h-4 w-4" />
                {t('home.campus.badge')}
              </Badge>
              <h2 className="font-heading text-3xl font-extrabold leading-tight text-blue-900 md:text-5xl">
                {t('home.campus.title')}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                {t('home.campus.description')}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {campusLife.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <Icon className="mb-3 h-5 w-5 text-blue-700" />
                      <div className="font-heading text-sm font-bold text-slate-950">{item.label}</div>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {testimonials.map((item, index) => (
                  <motion.figure
                    key={item.name}
                    whileHover={{ y: -8 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                    className={`rounded-lg border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] ${index === 1 ? 'md:translate-y-8' : ''}`}
                  >
                    <div className="mb-4 flex gap-1 text-gold-500">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star key={starIndex} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="mb-4 h-7 w-7 text-blue-100" />
                    <blockquote className="text-sm leading-7 text-slate-600">"{item.quote}"</blockquote>
                    <figcaption className="mt-5 border-t border-slate-200 pt-4">
                      <div className="font-heading text-sm font-bold text-slate-950">{item.name}</div>
                      <div className="text-xs font-medium text-slate-500">{item.role}</div>
                    </figcaption>
                  </motion.figure>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20 md:py-28" id="scholarships">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeader subtitle={t('home.scholarships.subtitle')} title={t('home.scholarships.title')} description={t('home.scholarships.description')} />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {scholarships.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.name} delay={index * 0.08}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="rounded-lg border border-slate-200 bg-white p-7 text-center shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
                  >
                    <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-gold-200 bg-gold-50 text-gold-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-blue-900">{item.name}</h3>
                    <div className="mt-2 font-heading text-2xl font-extrabold text-gold-600">{item.coverage}</div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-20 md:py-28" id="partnerships">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeader subtitle={t('home.partners.subtitle')} title={t('home.partners.title')} description={t('home.partners.description')} />
        </div>

        <AnimatedSection>
          <div className="relative overflow-hidden">
            <motion.div className="flex w-max gap-4" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}>
              {[...partners, ...partners].map((name, index) => (
                <div key={`${name}-${index}`} className="flex min-w-56 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-7 py-4 font-heading text-sm font-bold text-slate-700">
                  {name}
                </div>
              ))}
            </motion.div>
          </div>
          <p className="mt-8 text-center text-sm font-medium text-slate-500">
            <Handshake className="mr-2 inline h-4 w-4 text-gold-600" />
            {t('home.partners.note')}
          </p>
        </AnimatedSection>
      </section>

      <section className="relative overflow-hidden bg-blue-950 py-20 text-white md:py-28" id="apply-cta">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.2),transparent_26rem),radial-gradient(circle_at_80%_0%,rgba(20,184,166,0.2),transparent_28rem)]" />
        <div className="container relative z-10 mx-auto px-4 text-center md:px-6 lg:px-8">
          <AnimatedSection>
            <GraduationCap className="mx-auto mb-6 h-16 w-16 text-gold-300" />
            <h2 className="mx-auto max-w-3xl font-heading text-3xl font-extrabold leading-tight text-white md:text-5xl">
              {t('home.cta.title')}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-blue-100">
              {t('home.cta.description')}
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="h-12 gap-2 bg-accent px-8 font-bold text-blue-950 hover:bg-gold-400">
                <a href="https://numregister.com" target="_blank" rel="noopener" id="cta-apply">
                  {t('common.applyNow')}
                  <Rocket className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" className="h-12 gap-2 bg-white px-8 font-bold text-primary hover:bg-white/90">
                <Link to="/admissions" id="cta-learn-more">
                  {t('common.admissionDetails')}
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
