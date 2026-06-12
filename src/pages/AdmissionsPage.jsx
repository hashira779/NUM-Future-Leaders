import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  DollarSign,
  FileText,
  Globe,
  GraduationCap,
  HelpCircle,
  Lightbulb,
  Mic,
  Send,
  Sparkles,
  UserCheck,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeader from '../components/SectionHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const timelineDefs = [
  { key: 'submit', icon: FileText },
  { key: 'exam', icon: UserCheck },
  { key: 'interview', icon: Mic },
  { key: 'enroll', icon: CheckCircle2 },
];

const tuitionDefs = [
  { key: 'khmer' },
  { key: 'international', featured: true },
  { key: 'graduate' },
];

const scholarshipDefs = [
  { key: 'excellence', icon: Award },
  { key: 'innovation', icon: Lightbulb },
  { key: 'asean', icon: Globe },
];

const faqDefs = ['requirements', 'international', 'dual', 'language', 'deadline'];

export default function AdmissionsPage() {
  const { t } = useTranslation();

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-blue-950 pb-20 pt-32 text-white md:pb-28 md:pt-40" id="admissions-hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.24),transparent_27rem),radial-gradient(circle_at_82%_10%,rgba(59,130,217,0.24),transparent_30rem)]" />
        <motion.div
          aria-hidden="true"
          className="absolute bottom-14 right-[12%] h-24 w-24 rounded-lg border border-white/10 bg-white/10 backdrop-blur"
          animate={{ y: [0, 16, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="container relative z-10 mx-auto px-4 text-center md:px-6 lg:px-8">
          <AnimatedSection>
            <Badge variant="outline" className="mb-7 gap-2 rounded-full border-white/20 bg-white/10 px-4 py-1.5 text-gold-200">
              <Send className="h-4 w-4" />
              {t('admissions.hero.badge')}
            </Badge>
            <h1 className="mx-auto max-w-4xl font-heading text-4xl font-extrabold leading-tight md:text-6xl">
              {t('admissions.hero.title')}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              {t('admissions.hero.description')}
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="h-12 gap-2 bg-accent px-8 font-bold text-blue-950 hover:bg-gold-400">
                <a href="https://numregister.com" target="_blank" rel="noopener">
                  {t('common.beginApplication')}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" className="h-12 gap-2 bg-white px-8 font-bold text-blue-800 hover:bg-white/90">
                <a href="#tuition">
                  {t('common.viewTuition')}
                  <DollarSign className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28" id="application-timeline">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeader subtitle={t('admissions.timeline.subtitle')} title={t('admissions.timeline.title')} description={t('admissions.timeline.description')} />

          <div className="mx-auto max-w-4xl">
            {timelineDefs.map((step, index) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={step.key} delay={index * 0.08}>
                  <div className="grid grid-cols-[auto_1fr] gap-5 pb-8 last:pb-0">
                    <div className="flex flex-col items-center">
                      <motion.div
                        whileHover={{ scale: 1.08, rotate: 3 }}
                        className="flex h-14 w-14 items-center justify-center rounded-lg bg-blue-700 text-white shadow-lg shadow-blue-900/15"
                      >
                        <Icon className="h-6 w-6" />
                      </motion.div>
                      {index < timelineDefs.length - 1 && <div className="mt-3 h-full min-h-12 w-px bg-slate-200" />}
                    </div>
                    <motion.div whileHover={{ y: -5 }} className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-gold-600">
                          {t('common.step')} {index + 1}
                        </span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-slate-950">{t(`admissions.timeline.${step.key}.title`)}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{t(`admissions.timeline.${step.key}.description`)}</p>
                      <p className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500">
                        <Clock className="h-3.5 w-3.5" />
                        {t(`admissions.timeline.${step.key}.detail`)}
                      </p>
                    </motion.div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20 md:py-28" id="tuition">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeader subtitle={t('admissions.tuition.subtitle')} title={t('admissions.tuition.title')} description={t('admissions.tuition.description')} />

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            {tuitionDefs.map((plan, index) => {
              const features = t(`admissions.tuition.${plan.key}.features`, { returnObjects: true });
              return (
                <AnimatedSection key={plan.key} delay={index * 0.08}>
                  <motion.article
                    whileHover={{ y: -8 }}
                    className={`relative h-full rounded-lg border bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.08)] ${
                      plan.featured ? 'border-gold-400 ring-4 ring-gold-200/60' : 'border-slate-200'
                    }`}
                  >
                    {plan.featured && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 font-heading text-xs font-bold uppercase tracking-[0.18em] text-blue-950">
                        {t('common.popular')}
                      </div>
                    )}
                    <h3 className="font-heading text-lg font-bold text-slate-950">{t(`admissions.tuition.${plan.key}.tier`)}</h3>
                    <div className="mt-5">
                      <span className="font-heading text-3xl font-extrabold text-blue-800">{t(`admissions.tuition.${plan.key}.price`)}</span>
                      <span className="ml-1 text-sm font-medium text-slate-500">/ {t('admissions.tuition.perYear')}</span>
                    </div>
                    <ul className="mt-6 space-y-3">
                      {features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm text-slate-600">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                </AnimatedSection>
              );
            })}
          </div>

          <div className="mt-20">
            <AnimatedSection>
              <h3 className="text-center font-heading text-2xl font-extrabold text-slate-950 md:text-3xl">
                {t('admissions.scholarships.title')}
              </h3>
            </AnimatedSection>
            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
              {scholarshipDefs.map((scholarship, index) => {
                const Icon = scholarship.icon;
                return (
                  <AnimatedSection key={scholarship.key} delay={index * 0.08}>
                    <motion.div whileHover={{ y: -8 }} className="h-full rounded-lg border border-slate-200 bg-white p-6 text-center shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
                      <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-gold-200 bg-gold-50 text-gold-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="font-heading text-base font-bold text-slate-950">{t(`admissions.scholarships.${scholarship.key}.name`)}</h4>
                      <div className="mt-2 font-heading text-lg font-extrabold text-blue-800">{t(`admissions.scholarships.${scholarship.key}.coverage`)}</div>
                      <p className="mt-3 text-xs leading-6 text-slate-500">{t(`admissions.scholarships.${scholarship.key}.criteria`)}</p>
                    </motion.div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28" id="faq">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeader subtitle={t('admissions.faq.subtitle')} title={t('admissions.faq.title')} description={t('admissions.faq.description')} />

          <AnimatedSection>
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="space-y-4">
                {faqDefs.map((faqKey) => (
                  <AccordionItem key={faqKey} value={faqKey} className="rounded-lg border border-slate-200 bg-white px-6 shadow-sm">
                    <AccordionTrigger className="font-heading text-left font-bold text-slate-950 hover:text-blue-800 hover:no-underline">
                      {t(`admissions.faq.${faqKey}.q`)}
                    </AccordionTrigger>
                    <AccordionContent className="leading-7 text-slate-600">
                      {t(`admissions.faq.${faqKey}.a`)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative overflow-hidden bg-blue-950 py-20 text-white md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(212,175,55,0.2),transparent_26rem),radial-gradient(circle_at_75%_20%,rgba(20,184,166,0.18),transparent_28rem)]" />
        <div className="container relative z-10 mx-auto px-4 text-center md:px-6 lg:px-8">
          <AnimatedSection>
            <HelpCircle className="mx-auto mb-5 h-12 w-12 text-gold-300" />
            <h2 className="mx-auto max-w-3xl font-heading text-3xl font-extrabold leading-tight text-white md:text-5xl">
              {t('admissions.cta.title')}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-blue-100">
              {t('admissions.cta.description')}
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="h-12 gap-2 bg-accent px-8 font-bold text-blue-950 hover:bg-gold-400">
                <a href="https://numregister.com" target="_blank" rel="noopener">
                  {t('common.beginApplication')}
                  <Sparkles className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" className="h-12 gap-2 bg-white px-8 font-bold text-blue-800 hover:bg-white/90">
                <Link to="/faculties">
                  {t('common.comparePrograms')}
                  <GraduationCap className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
