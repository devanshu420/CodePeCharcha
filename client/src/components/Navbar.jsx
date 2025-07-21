import { useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Code } from "lucide-react";

export default function Navbar({ showAlert }) {
  const [location, setLocation] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/courses", label: "Courses" },
    { path: "/about", label: "About" },
    { path: "/auth", label: "Login", isButton: true }
  ];

  const handleNavClick = (path) => {
    setLocation(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-morphism">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavClick("/")}>
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Code className="text-white text-lg" />
            </div>
            <h1 className="text-2xl font-poppins font-bold gradient-text">CodePeCharcha</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`${
                  item.isButton
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                    : location === item.path
                    ? "text-purple-400"
                    : "text-white hover:text-purple-400"
                } transition-colors duration-300`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`${
                    item.isButton
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 rounded-full text-center"
                      : location === item.path
                      ? "text-purple-400"
                      : "text-white hover:text-purple-400"
                  } transition-colors duration-300 text-left`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
