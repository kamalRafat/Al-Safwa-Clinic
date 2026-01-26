import React from "react";
import {
  Facebook,
  Instagram,
  MapPin,
  Phone,
  CalendarCheck,
  ChevronRight,
} from "lucide-react";
import logo from "../../assets/logo.webp";
import { content as t } from "../../constants/content";
import { APP_CONFIG } from "../../constants/appConstants";

const Footer = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <footer className="relative bg-[#0F172A] text-white pt-24 pb-12 overflow-hidden">
      {/* Background Decorative Blobs - Desktop Only */}
      {!isMobile && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/30 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px]"></div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-white p-2 rounded-2xl">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-12 w-auto"
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <div className="text-2xl font-black tracking-tight leading-none bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {t.common.clinicName}
                </div>
                <div className="text-[10px] text-white font-bold uppercase tracking-widest mt-1">
                  {t.common.clinicTagline}
                </div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed font-medium">
              {t.footer.desc}
            </p>
            <div className="flex gap-4">
              <SocialIcon
                icon={<Facebook size={18} />}
                href="https://www.facebook.com/profile.php?id=61583806317493"
                label="فيسبوك"
              />
              <SocialIcon
                icon={<Instagram size={18} />}
                href="https://www.instagram.com/dr.mo.alareeni?igsh=MTJ4NzA0bWd5bDFycA=="
                label="انستجرام"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-black mb-8 relative inline-block">
              {t.footer.quickLinks}
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            </h4>
            <ul className="space-y-4">
              <FooterLink href="#home">{t.nav.home}</FooterLink>
              <FooterLink href="#about">{t.nav.about}</FooterLink>
              <FooterLink href="#services">{t.nav.services}</FooterLink>
              <FooterLink href="#doctors">{t.doctorsTitle}</FooterLink>
              <FooterLink href="#faq">{t.nav.faq}</FooterLink>
              <FooterLink href="#reviews">{t.nav.reviews}</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-black mb-8 relative inline-block">
              {t.footer.contactInfo}
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            </h4>
            <ul className="space-y-6">
              <ContactListItem
                href="#contact"
                icon={<MapPin size={20} />}
                text="مدينة بدر - الحي الثاني"
              />
              <ContactListItem
                icon={<Phone size={20} />}
                text={APP_CONFIG.PHONE}
                href={`tel:${APP_CONFIG.PHONE}`}
                dir="ltr"
              />
              {/* <ContactListItem
                icon={<Mail size={20} />}
                text={APP_CONFIG.EMAIL}
                href={`mailto:${APP_CONFIG.EMAIL}`}
              /> */}
            </ul>
          </div>

          {/* Appointment CTA */}
          <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />
            <h4 className="text-xl font-black mb-6">
              {t.footer.appointmentTitle}
            </h4>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
              {t.footer.appointmentDesc}
            </p>
            <a
              href="#appointment"
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-primary to-accent py-4 rounded-2xl font-bold hover:opacity-90 transition-all duration-300 shadow-xl shadow-primary/20"
            >
              <CalendarCheck size={18} />
              {t.nav.book}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-12 flex flex-col lg:flex-row justify-between items-center gap-8 text-gray-500 text-sm">
          <p className="text-center lg:text-start" dir="rtl">
            &copy; {new Date().getFullYear()} {APP_CONFIG.APP_NAME}{" "}
            {t.footer.rights}
          </p>

          <nav className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">
              {t.footer.privacyPolicy}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {t.footer.terms}
            </a>
          </nav>

          {/* <p className="flex items-center gap-2 group cursor-pointer">
            {t.footer.madeWith}{" "}
            <Heart
              size={14}
              className="text-red-500 fill-red-500 animate-pulse group-hover:scale-150 transition-transform"
            />{" "}
            {t.footer.for}
          </p> */}
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, href, label }) => (
  <a
    href={href}
    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20"
    aria-label={label}
  >
    {React.cloneElement(icon, { "aria-hidden": "true" })}
  </a>
);

const FooterLink = ({ href, children }) => (
  <li>
    <a
      href={href}
      className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300"
    >
      <div className="w-0 group-hover:w-4 h-[2px] bg-primary transition-all duration-300 rounded-full" />
      <ChevronRight
        size={14}
        className="group-hover:translate-x-1 transition-transform rtl:rotate-180"
      />
      <span className="font-medium">{children}</span>
    </a>
  </li>
);

const ContactListItem = ({ icon, text, href, ...props }) => (
  <li className="flex items-center gap-4 text-gray-400 group">
    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    {href ? (
      <a
        href={href}
        className="hover:text-primary transition-colors"
        {...props}
      >
        {text}
      </a>
    ) : (
      <span className="pt-1">{text}</span>
    )}
  </li>
);

export default React.memo(Footer);
