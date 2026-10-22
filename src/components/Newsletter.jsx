import React from 'react';

const Newsletter = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Yellow-Orange Container with increased vertical padding (py-16 sm:py-20) */}
        <div className="bg-[#FFAB2D] rounded-[32px] sm:rounded-[40px] px-6 py-16 sm:py-20 text-center shadow-sm">
          
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F242E] tracking-tight mb-4">
            Subscribe to Our News Letter
          </h2>

          {/* Subtitle */}
          <p className="text-[#2B2B2B] text-sm sm:text-base mb-10 max-w-xl mx-auto font-normal">
            Subscribe to our newsletter to get information about our courses.
          </p>

          {/* Form Input & Button Container */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your Email Address"
              className="w-full sm:w-[420px] bg-white text-gray-700 px-6 py-4 rounded-2xl sm:rounded-xl text-sm focus:outline-none shadow-sm placeholder-gray-400"
            />
            <button
              type="button"
              className="w-full sm:w-auto bg-[#127C71] hover:bg-[#0d5d55] text-white px-8 py-4 rounded-2xl sm:rounded-xl font-semibold text-sm transition-all shadow-md active:scale-95 cursor-pointer shrink-0"
            >
              Subscribe
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;