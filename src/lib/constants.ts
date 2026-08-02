// Cook Dialer Brand Constants — Single Source of Truth from App Codebase

export const BRAND = {
  name: 'Cook Dialer',
  company: 'CookDyl',
  tagline: 'Your Kitchen, Our Cook',
  headline: 'Chef-Quality Home Food Prepared In Your Kitchen',
  description: 'Cook Dialer pairs you with verified, trained home cooks in Greater Noida. Enjoy fresh, customized daily meals tailored to your diet.',
} as const;

export const VIDEO_BACKGROUNDS = {
  hero: '/assets/kitchen-4k.mp4',
  heroFallback: '/assets/kitchen-bg.mp4',
  cta: '/assets/kitchen-bg.mp4',
} as const;

export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.cookdialer.app&hl=en_IN';

export const CONTACT = {
  email: { value: 'CookDyl.team@gmail.com', link: 'mailto:CookDyl.team@gmail.com' },
  phone: { value: '+91 8287794390', link: 'tel:+918287794390' },
  whatsapp: { value: '+91 8287794390', link: 'https://wa.me/918287794390?text=Hi%20Cook%20Dialer,%20I%20want%20to%20book%20a%20cook!' },
  playStore: PLAY_STORE_URL,
  privacyPolicy: 'https://sites.google.com/view/cook-dialler/home',
  termsOfService: 'https://cookdyl.com/terms-of-service',
} as const;

export const SOCIAL = [
  { platform: 'Facebook', link: 'https://facebook.com/cookdyl', icon: '📘' },
  { platform: 'Instagram', link: 'https://instagram.com/cookdyl', icon: '📸' },
  { platform: 'Twitter', link: 'https://twitter.com/cookdyl', icon: '🐦' },
] as const;

export const NAV_LINKS = [
  { id: 'how-it-works', label: 'How It Works', href: '#how-it-works' },
  { id: 'features', label: 'Why Cook Dialer', href: '#features' },
  { id: 'trust', label: 'Trust & Safety', href: '#trust' },
] as const;

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Customize Your Request',
    description: 'Select your preferred meal plan, number of people, dietary choices, and morning/evening visit timings.',
    icon: '📝',
    badge: 'Step 1'
  },
  {
    step: '02',
    title: 'Verified Cook Match',
    description: 'Our system instantly pairs you with a background-checked cook operating near your area in Greater Noida.',
    icon: '👨‍🍳',
    badge: 'Step 2'
  },
  {
    step: '03',
    title: 'Fresh Home Cooking',
    description: 'Your cook arrives on schedule to prepare fresh, delicious meals using your own kitchen setup and ingredients.',
    icon: '🍳',
    badge: 'Step 3'
  },
  {
    step: '04',
    title: 'Hassle-Free Postpaid Pay',
    description: 'Enjoy month-long culinary peace of mind with 48-hour escrow protection and single monthly billing.',
    icon: '✨',
    badge: 'Step 4'
  },
] as const;

export const FEATURES = [
  {
    id: 'vetting',
    title: '100% Background-Vetted Cooks',
    description: 'Every cook undergoes personal identity check, culinary skill evaluation, and hygiene standards training.',
    icon: '🛡️',
    tag: 'Safety First'
  },
  {
    id: 'escrow',
    title: '48-Hour Escrow Protection',
    description: 'Your monthly payment is held safely on platform for 48h before release to cook, guaranteeing satisfaction.',
    icon: '💳',
    tag: 'Zero Risk'
  },
  {
    id: 'replacement',
    title: '48h Free Cook Replacement',
    description: 'Not 100% satisfied? Request a cook swap with a single tap — we find a replacement within 48 hours.',
    icon: '🔄',
    tag: 'Flexibility'
  },
  {
    id: 'pricing-transparency',
    title: 'Transparent Per-Person Rates',
    description: 'Zero hidden agency fees or surprise charges. Simple monthly tiered pricing displayed upfront.',
    icon: '💎',
    tag: 'Best Value'
  },
  {
    id: 'custom-menu',
    title: 'Veg & Non-Veg Customization',
    description: 'Cooks adapt recipes strictly according to your taste, spice levels, and dietary preferences.',
    icon: '🥗',
    tag: 'Your Kitchen'
  },
  {
    id: 'dedicated-support',
    title: 'Instant WhatsApp Support',
    description: 'Dedicated team available 7 days a week to handle schedule pauses, menu changes, or support inquiries.',
    icon: '💬',
    tag: '7 Days Support'
  },
] as const;

