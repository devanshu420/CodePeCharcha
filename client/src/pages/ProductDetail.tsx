import { useParams } from "wouter";
import { courses } from "../data/courses";
import { ArrowLeft, Rocket, CheckCircle } from "lucide-react";
import { useLocation } from "wouter";

export default function ProductDetail() {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <button 
            onClick={() => setLocation('/courses')}
            className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-full"
          >
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  const handleEnrollClick = () => {
    // This would typically handle enrollment logic
    alert(`Enrollment for ${course.title} - Feature coming soon! 🚀`);
  };

  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <button 
          onClick={() => setLocation('/courses')}
          className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Courses</span>
        </button>

        <div className="glass-morphism rounded-2xl overflow-hidden max-w-6xl mx-auto">
          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className={`${course.badgeColor} px-4 py-2 rounded-full text-sm capitalize`}>
                      {course.category === 'internship' ? 'Internship' : course.category}
                    </span>
                    <span className="text-3xl">{course.emoji}</span>
                  </div>
                  <h1 className="text-4xl font-poppins font-bold mb-4">{course.title}</h1>
                  <p className="text-xl text-gray-300 mb-6">{course.description}</p>
                  <p className="text-gray-400 leading-relaxed">{course.fullDescription}</p>
                </div>

                <div className="flex items-center space-x-6">
                  <span className="text-4xl font-bold gradient-text">{course.price}</span>
                  <span className="text-gray-400 text-lg">{course.duration}</span>
                </div>

                <button 
                  onClick={handleEnrollClick}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center justify-center space-x-2"
                >
                  <Rocket size={20} />
                  <span>
                    {course.category === 'merch' ? 'Buy Now' : 'Enroll Now'}
                  </span>
                </button>
              </div>

              <div className="space-y-6">
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">What you'll get:</h3>
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
