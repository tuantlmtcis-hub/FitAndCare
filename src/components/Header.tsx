import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'Trang chủ', href: '#hero' },
  { label: 'Chương trình', href: '#programs' },
  { label: 'Quy trình', href: '#process' },
  { label: 'Câu chuyện FnC', href: '#founder' },
  { label: 'Kết quả', href: '#results' },
  { label: 'Bài viết', href: '#blog' },
  { label: 'Liên hệ', href: '#contact' },
];

interface Props {
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Header({ isDark, onToggleTheme }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#020B16]/95 backdrop-blur-md shadow-md dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#hero" onClick={(e) => handleNav(e, '#hero')} className="flex items-center gap-2.5 flex-shrink-0">
            <img
              src="/logo.png"
              alt="FIT AND CARE"
              className="w-10 h-10 rounded-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <div className="flex flex-col leading-none">
              <span className="text-sm font-black tracking-tight text-[#063B63] dark:text-[#F8FAFC]">
                FIT AND CARE
              </span>
              <span className="text-[10px] italic text-[#6B7280] dark:text-[#94A3B8] leading-tight">
                học ăn thông minh
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="text-sm font-medium text-[#1F2937] dark:text-[#CBD5E1] hover:text-[#0B74D1] dark:hover:text-[#1E90FF] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
            <a
              href="#contact"
              onClick={(e) => handleNav(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-2 bg-[#FFD43B] hover:bg-[#FFC107] text-[#063B63] font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Đăng ký tư vấn
            </a>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-[#063B63] dark:bg-[#F8FAFC] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-[#063B63] dark:bg-[#F8FAFC] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-[#063B63] dark:bg-[#F8FAFC] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="lg:hidden bg-white dark:bg-[#071A2D] border-t border-[#E5E7EB] dark:border-[#1E3A56] pb-4">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="block px-4 py-3 text-sm font-medium text-[#1F2937] dark:text-[#CBD5E1] hover:bg-[#EAF6FF] dark:hover:bg-[#0B2239] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-2">
              <a
                href="#contact"
                onClick={(e) => handleNav(e, '#contact')}
                className="block text-center bg-[#FFD43B] hover:bg-[#FFC107] text-[#063B63] font-bold text-sm px-5 py-3 rounded-full transition-colors"
              >
                Đăng ký tư vấn
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