export const PRICING_DATA = {
  bachelors: [
    { people: 1, pricePerPerson: 2700, totalMonthly: 2700, originalPrice: 3375 },
    { people: 2, pricePerPerson: 1750, totalMonthly: 3500, originalPrice: 2188 },
    { people: 3, pricePerPerson: 1350, totalMonthly: 4050, originalPrice: 1688 },
    { people: 4, pricePerPerson: 1250, totalMonthly: 5000, originalPrice: 1563 },
    { people: 5, pricePerPerson: 1200, totalMonthly: 6000, originalPrice: 1500 },
  ],
  family: [
    { people: 1, pricePerPerson: 2800, totalMonthly: 2800, originalPrice: 3500 },
    { people: 2, pricePerPerson: 1800, totalMonthly: 3600, originalPrice: 2250 },
    { people: 3, pricePerPerson: 1400, totalMonthly: 4200, originalPrice: 1750 },
    { people: 4, pricePerPerson: 1300, totalMonthly: 5200, originalPrice: 1625 },
    { people: 5, pricePerPerson: 1250, totalMonthly: 6250, originalPrice: 1563 },
  ],
} as const;

export const SERVICEABLE_AREAS = [
  'Greater Noida West',
  'Noida Extension',
  'Gaur City 1',
  'Gaur City 2',
  'Sector 4',
  'Sector 16',
  'Alpha 1',
  'Alpha 2',
  'Beta 1',
  'Beta 2',
  'Gamma 1',
  'Delta 1',
  'Mahagun Moderne',
  'Cherry County',
  'Apex Golf Avenue',
] as const;

export const APP_SCREENS = [
  { 
    id: 'home', 
    label: 'App Dashboard', 
    tagline: 'Live Service Status', 
    description: 'Track assigned cook info, arrival timing, active meal plan details, and emergency support button.' 
  },
  { 
    id: 'request', 
    label: 'Request Form', 
    tagline: 'Easy 3-Step Booking', 
    description: 'Choose meal type (Veg / Non-Veg), number of people, preferred morning/evening visit times, and special instructions.' 
  },
  { 
    id: 'my-cooks', 
    label: 'My Cooks & Ratings', 
    tagline: 'Cook Management', 
    description: 'Direct 1-click cook calling, 5-star review rating, service pause requests, or 48-hour cook replacement.' 
  },
  { 
    id: 'payments', 
    label: 'Escrow & Billing', 
    tagline: 'Secure Monthly Payments', 
    description: 'Automated 1st-of-the-month billing via Razorpay UPI & QR. Complete escrow history and receipt breakdown.' 
  },
] as const;

export const TESTIMONIALS = [
  {
    quote: 'Cook Dialer saved my student life in Greater Noida! Fresh rotis and sabzi every evening after long classes.',
    author: 'Ashvik',
    role: 'Student, Sector 4',
    rating: 5,
    tag: 'Bachelors Plan'
  },
  {
    quote: 'Finally a reliable home cook service in Gaur City 2. Transparent billing and our cook Aarti Ji is punctual every day.',
    author: 'Shivangi',
    role: 'IT Professional',
    rating: 5,
    tag: 'Family Plan'
  },
  {
    quote: 'Splitting a 4-person cook plan with flatmates comes to just ₹1,250/month each. Way cheaper and healthier than Zomato!',
    author: 'Abhijeet',
    role: 'Software Engineer',
    rating: 5,
    tag: 'Shared Flat'
  },
] as const;
