import React from 'react';
import VisitCounter from "../components/VisitCounter";

function PastLocusPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 mt-8">
      {/* <div>
      <h1>About Page</h1>
      <VisitCounter pageName="About" />
    </div> */}
      {/* Title and iframe for Locus 2024 */}
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-white text-[1.875rem] leading-[2.25rem] font-bold mb-4">
          <a href="https://cit.susheelthapa.com.np/" target="_blank" rel="noopener noreferrer" className="hover:underline">WIA x CIT Program 2025</a>
        </h1>
        <iframe
          src="https://cit.susheelthapa.com.np/"
          title="Locus 2024"
          className="w-full h-[500px] border border-gray-300 rounded-md shadow-md"
        ></iframe>
      </div>
      {/* Title and iframe for Locus 2024 */}
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-white text-[1.875rem] leading-[2.25rem] font-bold mb-4">
          <a href="https://locus-frontend-locususer.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">Locus 2024</a>
        </h1>
        <iframe
          src="https://locus-frontend-locususer.vercel.app/"
          title="Locus 2024"
          className="w-full h-[500px] border border-gray-300 rounded-md shadow-md"
        ></iframe>
      </div>

      {/* Title and iframe for Locus 2023 */}
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-white text-[1.875rem] leading-[2.25rem] font-bold mb-4">
          <a href="https://locus-static-site-e227.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">Locus 2023</a>
        </h1>
        <iframe
          src="https://locus-static-site-e227.vercel.app/"
          title="Locus 2023"
          className="w-full h-[500px] border border-gray-300 rounded-md shadow-md"
        ></iframe>
      </div>
    </div>
  );
}

export default PastLocusPage;
