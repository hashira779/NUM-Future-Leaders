import { Link } from 'react-router-dom';
import { Facebook, Globe, Instagram, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const quickLinks = [
  { labelKey: 'footer.academicPrograms', href: '/faculties' },
  { labelKey: 'footer.admissions', href: '/admissions' },
  { labelKey: 'footer.library', href: 'https://www.librarynum.com', external: true },
  { labelKey: 'footer.telegram', href: 'https://t.me/numtelegram', external: true },
];

const faculties = [
  'footer.facultyList.digital',
  'footer.facultyList.business',
  'footer.facultyList.law',
  'footer.facultyList.policy',
  'footer.facultyList.economics',
  'footer.facultyList.information',
];

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/num.edu.kh', label: 'Facebook' },
  { icon: Send, href: 'https://t.me/numtelegram', label: 'Telegram' },
  { icon: Instagram, href: 'https://instagram.com/num_university', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/school/national-university-of-management', label: 'LinkedIn' },
  { icon: Globe, href: 'https://numuniversity.com/', label: 'Website' },
];

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-950 text-white" id="site-footer">
      <div className="container mx-auto px-4 py-16 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="mb-5 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-white p-1 shadow-lg shadow-black/15">
                <img src="/images/num-logo-512.png" alt="NUM logo" className="h-full w-full object-contain" />
              </span>
              <span>
                <span className="block font-heading text-lg font-bold">NUM</span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.08em] text-blue-100">{t('brand.english')}</span>
                <span className="block text-xs font-medium text-blue-200">{t('brand.khmer')}</span>
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-7 text-blue-100">
              {t('footer.description')}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-blue-100 transition hover:-translate-y-0.5 hover:bg-accent hover:text-blue-950"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-heading text-base font-bold">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.labelKey}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener" className="text-sm text-blue-100 transition hover:text-gold-300">
                      {t(link.labelKey)}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-sm text-blue-100 transition hover:text-gold-300">
                      {t(link.labelKey)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-heading text-base font-bold">{t('footer.faculties')}</h3>
            <ul className="space-y-3">
              {faculties.map((facultyKey) => (
                <li key={facultyKey}>
                  <Link to="/faculties" className="text-sm text-blue-100 transition hover:text-gold-300">
                    {t(facultyKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-heading text-base font-bold">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                <span className="text-sm leading-7 text-blue-100">
                  {t('footer.address')}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold-300" />
                <a href="tel:+85595504179" className="text-sm text-blue-100 transition hover:text-gold-300">
                  (+855) 95 504 179
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold-300" />
                <a href="mailto:sengbunthoeun@num.edu.kh" className="text-sm text-blue-100 transition hover:text-gold-300">
                  sengbunthoeun@num.edu.kh
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-5 md:flex-row md:px-6 lg:px-8">
          <p className="text-xs text-blue-200">
            &copy; {new Date().getFullYear()} {t('brand.english')}. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-blue-200 transition hover:text-gold-300">{t('footer.privacy')}</a>
            <a href="#" className="text-xs text-blue-200 transition hover:text-gold-300">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
