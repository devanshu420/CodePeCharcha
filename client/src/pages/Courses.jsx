import { useState } from "react";
import { useLocation } from "wouter";
import { courses } from "../data/courses";

export default function Courses() {
  const [, setLocation] = useLocation();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'courses', label: 'Courses' },
    { key: 'internship', label: 'Internships' },
    { key: 'merch', label: 'Merch' }
  ];

  const filteredCourses = activeFilter === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeFilter);

  const handleCourseClick = (courseId) => {
    setLocation(`/product/${courseId}`);
  };

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-purple-900/30 to-blue-900/30">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-poppins font-bold mb-6">
            Our <span className="gradient-text">Offerings</span> 🎯
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Courses, internships, aur merch - sab kuch ek hi jagah!
          </p>
          
          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                    : 'glass-morphism hover:bg-white/20'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                onClick={() => handleCourseClick(course.id)}
                className="glass-morphism rounded-2xl overflow-hidden hover-glow transition-all duration-300 cursor-pointer"
              >
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`${course.badgeColor} px-3 py-1 rounded-full text-sm capitalize`}>
                      {course.category === 'internship' ? 'Internship' : course.category}
                    </span>
                    <span className="text-2xl">{course.emoji}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-400 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold gradient-text">{course.price}</span>
                    <span className="text-sm text-gray-400">{course.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
