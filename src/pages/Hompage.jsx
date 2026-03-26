import React, { Suspense, lazy } from "react";

// Lazy load all components
const Hero = lazy(() => import("../components/Hero"));
const ComparisonSection = lazy(() => import("../components/Whyhikewike2"));
const WhatYouGet = lazy(() => import("../components/Whatyouget"));
const EditionSection = lazy(() => import("../components/Firstedition"));
const Introsection = lazy(() => import("../components/Introsection"));
const FirstBanner = lazy(() => import("../components/banner/FirstBanner"));
const Conceptsection = lazy(() => import("../components/Conceptsection"));
const TestimonialCarousel = lazy(() =>
  import("../components/Testimonials/Testimonialssection")
);
const FAQ = lazy(() => import("../components/faq/FAqnew"));

// Optional (if you use later)
// const UpcommingTrips = lazy(() => import("../components/popularlocation/UpcommingTrips"));
// const WeekendTrips = lazy(() => import("../components/popularlocation/WeekendTrips"));
// const CoorsparateTrips = lazy(() => import("../components/popularlocation/CorporateTrips"));

const Loader = () => (
  <div className="flex justify-center items-center h-[50vh]">
    <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
  </div>
);

const Hompage = () => {
  return (
    <div className="md:grid md:place-items-center space-y-20 pt-20">

      <Suspense fallback={<Loader />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Introsection />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <FirstBanner />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Conceptsection />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <EditionSection />
      </Suspense>
      {/* <Suspense fallback={<Loader />}>
        <ProgramSection />
      </Suspense> */}
      <Suspense fallback={<Loader />}>
        <WhatYouGet />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <ComparisonSection />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <TestimonialCarousel />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <FAQ />
      </Suspense>

    </div>
  );
};

export default Hompage;