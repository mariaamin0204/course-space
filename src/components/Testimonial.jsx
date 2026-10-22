import testimonialImg from '../assets/home-testimonial.webp';
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonial = () => {
  return (
    <section id="testimonial" className="py-20 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Title & Feedback Content */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Testimonial What our <br />
              <span className="text-[#127C71] relative inline-block">
                Students
                <span className="absolute left-0 bottom-1 w-full h-2 bg-[#F89B29] -z-10 rounded-full"></span>
              </span> Say
            </h2>

            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-bold text-gray-800">Detailed learning materials</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Classes that provide very detailed material in term of making UI UX Design starting team making low and hight quality, system designs, using data layout and make prototypes and testing.
              </p>
            </div>

            {/* Author Profile & Navigation */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-gray-200 gap-4">
              
              {/* Profile Card */}
              <div className="flex items-center space-x-4 bg-white p-3 rounded-2xl shadow-sm border border-gray-100 pr-6">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" 
                  alt="Ashley Graham" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Ashley Graham</h4>
                  <p className="text-xs text-gray-500">Back-End Developer</p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex space-x-3">
                <button aria-label="Previous testimonial" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-[#127C71] hover:text-white hover:border-[#127C71] transition-all shadow-sm">
                  <ArrowLeft size={18} />
                </button>
                <button aria-label="Next testimonial" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-[#127C71] hover:text-white hover:border-[#127C71] transition-all shadow-sm">
                  <ArrowRight size={18} />
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Student Portrait with Yellow Organic Shape */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-[#FDE7C7] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] overflow-hidden flex items-end justify-center">
              <img 
                src={testimonialImg}
                alt="Student holding books" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonial;