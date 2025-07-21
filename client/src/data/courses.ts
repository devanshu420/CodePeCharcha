export interface Course {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  price: string;
  duration: string;
  category: 'courses' | 'internship' | 'merch';
  emoji: string;
  image: string;
  badgeColor: string;
  features: string[];
}

export const courses: Course[] = [
  {
    id: 'frontend-mastery',
    title: 'Frontend Mastery',
    description: 'HTML, CSS, JavaScript se React tak - complete frontend ka journey!',
    fullDescription: 'Comprehensive frontend development course covering modern web technologies. Start from basics of HTML, CSS, and JavaScript, then move to advanced concepts like React, state management, and responsive design. Perfect for beginners and intermediate developers.',
    price: '₹4,999',
    duration: '3 months',
    category: 'courses',
    emoji: '💻',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
    badgeColor: 'bg-purple-500/20 text-purple-300',
    features: [
      'Lifetime access to content',
      'Live doubt sessions',
      'Certificate of completion',
      'Real-world projects',
      'Job placement assistance'
    ]
  },
  {
    id: 'backend-bootcamp',
    title: 'Backend Bootcamp',
    description: 'Node.js, Express, MongoDB - server side development sikho!',
    fullDescription: 'Master backend development with Node.js, Express.js, and MongoDB. Learn to build scalable APIs, handle authentication, work with databases, and deploy applications to production.',
    price: '₹5,999',
    duration: '4 months',
    category: 'courses',
    emoji: '⚙️',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
    badgeColor: 'bg-blue-500/20 text-blue-300',
    features: [
      'Lifetime access to content',
      'Live doubt sessions',
      'Certificate of completion',
      'API development projects',
      'Cloud deployment training'
    ]
  },
  {
    id: 'fullstack-pro',
    title: 'Full Stack Pro',
    description: 'Frontend + Backend + Database - complete developer bano!',
    fullDescription: 'Complete full-stack development course combining frontend and backend technologies. Build end-to-end applications using React, Node.js, Express, and MongoDB.',
    price: '₹8,999',
    duration: '6 months',
    category: 'courses',
    emoji: '🚀',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
    badgeColor: 'bg-green-500/20 text-green-300',
    features: [
      'Lifetime access to content',
      'Live doubt sessions',
      'Certificate of completion',
      'Full-stack projects',
      'Industry mentorship',
      'Job guarantee program'
    ]
  },
  {
    id: 'webdev-internship',
    title: 'Web Dev Internship',
    description: 'Real projects pe kaam karo aur industry experience lo!',
    fullDescription: 'Get hands-on experience with real-world projects. Work with experienced developers, contribute to live applications, and build your portfolio while earning.',
    price: '₹2,999',
    duration: '2 months',
    category: 'internship',
    emoji: '☕',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
    badgeColor: 'bg-orange-500/20 text-orange-300',
    features: [
      'Real project experience',
      'Industry mentorship',
      'Certificate of internship',
      'Portfolio building',
      'Networking opportunities'
    ]
  },
  {
    id: 'mobile-internship',
    title: 'Mobile App Internship',
    description: 'React Native aur Flutter mein apps banao!',
    fullDescription: 'Learn mobile app development with React Native and Flutter. Build cross-platform mobile applications and gain experience in app store deployment.',
    price: '₹3,499',
    duration: '3 months',
    category: 'internship',
    emoji: '📱',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
    badgeColor: 'bg-pink-500/20 text-pink-300',
    features: [
      'Mobile app development',
      'Cross-platform experience',
      'App store deployment',
      'Industry mentorship',
      'Portfolio apps'
    ]
  },
  {
    id: 'codepecharcha-tshirt',
    title: 'CodePeCharcha T-Shirt',
    description: 'Premium quality tee with quirky coding quotes!',
    fullDescription: 'Show your love for coding with our premium quality t-shirts featuring quirky Hinglish coding quotes. Made with 100% cotton for maximum comfort.',
    price: '₹599',
    duration: 'All sizes',
    category: 'merch',
    emoji: '👕',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
    badgeColor: 'bg-cyan-500/20 text-cyan-300',
    features: [
      '100% cotton material',
      'Quirky Hinglish quotes',
      'Available in all sizes',
      'Premium quality print',
      'Fast shipping'
    ]
  }
];
