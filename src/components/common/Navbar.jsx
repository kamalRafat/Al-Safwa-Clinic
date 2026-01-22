import React, { useState, useEffect, useCallback, memo } from "react";
import { Menu, X, Calendar } from "lucide-react";
import logo from "../../assets/logo.jpg";
import { useLanguage } from "../../hooks/useLanguage";
import { motion, AnimatePresence } from "framer-motion";
import CallButton from "./CallButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    setIsOpen(false);

    // Use requestAnimationFrame for smoother transition
    requestAnimationFrame(() => {
      const element = document.querySelector(href);
      if (element) {
        const offset = 100;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  }, []);

  const navLinks = React.useMemo(
    () => [
      { name: t.nav.home, href: "#home" },
      { name: t.nav.services, href: "#services" },
      { name: t.nav.about, href: "#about" },
      { name: t.nav.faq, href: "#faq" },
      { name: t.nav.reviews, href: "#reviews" },
      { name: t.nav.contact, href: "#contact" },
    ],
    [t.nav],
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 md:bg-white/80 md:backdrop-blur-lg shadow-lg py-2"
          : "bg-transparent py-4 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <a
              href="#home"
              className="flex items-center gap-3 group"
              aria-label={t.nav.home}
              onClick={(e) => handleNavClick(e, "#home")}
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                className="bg-white p-1 rounded-xl shadow-sm border border-gray-100 transition-transform duration-300"
              >
                <img
                  src={logo}
                  alt="Logo"
                  className="h-12 w-auto object-contain"
                />
              </motion.div>
              <div className="hidden sm:block">
                <div className="font-black text-gray-900 leading-none">
                  {t.common.clinicName}
                </div>
                <div className="text-[10px] from-primary to-accent bg-gradient-to-r bg-clip-text text-transparent font-bold uppercase tracking-widest mt-1">
                  {t.common.clinicTagline}
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-xl text-sm font-bold text-gray-600 hover:text-primary hover:bg-primary/5 transition-all duration-300"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <CallButton variant="icon" ariaLabel={t.hero.call} />
            </motion.div>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#appointment"
              className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-2xl hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20 font-bold flex items-center gap-2"
              aria-label={t.nav.book}
              onClick={(e) => handleNavClick(e, "#appointment")}
            >
              <Calendar size={18} aria-hidden="true" />
              {t.nav.book}
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 text-gray-600 hover:text-primary transition-colors focus:outline-none"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={28} aria-hidden="true" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={28} aria-hidden="true" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute w-full bg-white shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-2">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  href={link.href}
                  className="block px-4 py-4 text-lg font-bold text-gray-700 hover:text-primary hover:bg-primary/5 rounded-2xl transition-all"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-6 border-t border-gray-100 mt-4"
              >
                <a
                  href="#appointment"
                  className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-[1.5rem] text-xl font-bold shadow-xl shadow-primary/20"
                  onClick={(e) => handleNavClick(e, "#appointment")}
                >
                  <Calendar size={24} />
                  {t.nav.book}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default memo(Navbar);
