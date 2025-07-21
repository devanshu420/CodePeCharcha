import { useState, useEffect } from "react";
import { testimonials } from "../data/testimonials";
import { Star } from "lucide-react";

export default function About() {
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

  const timelineEvents = [
    {
      year: '2020',
      title: 'The Beginning 🌱',
      description: 'Started with a simple YouTube channel. Pehle video mein 50 views the, lekin passion unlimited tha!',
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      year: '2021',
      title: 'First Course 📚',
      description: 'JavaScript Mastery course launch kiya. 100 students enrolled - celebration time!',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      year: '2022',
      title: 'Community Growth 🚀',
      description: 'Discord server, WhatsApp groups, aur offline meetups - community ban gayi family!',
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      year: '2024',
      title: 'CodePeCharcha Official 🎉',
      description: 'Official website, structured courses, internships - ab hum ek proper institution hain!',
      gradient: 'from-blue-500 to-purple-500'
    }
  ];

  return (
    <div className="pt-24">
      {/* About Hero */}
      <section className="py-20 bg-gradient-to-br from-purple-900/30 to-blue-900/30">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-poppins font-bold mb-6">
            About <span className="gradient-text">CodePeCharcha</span> 🚀
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hamari kahani coding, community aur creativity ki hai. Yahan hum sikhate nahi, 
            seekhte hain - saath mein, Hinglish mein, aur dil se!
          </p>
        </div>
      </section>
      
      {/* Founder Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600" 
                alt="Founder working on programming tutorials" 
                className="rounded-2xl shadow-2xl" 
              />
            </div>
            <div className="scroll-animate">
              <h2 className="text-4xl font-poppins font-bold mb-6">
                Meet the <span className="gradient-text">Founder</span> 👨‍💻
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Namaste! Main hoon Rahul, ek simple sa coder jo chahta tha ki programming 
                seekhna itna mushkil na ho. College mein jab main struggle kar raha tha, 
                tab socha - kyun na ek platform banau jahan sab kuch Hinglish mein ho!
              </p>
              <p className="text-lg text-gray-300 mb-8">
                2020 mein shuru kiya tha sirf 5 students ke saath. Aaj hmare paas 10,000+ 
                happy learners hain jo desh-videsh mein kaam kar rahe hain. Bas ek hi mantra 
                hai - "Code karo, seekho aur sikhao!" ✨
              </p>
              
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold gradient-text">10K+</div>
                  <div className="text-gray-400">Students</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">500+</div>
                  <div className="text-gray-400">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">95%</div>
                  <div className="text-gray-400">Job Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-poppins font-bold text-center mb-12 scroll-animate">
            Our <span className="gradient-text">Journey</span> 🛣️
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={event.year} className="flex items-center space-x-6 scroll-animate">
                  <div className={`w-16 h-16 bg-gradient-to-r ${event.gradient} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <span className="text-xl font-bold">{event.year}</span>
                  </div>
                  <div className="glass-morphism rounded-xl p-6 flex-1 hover-glow">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-300">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-poppins font-bold text-center mb-12 scroll-animate">
            What Our <span className="gradient-text">Students Say</span> 💬
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="glass-morphism rounded-2xl p-6 hover-glow transition-all duration-300 scroll-animate">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name} testimonial`} 
                    className="w-12 h-12 rounded-full mr-4 object-cover" 
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role} @{testimonial.company}</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-gray-300">{testimonial.testimonial}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
