import React, { Suspense, lazy } from "react";
import { useLanguage } from "../hooks/useLanguage";

// Common Components (Keep eager)
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Hero from "../features/Hero";
import SectionHeading from "../components/common/SectionHeading";
const About = lazy(() => import("../features/About"));
const Services = lazy(() => import("../features/Services"));
const WhyUs = lazy(() => import("../features/WhyUs"));
const Doctor = lazy(() => import("../features/Doctor"));
const BeforeAfter = lazy(() => import("../features/BeforeAfter"));
const FAQ = lazy(() => import("../features/FAQ"));
const GoogleReviews = lazy(() => import("../features/GoogleReviews"));
const AppointmentForm = lazy(() => import("../components/AppointmentForm"));
const Contact = lazy(() => import("../components/common/Contact"));

const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center bg-gray-50/50">
    <div className="animate-pulse flex flex-col items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-primary/20"></div>
      <div className="w-32 h-4 bg-gray-200 rounded"></div>
    </div>
  </div>
);

// High-performance Intersection Observer wrapper
const LazySection = ({ children, id }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }, // Load early before user reaches it
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} id={id} className="min-h-[200px]">
      {isVisible ? children : <SectionLoader />}
    </div>
  );
};

const LandingPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />

        <Suspense fallback={<SectionLoader />}>
          <LazySection id="about">
            <About />
          </LazySection>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <LazySection>
            <WhyUs />
          </LazySection>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <LazySection id="services">
            <Services />
          </LazySection>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <LazySection>
            <Doctor />
          </LazySection>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <LazySection>
            <BeforeAfter />
          </LazySection>
        </Suspense>

        {/* Appointment Section */}
        <LazySection id="appointment">
          <section className="py-20 md:py-32 bg-white relative overflow-hidden">
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
        </LazySection>

        <Suspense fallback={<SectionLoader />}>
          <LazySection id="faq">
            <FAQ />
          </LazySection>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <LazySection id="reviews">
            <GoogleReviews />
          </LazySection>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <LazySection id="contact">
            <Contact />
          </LazySection>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
