import React from 'react';
import { Play } from 'lucide-react';
import heroImg from '../assets/hero.webp';

const Hero = () => {
  return (
    <section className="relative bg-white pt-10 pb-28 overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading, Description & Buttons */}
          <div className="lg:col-span-7 space-y-8 z-10">
            {/* Heading with Accent Styling */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              <span className="relative inline-block text-[#127C71]">
                Improve
                {/* Yellow Curved Underline */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-4 text-[#F89B29]"
                  viewBox="0 0 200 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 14C50 4 150 4 197 14"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              your Skill <br className="hidden sm:inline" />
              with Different Way
            </h1>

            {/* Paragraph Text */}
            <p className="text-gray-600 text-base sm:text-lg max-w-xl leading-relaxed">
              Let's take an online course to improve your skills in a different way, you can set your own study time according to your learning speed. So you can study comfortably and absorb the material easily.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="bg-[#127C71] hover:bg-[#0d5d55] text-white px-7 py-3.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform active:scale-95">
                Get Started
              </button>
              
              <button className="flex items-center gap-2 border-2 border-[#127C71] text-[#127C71] hover:bg-teal-50 px-6 py-3 rounded-full font-medium transition-all">
                <Play className="w-4 h-4 fill-current text-[#127C71]" />
                Watch Video
              </button>
            </div>
          </div>

          {/* Right Column: Hero Image Container with Floating Certificate Card */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-10 lg:mt-0">
            
            {/* Main Image Container */}
            <div className="relative w-full max-w-md lg:max-w-none">
              <img
                src={heroImg}
                alt="Student holding books"
                className="w-full h-auto object-cover rounded-2xl"
              />

              {/* Floating Certificate Card */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-[-70px] bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 max-w-xs z-20">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7 text-[#127C71]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="12" rx="2" />
                    <path d="M7 8h10M7 12h6" />
                    <circle cx="17" cy="17" r="3" fill="#F89B29" stroke="none" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#F89B29] text-base leading-snug">Certificate</h4>
                  <p className="text-gray-500 text-xs leading-tight">There are certificates for all courses.</p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Floating Stats Box (10K+ Students, 20+ Quality Course, 10+ Experience Mentors) */}
        <div className="mt-16 sm:mt-20 max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
            
            {/* Stat 1 */}
            <div className="pt-2 md:pt-0">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#F89B29]">10K+</h3>
              <p className="text-gray-600 font-medium text-sm sm:text-base mt-1">Students</p>
            </div>

            {/* Stat 2 */}
            <div className="pt-4 md:pt-0">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#F89B29]">20+</h3>
              <p className="text-gray-600 font-medium text-sm sm:text-base mt-1">Quality Course</p>
            </div>

            {/* Stat 3 */}
            <div className="pt-4 md:pt-0">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#F89B29]">10+</h3>
              <p className="text-gray-600 font-medium text-sm sm:text-base mt-1">Experience Mentors</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;