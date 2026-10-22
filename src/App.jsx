import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PopularCourses from './components/PopularCourses';
import LearningBenefits from './components/LearningBenefits';
import Testimonial from './components/Testimonial';
import Mentors from './components/Mentors';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 antialiased selection:bg-[#127C71] selection:text-white">
      {/* Header & Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <PopularCourses />
        <LearningBenefits />
        <Testimonial />
        <Mentors />
        <Newsletter />
      </main>

      {/* Page Footer */}
      <Footer />
    </div>
  );
}

export default App;
