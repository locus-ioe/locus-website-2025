import React, { lazy, Suspense, useEffect, useRef, useState } from "react";

// Lazy-load Three.js wireframe so the large three.js bundle isn't in the initial page load
const WireframeSphere = lazy(() => import("./wireframe"));

const LocusDirectors = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Mount 3D sphere when section approaches viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-[85vh] sm:min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-6xl mx-auto">
        {/* Globe Container: strictly bounded and aspect-ratio locked across all viewports */}
        <div className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[440px] lg:max-w-[500px] aspect-square mx-auto flex items-center justify-center relative">
          {isVisible ? (
            <Suspense fallback={<div className="w-full h-full aspect-square" />}>
              <WireframeSphere />
            </Suspense>
          ) : (
            <div className="w-full h-full aspect-square" />
          )}
        </div>

        {/* Text Container: responsive typography adapting smoothly from mobile to 4K displays */}
        <div className="my-auto space-y-4 text-center md:text-left px-2 sm:px-4">
          <h2 className="text-3xl sm:text-5xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="text-primary">LOCUS </span>
            <span className="text-white">2027 </span>
            <span className="text-primary">Marvels </span>
            <span className="text-white">all </span>
            <span className="text-white">across </span>
            <span className="text-primary">the </span>
            <span className="text-white">country </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default LocusDirectors;
