import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  
  const [signupForm, setSignupForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Dummy authentication logic
    if (loginForm.email && loginForm.password) {
      alert('Login successful! Welcome back to CodePeCharcha! 🎉');
      setLoginForm({ email: '', password: '' });
    } else {
      alert('Please fill all fields! 😅');
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Dummy registration logic
    if (signupForm.firstName && signupForm.lastName && signupForm.email && 
        signupForm.password && signupForm.confirmPassword) {
      if (signupForm.password !== signupForm.confirmPassword) {
        alert('Passwords do not match! 😅');
        return;
      }
      if (!agreeTerms) {
        alert('Please agree to terms & conditions! 📜');
        return;
      }
      alert('Account created successfully! Welcome to CodePeCharcha family! 🎉');
      setSignupForm({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } else {
      alert('Please fill all fields! 😅');
    }
  };

  const handleSocialLogin = (provider) => {
    alert(`${provider} login feature coming soon! 🚀`);
  };

  return (
    <div className="pt-24 min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-md mx-auto">
          <div className="glass-morphism rounded-2xl p-8">
            {/* Auth Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-800 rounded-full p-1 flex">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    isLogin
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    !isLogin
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Sign Up
                </button>
              </div>
            </div>
            
            {/* Login Form */}
            {isLogin ? (
              <div>
                <h2 className="text-2xl font-poppins font-bold text-center mb-6">
                  Welcome Back! 👋
                </h2>
                <p className="text-gray-400 text-center mb-8">Login karo aur coding journey continue karo!</p>
                
                <form onSubmit={handleLoginSubmit} className="space-y-6">
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <Mail size={20} />
                    </div>
                    <input
                      type="email"
                      value={loginForm.email}
                      onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                      className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-full focus:border-purple-400 outline-none transition-all"
                      placeholder="Email address..."
                    />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <Lock size={20} />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={loginForm.password}
                      onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                      className="w-full pl-12 pr-12 py-3 bg-gray-800 border border-gray-600 rounded-full focus:border-purple-400 outline-none transition-all"
                      placeholder="Password..."
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-400">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-purple-400 hover:underline">Forgot password?</a>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                  >
                    Login 🚀
                  </button>
                </form>
                
                <div className="mt-8 text-center">
                  <p className="text-gray-400">Or login with</p>
                  <div className="flex justify-center space-x-4 mt-4">
                    <button
                      onClick={() => handleSocialLogin('Google')}
                      className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <span className="text-white font-bold">G</span>
                    </button>
                    <button
                      onClick={() => handleSocialLogin('Facebook')}
                      className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <span className="text-white font-bold">f</span>
                    </button>
                    <button
                      onClick={() => handleSocialLogin('GitHub')}
                      className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <span className="text-white font-bold">G</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Signup Form */
              <div>
                <h2 className="text-2xl font-poppins font-bold text-center mb-6">
                  Join CodePeCharcha! 🎉
                </h2>
                <p className="text-gray-400 text-center mb-8">Account banao aur coding journey start karo!</p>
                
                <form onSubmit={handleSignupSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <input
                        type="text"
                        value={signupForm.firstName}
                        onChange={(e) => setSignupForm({...signupForm, firstName: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-full focus:border-purple-400 outline-none transition-all"
                        placeholder="First name..."
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        value={signupForm.lastName}
                        onChange={(e) => setSignupForm({...signupForm, lastName: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-full focus:border-purple-400 outline-none transition-all"
                        placeholder="Last name..."
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <Mail size={20} />
                    </div>
                    <input
                      type="email"
                      value={signupForm.email}
                      onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
                      className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-full focus:border-purple-400 outline-none transition-all"
                      placeholder="Email address..."
                    />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <Lock size={20} />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={signupForm.password}
                      onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
                      className="w-full pl-12 pr-12 py-3 bg-gray-800 border border-gray-600 rounded-full focus:border-purple-400 outline-none transition-all"
                      placeholder="Password..."
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <Lock size={20} />
                    </div>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={signupForm.confirmPassword}
                      onChange={(e) => setSignupForm({...signupForm, confirmPassword: e.target.value})}
                      className="w-full pl-12 pr-12 py-3 bg-gray-800 border border-gray-600 rounded-full focus:border-purple-400 outline-none transition-all"
                      placeholder="Confirm password..."
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="mt-1 mr-3"
                    />
                    <span className="text-sm text-gray-400">
                      I agree to the <a href="#" className="text-purple-400 hover:underline">Terms & Conditions</a> 
                      and <a href="#" className="text-purple-400 hover:underline">Privacy Policy</a>
                    </span>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                  >
                    Create Account 🎯
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
