// ─── Navigation ───────────────────────────────────────────────────────────────
export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
export const stats = [
  { value: '100K+', label: 'Customers we take care of' },
  { value: '4900+', label: '5 Star Reviews' },
  { value: '99.9%', label: 'Uptime guaranteed' },
  { value: '24/7', label: 'Customer Support' },
];

// ─── Features ─────────────────────────────────────────────────────────────────
export const features = [
  {
    id: 1,
    icon: '⚡',
    title: 'Quick Pay',
    desc: 'Online financial exchanges for currency. We guide and support you along your journey of loss, giving you the tools to navigate.',
  },
  {
    id: 2,
    icon: '📊',
    title: 'Have Other Insights',
    desc: 'We guide and support you along your journey of loss, giving you the tools to navigate the complexities.',
  },
  {
    id: 3,
    icon: '💳',
    title: 'Controlled Bills',
    desc: 'We guide and support you along your journey of loss, giving you the tools to navigate the complexities.',
  },
  {
    id: 4,
    icon: '🔒',
    title: 'Secure Transactions',
    desc: 'Bank-level encryption protects all your data and financial transactions with multi-layer security.',
  },
  {
    id: 5,
    icon: '📱',
    title: 'Mobile Ready',
    desc: 'Consistent quality and experience across all platforms and devices, wherever you are.',
  },
  {
    id: 6,
    icon: '🤝',
    title: 'Team Collaboration',
    desc: 'Work together seamlessly with intuitive tools designed for modern distributed teams.',
  },
];

// ─── Pricing ──────────────────────────────────────────────────────────────────
export const pricingPlans = [
  {
    id: 1,
    name: 'Starter',
    price: { monthly: 5, yearly: 50 },
    description: 'Perfect for individuals and small projects getting started.',
    features: [
      '3 Social Media Accounts',
      'Free Platform Access',
      '24/7 Customer Support',
      'Basic Analytics',
      '1 Team Member',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    id: 2,
    name: 'Basic',
    price: { monthly: 30, yearly: 300 },
    description: 'Great for growing teams who need more power and flexibility.',
    features: [
      '5 Social Media Accounts',
      'Free Platform Access',
      '24/7 Customer Support',
      'Advanced Analytics',
      '5 Team Members',
      'Priority Support',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    id: 3,
    name: 'Premium',
    price: { monthly: 25, yearly: 250 },
    description: 'Built for professionals who demand the best experience.',
    features: [
      '10 Social Media Accounts',
      'Free Platform Access',
      '24/7 Customer Support',
      'Full Analytics Suite',
      'Unlimited Team Members',
      'Priority Support',
      'Custom Integrations',
    ],
    cta: 'Get Started',
    highlighted: true,
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    name: 'Martin Jonas',
    role: 'CEO, TechStart',
    location: 'USA',
    rating: 5,
    avatar: 'https://i.pravatar.cc/80?img=11',
    quote:
      "Very solid platform, 8.3 out of 10. We've had 9,000 agents across our organization adopt Zamba within just two months. It's intuitive, functional, and easy-to-setup.",
  },
  {
    id: 2,
    name: 'AJOY Sarker',
    role: 'Founder',
    location: 'Bangladesh',
    avatar: 'https://i.pravatar.cc/80?img=32',
    rating: 5,
    quote:
      "It's intuitive, functional, easy-to-setup and presents content in an interactive way. Our team productivity increased by 40% in the first month.",
  },
  {
    id: 3,
    name: 'Sarah Mitchell',
    role: 'Product Manager',
    location: 'UK',
    avatar: 'https://i.pravatar.cc/80?img=47',
    rating: 5,
    quote:
      'Zamba transformed how we manage our social media presence. The analytics are incredibly detailed and the support team is always responsive.',
  },
  {
    id: 4,
    name: 'Carlos Rivera',
    role: 'Marketing Director',
    location: 'Spain',
    avatar: 'https://i.pravatar.cc/80?img=55',
    rating: 5,
    quote:
      'The best SaaS platform we have used in years. Clean design, powerful features, and an onboarding experience that actually makes sense.',
  },
];

// ─── Partners / Brands ────────────────────────────────────────────────────────
export const brands = [
  { id: 1, name: 'Airbnb', logo: '🏠' },
  { id: 2, name: 'Spotify', logo: '🎵' },
  { id: 3, name: 'Slack', logo: '💬' },
  { id: 4, name: 'Dropbox', logo: '📦' },
  { id: 5, name: 'HubSpot', logo: '🔶' },
  { id: 6, name: 'Notion', logo: '📝' },
];

// ─── Blog Posts ───────────────────────────────────────────────────────────────
export const blogPosts = [
  {
    id: 1,
    title: 'How to Build a Scalable SaaS Product from Scratch',
    excerpt:
      'Learn the fundamentals of building a scalable SaaS product, from architecture decisions to go-to-market strategy.',
    category: 'Product',
    date: 'Dec 12, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format',
    author: { name: 'Sarah Mitchell', avatar: 'https://i.pravatar.cc/40?img=47' },
    featured: true,
  },
  {
    id: 2,
    title: 'The Future of Remote Team Collaboration',
    excerpt:
      'Exploring how modern tools and practices are reshaping the way distributed teams work together effectively.',
    category: 'Team',
    date: 'Dec 8, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format',
    author: { name: 'Martin Jonas', avatar: 'https://i.pravatar.cc/40?img=11' },
    featured: false,
  },
  {
    id: 3,
    title: 'Design Systems: Why Consistency Matters',
    excerpt:
      'A deep dive into why design systems are crucial for maintaining consistency at scale across products.',
    category: 'Design',
    date: 'Nov 30, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&auto=format',
    author: { name: 'AJOY Sarker', avatar: 'https://i.pravatar.cc/40?img=32' },
    featured: false,
  },
  {
    id: 4,
    title: 'Maximizing ROI with Automated Marketing',
    excerpt:
      'How automation tools are helping businesses achieve better results with less manual effort in their marketing.',
    category: 'Marketing',
    date: 'Nov 22, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format',
    author: { name: 'Carlos Rivera', avatar: 'https://i.pravatar.cc/40?img=55' },
    featured: false,
  },
];

// ─── Team Members ─────────────────────────────────────────────────────────────
export const teamMembers = [
  {
    id: 1,
    name: 'Alexandra Chen',
    role: 'CEO & Co-Founder',
    avatar: 'https://i.pravatar.cc/120?img=25',
    social: { twitter: '#', linkedin: '#' },
  },
  {
    id: 2,
    name: 'David Kumar',
    role: 'CTO & Co-Founder',
    avatar: 'https://i.pravatar.cc/120?img=8',
    social: { twitter: '#', linkedin: '#' },
  },
  {
    id: 3,
    name: 'Priya Nair',
    role: 'Head of Product',
    avatar: 'https://i.pravatar.cc/120?img=49',
    social: { twitter: '#', linkedin: '#' },
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'Lead Designer',
    avatar: 'https://i.pravatar.cc/120?img=15',
    social: { twitter: '#', linkedin: '#' },
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const faqs = [
  {
    q: 'Is there a free trial available?',
    a: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required.',
  },
  {
    q: 'Can I change my plan later?',
    a: 'Absolutely. You can upgrade, downgrade, or cancel your plan at any time from your account settings.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards (Visa, Mastercard, AMEX), PayPal, and bank transfers for annual plans.',
  },
  {
    q: 'How secure is my data?',
    a: 'Your data is protected with 256-bit SSL encryption and stored in SOC 2 Type II certified data centers.',
  },
];
