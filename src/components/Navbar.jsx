import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Faculties', path: '/faculties' },
  { label: 'Admissions', path: '/admissions' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHero = location.pathname === '/' && !scrolled;
  const headerClass = scrolled || !isHero
    ? 'bg-white/92 text-slate-950 shadow-[0_14px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl'
    : 'bg-transparent text-white';

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerClass}`}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            <Link to="/" className="group flex items-center gap-3" id="nav-logo">
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-lg p-1 transition-all duration-300 md:h-12 md:w-12 ${
                  isHero
                    ? 'bg-white shadow-lg shadow-black/15'
                    : 'bg-white shadow-md shadow-blue-900/15 ring-1 ring-slate-200'
                }`}
              >
                <img src="/images/num-logo-512.png" alt="NUM logo" className="h-full w-full object-contain" />
              </span>
              <span className="leading-tight">
                <span className={`block font-heading text-lg font-bold ${isHero ? 'text-white' : 'text-blue-800'}`}>
                  NUM
                </span>
                <span className={`block whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.08em] md:text-[9px] ${isHero ? 'text-blue-100' : 'text-slate-600'}`}>
                  NATIONAL UNIVERSITY OF MANAGEMENT
                </span>
                <span className={`block whitespace-nowrap text-[10px] font-medium ${isHero ? 'text-blue-100' : 'text-slate-500'}`}>
                  សាកលវិទ្យាល័យជាតិគ្រប់គ្រង
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-1 md:flex" id="nav-desktop" aria-label="Primary navigation">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                      isActive
                        ? isHero ? 'text-white' : 'text-blue-800'
                        : isHero ? 'text-blue-100 hover:text-white' : 'text-slate-600 hover:text-blue-800'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-4 bottom-0 h-0.5 rounded-full bg-accent"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      />
                    )}
                  </Link>
                );
              })}
              <a
                href="https://numregister.com"
                target="_blank"
                rel="noopener"
                className={`ml-4 inline-flex h-11 items-center justify-center gap-1 rounded-lg px-5 text-sm font-heading font-bold transition-all duration-300 ${
                  isHero
                    ? 'bg-accent text-blue-950 shadow-lg shadow-black/20 hover:-translate-y-0.5 hover:bg-gold-400'
                    : 'bg-blue-700 text-white shadow-md shadow-blue-900/15 hover:-translate-y-0.5 hover:bg-blue-800'
                }`}
                id="nav-apply-btn"
              >
                Apply for 2026
                <ChevronRight className="h-4 w-4" />
              </a>
            </nav>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className={`rounded-lg p-2 transition-colors md:hidden ${
                isHero ? 'text-white hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100'
              }`}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              id="nav-mobile-toggle"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-slate-950/45 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed right-0 top-0 z-50 h-full w-[min(22rem,88vw)] bg-white p-5 shadow-2xl md:hidden"
            >
              <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white p-1 shadow-sm ring-1 ring-slate-200">
                    <img src="/images/num-logo-512.png" alt="NUM logo" className="h-full w-full object-contain" />
                  </span>
                  <div>
                    <div className="font-heading text-lg font-bold text-blue-800">NUM</div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-600">NATIONAL UNIVERSITY OF MANAGEMENT</div>
                    <div className="text-xs font-medium text-slate-500">សាកលវិទ្យាល័យជាតិគ្រប់គ្រង</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="space-y-2" aria-label="Mobile navigation">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;

                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between rounded-lg px-4 py-3.5 text-base font-semibold transition-colors ${
                        isActive ? 'bg-blue-50 text-blue-800' : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {link.label}
                      <ChevronRight className="h-4 w-4 text-slate-400" />
                    </Link>
                  );
                })}
              </nav>

              <a
                href="https://numregister.com"
                target="_blank"
                rel="noopener"
                onClick={() => setMobileOpen(false)}
                className="mt-6 flex h-12 items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 font-heading text-sm font-bold text-white shadow-lg shadow-blue-900/15 hover:bg-blue-800"
              >
                Apply for 2026
                <ChevronRight className="h-4 w-4" />
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
