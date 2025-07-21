import { useState, useEffect } from "react";
import { ChevronDown, Instagram, Github, Linkedin } from "lucide-react";
import { useLocation } from "wouter";

export default function Home() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // showAlert('Subscribed successfully! 📨 Welcome to CodePeCharcha family!', 'success');
      setEmail('');
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-blue-900/50"></div>
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
            alt="Modern tech workspace" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6">
              Welcome to <span className="gradient-text">CodePeCharcha</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              🚀 Jahaan hoti hai coding ki asli baat! 💻
            </p>
            <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
              India's most interactive coding school where we teach in Hinglish, 
              build amazing projects, and create the next generation of developers!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => setLocation('/courses')}
                className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-full text-lg font-semibold hover-glow transition-all duration-300"
              >
                🚀 Explore Courses
              </button>
              <button 
                onClick={() => setLocation('/courses')}
                className="glass-morphism px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all"
              >
                ☕ Join Internship
              </button>
            </div>
            
            <div className="flex justify-center space-x-6 mt-12">
              <a href="#" className="text-2xl hover:text-purple-400 transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-2xl hover:text-purple-400 transition-colors">
                <Github />
              </a>
              <a href="#" className="text-2xl hover:text-purple-400 transition-colors">
                <Linkedin />
              </a>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <ChevronDown className="text-2xl text-purple-400" />
          </div>
        </div>
      </section>
      
      {/* Latest Content Slider */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-poppins font-bold text-center mb-12 scroll-animate">
            Latest <span className="gradient-text">Content</span> 📚
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-morphism rounded-2xl overflow-hidden hover-glow transition-all duration-300 scroll-animate">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Coding students learning together" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">React ke Fundamentals 🔥</h3>
                <p className="text-gray-400 mb-4">Complete guide to React in Hinglish - hooks, components, aur sab kuch!</p>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Video Tutorial</span>
              </div>
            </div>
            
            <div className="glass-morphism rounded-2xl overflow-hidden hover-glow transition-all duration-300 scroll-animate">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Programming tutorials on screen" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">JavaScript Mastery 💪</h3>
                <p className="text-gray-400 mb-4">Async/await se lekar closures tak - sab samjhenge aram se!</p>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Blog Post</span>
              </div>
            </div>
            
            <div className="glass-morphism rounded-2xl overflow-hidden hover-glow transition-all duration-300 scroll-animate">
              <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Indian youth working with technology" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Career Roadmap 🛣️</h3>
                <p className="text-gray-400 mb-4">Fresher se senior developer tak ka complete journey!</p>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Career Guide</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-poppins font-bold mb-4 scroll-animate">Stay Connected! 📨</h2>
          <p className="text-xl text-gray-300 mb-8 scroll-animate">Get latest updates, tutorials aur coding tips directly in your inbox!</p>
          
          <div className="max-w-md mx-auto scroll-animate">
            <form onSubmit={handleSubscribe} className="flex gap-4">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address..." 
                className="flex-1 px-4 py-3 rounded-full bg-gray-800 border border-gray-600 focus:border-purple-400 outline-none transition-colors" 
              />
              <button 
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 rounded-full hover:shadow-lg transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
