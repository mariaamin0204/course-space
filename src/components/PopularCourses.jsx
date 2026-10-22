import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const coursesData = [
  {
    id: 1,
    title: 'UI/UX Complete Guide',
    rating: 5,
    reviews: 15,
    price: '\$20',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 2,
    title: 'Mastering Data Modeling Fundamentals',
    rating: 4,
    reviews: 7,
    price: '\$30',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 3,
    title: 'The Complete Guide Docker and Kubernetes',
    rating: 4,
    reviews: 12,
    price: '\$30',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 4,
    title: 'Fullstack Web Development Bootcamp',
    rating: 5,
    reviews: 24,
    price: '\$25',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 5,
    title: 'Machine Learning & AI Masterclass',
    rating: 5,
    reviews: 19,
    price: '\$35',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 6,
    title: 'React & Next.js Advanced Architecture',
    rating: 4,
    reviews: 11,
    price: '\$28',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 7,
    title: 'Cloud Computing & AWS Solutions Architect',
    rating: 5,
    reviews: 30,
    price: '\$40',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600',
  },
];

const PopularCourses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('right');
  const itemsPerPage = 3;
  const maxIndex = Math.max(0, coursesData.length - itemsPerPage);

  // Automatic right-to-left sliding effect every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection('right');
      setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    }, 3500);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const handleNext = () => {
    setSlideDirection('right');
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setSlideDirection('left');
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  return (
    <section className="bg-[#f2f5f7] py-20 overflow-hidden" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#22252a] leading-[1.25]">
              Most <br />
              Popular <br />
              Courses
            </h2>
          </div>

          {/* Right Column: Carousel Cards Slider */}
          <div className="lg:col-span-8 overflow-hidden">
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-5 transition-all duration-500 ease-in-out"
              key={currentIndex}
              style={{
                animation: slideDirection === 'right' 
                  ? 'slideFromRight 0.45s ease-in-out' 
                  : 'slideFromLeft 0.45s ease-in-out',
              }}
            >
              {coursesData
                .slice(currentIndex, currentIndex + itemsPerPage)
                .map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
                  >
                    <div>
                      {/* Image */}
                      <div className="overflow-hidden rounded-2xl mb-4 h-48">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-[#1f242e] text-base leading-snug line-clamp-2 min-h-[48px] mb-3">
                        {course.title}
                      </h3>

                      {/* Star Ratings */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < course.rating
                                ? 'text-[#f5be32] fill-[#f5be32]'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="text-xs text-gray-500 font-medium ml-1">
                          ({course.reviews})
                        </span>
                      </div>
                    </div>

                    {/* Price & Arrow Action */}
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-2">
                      <div className="flex items-baseline gap-1">
                        <span className="text-[#127C71] font-bold text-lg">
                          {course.price}
                        </span>
                        <span className="text-gray-400 text-xs font-normal">
                          / course
                        </span>
                      </div>

                      <button className="w-8 h-8 rounded-full flex items-center justify-center text-[#127C71] group-hover:bg-[#127C71] group-hover:text-white transition-colors duration-300">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
            </div>

            {/* Bottom Slider Navigation: Dots Indicator & Arrow Controls */}
            <div className="flex items-center justify-between mt-10 pt-4">
              
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {[...Array(maxIndex + 1)].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSlideDirection(idx > currentIndex ? 'right' : 'left');
                      setCurrentIndex(idx);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx
                        ? 'w-8 bg-[#127C71]'
                        : 'w-5 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Arrow Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-600 hover:text-[#127C71] hover:border-[#127C71] transition-all transform active:scale-95 cursor-pointer"
                  aria-label="Previous Courses"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-600 hover:text-[#127C71] hover:border-[#127C71] transition-all transform active:scale-95 cursor-pointer"
                  aria-label="Next Courses"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* CSS Keyframe Animations */}
      <style>{`
        @keyframes slideFromRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideFromLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default PopularCourses;