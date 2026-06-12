import AnimatedSection from './AnimatedSection';

export default function SectionHeader({ subtitle, title, description, light = false, center = true }) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? 'text-center' : ''}`}>
      <AnimatedSection>
        {subtitle && (
          <div className={`mb-4 flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
            <span className="h-px w-10 bg-accent" />
            <span className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-accent">
              {subtitle}
            </span>
            <span className="h-px w-10 bg-accent" />
          </div>
        )}
        <h2 className={`font-heading text-3xl font-extrabold leading-tight md:text-5xl ${light ? 'text-white' : 'text-blue-900'}`}>
          {title}
        </h2>
        {description && (
          <p className={`mt-5 max-w-2xl text-base leading-8 md:text-lg ${center ? 'mx-auto' : ''} ${light ? 'text-blue-100' : 'text-slate-600'}`}>
            {description}
          </p>
        )}
      </AnimatedSection>
    </div>
  );
}
