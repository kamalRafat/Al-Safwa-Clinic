import React from "react";
import { useLanguage } from "../hooks/useLanguage";

// Features
import Hero from "../features/Hero";
import About from "../features/About";
import Services from "../features/Services";
import WhyUs from "../features/WhyUs";
import Doctor from "../features/Doctor";
import BeforeAfter from "../features/BeforeAfter";
import FAQ from "../features/FAQ";
import GoogleReviews from "../features/GoogleReviews";
import AppointmentForm from "../components/AppointmentForm";

// Common Components
import Navbar from "../components/common/Navbar";
import Contact from "../components/common/Contact";
import Footer from "../components/common/Footer";
import SectionHeading from "../components/common/SectionHeading";

const LandingPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Doctor />
        <BeforeAfter />

        {/* Appointment Section */}
        <section
          id="appointment"
          className="py-20 md:py-32 bg-white relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="الخطوة الأولى لابتسامة أفضل"
              title={t.form.sectionTitle}
              subtitle={t.form.sectionDesc}
            />

            <div className="max-w-4xl mx-auto">
              <AppointmentForm />
            </div>
          </div>
        </section>

        <FAQ />
        <GoogleReviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
