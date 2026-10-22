import React from 'react';
import { LayoutGrid, DollarSign, BookOpen, HelpCircle } from 'lucide-react';

const LearningBenefits = () => {
  const benefits = [
    {
      id: 1,
      icon: <LayoutGrid className="w-5 h-5 text-white" />,
      title: "Easy Accessable",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
    },
    {
      id: 2,
      icon: <DollarSign className="w-5 h-5 text-white" />,
      title: "More Affordable Cost",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
    },
    {
      id: 3,
      icon: <BookOpen className="w-5 h-5 text-white" />,
      title: "Flexible Study Time",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
    },
    {
      id: 4,
      icon: <HelpCircle className="w-5 h-5 text-white" />,
      title: "Consultation With Mentor",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with floating badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Background Blob */}
              <div className="w-full aspect-square bg-[#FDE7C7] rounded-full overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" 
                  alt="Student learning" 
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Top Floating Badge: Category Progress */}
              <div className="absolute -top-4 -right-4 sm:right-0 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 max-w-[200px] z-10">
                <h5 className="text-xs font-bold text-gray-800 mb-2">Lorem ipsum dolor</h5>
                <div className="space-y-2 text-[10px] text-gray-500">
                  <div>
                    <div className="flex justify-between mb-0.5">
                      <span>UI/UX Design</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div className="bg-fuchsia-500 h-1.5 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-0.5">
                      <span>Mobile Development</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div className="bg-emerald-400 h-1.5 rounded-full w-1/2"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-0.5">
                      <span>Web Development</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div className="bg-blue-500 h-1.5 rounded-full w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Floating Badge: Progress Ring */}
              <div className="absolute -bottom-6 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center space-x-3 z-10">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-gray-200"
                      strokeWidth="3"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-[#127C71]"
                      strokeDasharray="75, 100"
                      strokeWidth="3"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="absolute text-xs font-bold text-[#127C71]">75%</span>
                </div>
                <div>
                  <h5 className="text-xs font-bold text-gray-800">Lorem ipsum</h5>
                  <p className="text-[10px] text-gray-400">Lorem ipsum</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Heading & Benefit Grid */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Make your <span className="text-[#127C71] relative inline-block">
                Learning
                <span className="absolute left-0 bottom-1 w-full h-2 bg-[#F89B29] -z-10 rounded-full"></span>
              </span> <br />
              Enjoyable
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
              Set the way of learning according to your wishes with some of the benefits that you get us, so you can enjoy the lessons that we provide.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {benefits.map((item) => (
                <div key={item.id} className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-start space-x-3.5">
                  <div className="p-2.5 bg-[#127C71] rounded-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#F89B29] mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LearningBenefits;