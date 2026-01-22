import React, { Suspense, lazy } from "react";
import { useLanguage } from "../hooks/useLanguage";

// Common Components (Keep eager)
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Hero from "../features/Hero";
import About from "../features/About";
import SectionHeading from "../components/common/SectionHeading";

// Lazy Loaded Features
const Services = lazy(() => import("../features/Services"));
const WhyUs = lazy(() => import("../features/WhyUs"));
const Doctor = lazy(() => import("../features/Doctor"));
const BeforeAfter = lazy(() => import("../features/BeforeAfter"));
const FAQ = lazy(() => import("../features/FAQ"));
const GoogleReviews = lazy(() => import("../features/GoogleReviews"));
const AppointmentForm = lazy(() => import("../components/AppointmentForm"));
const Contact = lazy(() => import("../components/common/Contact"));

const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const LandingPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />

        <Suspense fallback={<SectionLoader />}>
          <WhyUs />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Doctor />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <BeforeAfter />
        </Suspense>

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
              <Suspense fallback={<SectionLoader />}>
                <AppointmentForm />
              </Suspense>
            </div>
          </div>
        </section>

        <Suspense fallback={<SectionLoader />}>
          <FAQ />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <GoogleReviews />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
