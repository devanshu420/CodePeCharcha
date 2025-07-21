import { Instagram, Github, Linkedin, Mail, Heart, Code } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSocialClick = (platform: string) => {
    // Mock social media links - would be replaced with real links
    alert(`${platform} link - Coming soon! 🚀`);
  };

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    if (email) {
      alert('Newsletter subscription coming soon! 📨');
    }
  };

  return (
    <footer className="bg-gray-900/80 backdrop-blur-lg border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Code className="text-white text-lg" />
              </div>
              <h3 className="text-xl font-poppins font-bold gradient-text">CodePeCharcha</h3>
            </div>
            <p className="text-gray-400">
              India ka sabse interactive coding school! 🚀<br />
              Jahaan hoti hai coding ki asli baat, Hinglish mein!
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocialClick('Instagram')}
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Instagram size={20} />
              </button>
              <button 
                onClick={() => handleSocialClick('GitHub')}
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Github size={20} />
              </button>
              <button 
                onClick={() => handleSocialClick('LinkedIn')}
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Linkedin size={20} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              <a href="/" className="block text-gray-400 hover:text-purple-400 transition-colors">
                Home
              </a>
              <a href="/courses" className="block text-gray-400 hover:text-purple-400 transition-colors">
                Courses
              </a>
              <a href="/about" className="block text-gray-400 hover:text-purple-400 transition-colors">
                About Us
              </a>
              <a href="/auth" className="block text-gray-400 hover:text-purple-400 transition-colors">
                Login
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <div className="space-y-2">
              <span className="block text-gray-400">Frontend Courses</span>
              <span className="block text-gray-400">Backend Bootcamp</span>
              <span className="block text-gray-400">Full Stack Program</span>
              <span className="block text-gray-400">Internship Programs</span>
              <span className="block text-gray-400">Developer Merch</span>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Stay Updated</h4>
            <p className="text-gray-400 text-sm">
              Latest tutorials, job opportunities aur coding tips!
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email..."
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-full focus:border-purple-400 outline-none transition-colors text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all"
              >
                Subscribe 📨
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="text-red-500 fill-current" size={16} />
              <span>by CodePeCharcha Team</span>
            </div>
            <div className="text-gray-400 text-sm text-center">
              © {currentYear} CodePeCharcha. All rights reserved. 
              <span className="ml-2">Keep coding, keep growing! 🌟</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end space-x-6 mt-4 text-xs text-gray-500">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Support</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}