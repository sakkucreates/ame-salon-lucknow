export interface ServiceCategory {
  id: string;
  name: string;
  shortDesc: string;
  image: string;
  items: string[];
}

export interface ReviewItem {
  id: string;
  reviewer: string;
  rating: number;
  comment: string;
  tag?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'bridal' | 'makeup' | 'hair' | 'nails' | 'salon';
  categoryLabel: string;
  image: string;
  caption: string;
}

export const BUSINESS_INFO = {
  name: 'AME Unisex Salon & Makeup Studio | Bridal Makeup Artist in Lucknow',
  shortName: 'AME Unisex Salon & Makeup Studio',
  brandWordmark: 'âME',
  subBrandWordmark: 'ANANYA MAKE-UP EXPRESSIONS',
  tagline: 'Beauty, Styled Your Way.',
  heroSub: 'Bridal makeup, hair, nails and complete beauty services in Aliganj, Lucknow.',
  founder: 'Ms. Ananya Mishra',
  founderRole: 'Founder & Professional Makeup Artist',
  address: '1st Floor, D-78, Sector Q Rd, Sector P, Sector-P, Sector B, Aliganj, Lucknow, Uttar Pradesh 226024, India',
  phoneFormatted: '+91 95111 19484',
  phoneRaw: '+919511119484',
  telLink: 'tel:+919511119484',
  whatsappUrl: 'https://wa.me/+919511119484',
  instagramUrl: 'https://www.instagram.com/ame_salonmakeup_studio',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=AME%20Unisex%20Salon%20%26%20Makeup%20Studio%20%7C%20Bridal%20Makeup%20Artist%20in%20Lucknow&query_place_id=ChIJz6OCK71XmTkRfAJtVTv8dIA',
  googleRating: 4.9,
  totalReviews: 114,
  fiveStarReviews: 110,
  openingHours: 'Every day: 10:00 AM – 9:00 PM',
  dailyHours: [
    { day: 'Monday', hours: '10 AM to 9 PM' },
    { day: 'Tuesday', hours: '10 AM to 9 PM' },
    { day: 'Wednesday', hours: '10 AM to 9 PM' },
    { day: 'Thursday', hours: '10 AM to 9 PM' },
    { day: 'Friday', hours: '10 AM to 9 PM' },
    { day: 'Saturday', hours: '10 AM to 9 PM' },
    { day: 'Sunday', hours: '10 AM to 9 PM' },
  ],
  pillars: [
    {
      title: 'Personalized Service',
      desc: 'Customized beauty transformations tailored specifically to your unique features and style preferences.',
    },
    {
      title: 'Professional Team',
      desc: 'Founded by Ms. Ananya Mishra, bringing skilled precision and meticulous artistry to every client.',
    },
    {
      title: 'Hygiene & Cleanliness',
      desc: 'Immaculate, sanitized studio environment with single-use tools and strict sanitation standards.',
    },
    {
      title: 'Premium Products',
      desc: 'Using high-end professional beauty products for flawless finish and skin-friendly performance.',
    },
    {
      title: 'Bridal Expertise',
      desc: 'Specialized HD & Airbrush bridal makeup designed for enduring elegance on your special day.',
    },
    {
      title: 'Complete Beauty & Grooming',
      desc: 'Full-service unisex salon covering hair styling, skin treatments, nail art, and men grooming.',
    },
  ],
};

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: 'bridal-makeup',
    name: 'Bridal Makeup',
    shortDesc: 'Signature HD & Airbrush bridal makeovers tailored for your wedding celebrations.',
    image: '/images/image031.jpg',
    items: [
      'HD Bridal Makeup',
      'Airbrush Makeup',
      'Customized Bridal Looks',
      'Bridal Hairstyling',
      'Draping & Complete Bridal Styling',
      'Pre-Bridal Grooming',
    ],
  },
  {
    id: 'makeup-makeovers',
    name: 'Makeup & Makeovers',
    shortDesc: 'Radiant makeovers for engagements, receptions, parties, and festive occasions.',
    image: '/images/image051.jpg',
    items: [
      'Party Makeup',
      'Engagement Makeup',
      'Reception Makeup',
      'Festive Makeup',
      'Natural / Elegant Makeup Looks',
    ],
  },
  {
    id: 'hair-services',
    name: 'Hair Care & Styling',
    shortDesc: 'Precision haircuts, luxury hair spas, vibrant coloring, and restorative scalp care.',
    image: '/images/image025.jpg',
    items: [
      'Haircut',
      'Hair Styling',
      'Hair Color',
      'Highlights',
      'Keratin Treatment',
      'Hair Spa',
      'Scalp Care',
      'Hair Repair Treatments',
    ],
  },
  {
    id: 'skin-facials',
    name: 'Skin & Facials',
    shortDesc: 'Deep purifying facials, skin brightening, and rejuvenating face cleanups.',
    image: '/images/image059.jpg',
    items: ['Facials', 'Skin Brightening', 'Face Cleanup', 'D-Tan Treatments'],
  },
  {
    id: 'nail-studio',
    name: 'Nail Studio',
    shortDesc: 'Luxury manicure, pedicure, custom gel nail art, and sculpted nail extensions.',
    image: '/images/image011.jpg',
    items: ['Manicure', 'Pedicure', 'Nail Art', 'Nail Extensions'],
  },
  {
    id: 'beauty-grooming',
    name: 'Beauty & Men\'s Grooming',
    shortDesc: 'Essential beauty waxing, threading, eyebrow shaping, and sharp beard styling for men.',
    image: '/images/image007.jpg',
    items: [
      'Waxing',
      'Threading',
      'Eyebrow Shaping',
      'Upper Lips',
      'Men\'s Grooming',
      'Beard Trimming',
      'Beard Styling',
    ],
  },
  {
    id: 'draping',
    name: 'Ethnic Draping',
    shortDesc: 'Flawless saree and dupatta draping crafted for graceful movement.',
    image: '/images/image023.jpg',
    items: ['Saree Draping', 'Dupatta Draping'],
  },
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    reviewer: 'Isha Mishra',
    rating: 5,
    comment:
      'Had a really lovely experience with their engagement makeup and pre-bridal services. ❤️ The makeup looked beautiful, natural, and exactly how I wanted. The staff was so friendly and made me feel comfortable throughout. Loved the overall service and would definitely recommend them for bridal and pre bridal services!',
    tag: 'Bridal & Pre-Bridal',
  },
  {
    id: 'rev-2',
    reviewer: 'Ajita Tripathi',
    rating: 5,
    comment: 'Excellent service , very professional staff',
    tag: 'Professional Service',
  },
  {
    id: 'rev-3',
    reviewer: 'Shashwat Kunth',
    rating: 5,
    comment:
      'Had an amazing experience at AME Salon and I genuinely can\'t recommend it enough. Booked in for a haircut and beard trim, and the attention to detail was on another level...',
    tag: 'Men\'s Grooming & Haircut',
  },
  {
    id: 'rev-4',
    reviewer: 'Nidhi Tiwari',
    rating: 5,
    comment:
      'Very nice service with very professional staff...Best in town for bridal makeovers... really enjoyed their service.. Really happy and satisfied',
    tag: 'Bridal Makeovers',
  },
  {
    id: 'rev-5',
    reviewer: 'Ashay Saxena',
    rating: 5,
    comment:
      'AME Unisex Salon delivers top-notch services with great attention to detail. The quality, hygiene, and professionalism are truly impressive. Definitely my go-to salon now!',
    tag: 'Quality & Hygiene',
  },
  {
    id: 'rev-6',
    reviewer: 'Ridhima Mehrotra',
    rating: 5,
    comment:
      'Excellent service, friendly staff, and great results. Clean salon with a relaxing atmosphere. Highly recommended!',
    tag: 'Relaxing Ambience',
  },
  {
    id: 'rev-7',
    reviewer: 'Khushi Singh',
    rating: 5,
    comment:
      'Amazing experience! Manicure & pedicure dono hi super relaxing the. Studio ka ambience bhi bahut clean and hygienic tha',
    tag: 'Nails & Pedicure',
  },
  {
    id: 'rev-8',
    reviewer: 'Adeeba Khan',
    rating: 5,
    comment:
      'AME Salon did a beautiful job with my bridal makeup, giving me a soft and glowing finish that looked natural.',
    tag: 'Natural Bridal Glow',
  },
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'HD Bridal Makeup & Royal Styling',
    category: 'bridal',
    categoryLabel: 'Bridal',
    image: '/images/image031.jpg',
    caption: 'Classic Lucknow bride featuring natural glowing HD foundation and elegant draping.',
  },
  {
    id: 'g-2',
    title: 'AME Signature Wall & Studio Ambience',
    category: 'salon',
    categoryLabel: 'Studio',
    image: '/images/image123.jpg',
    caption: 'Our signature floral arch wall and gold wordmark at AME Makeup Studio in Aliganj.',
  },
  {
    id: 'g-3',
    title: 'Red Bow & Snowflake Art Gel Nails',
    category: 'nails',
    categoryLabel: 'Nails',
    image: '/images/image011.jpg',
    caption: 'Custom holiday red cat-eye gel polish with hand-painted snowflake & bow detailing.',
  },
  {
    id: 'g-4',
    title: 'Luxury Hair Spa & Pedicure Lounge',
    category: 'salon',
    categoryLabel: 'Studio',
    image: '/images/image059.jpg',
    caption: 'Reclining leather spa chairs and relaxing foot bath basins for ultimate care.',
  },
  {
    id: 'g-5',
    title: 'Shimmering Engagement Makeover',
    category: 'bridal',
    categoryLabel: 'Bridal',
    image: '/images/image023.jpg',
    caption: 'Soft glam engagement makeup paired with customized lehenga draping.',
  },
  {
    id: 'g-6',
    title: 'Sunflower French Extension Gel Nails',
    category: 'nails',
    categoryLabel: 'Nails',
    image: '/images/image127.jpg',
    caption: 'Soft pink French tip acrylic extensions with 3D sculpted sunflower accent.',
  },
  {
    id: 'g-7',
    title: 'Modern Hair Styling & Vanity Station',
    category: 'hair',
    categoryLabel: 'Hair',
    image: '/images/image025.jpg',
    caption: 'Illuminated arch vanity mirrors and professional hair care workstations.',
  },
  {
    id: 'g-8',
    title: 'Teal Lehenga Party Makeover Look',
    category: 'makeup',
    categoryLabel: 'Makeup',
    image: '/images/image051.jpg',
    caption: 'Radiant festive party makeover crafted for evening celebrations.',
  },
  {
    id: 'g-9',
    title: 'Complete Client Makeover Showcase',
    category: 'makeup',
    categoryLabel: 'Makeup',
    image: '/images/image087.jpg',
    caption: 'Flawless foundation finish and textured soft curls styled by AME studio team.',
  },
  {
    id: 'g-10',
    title: 'Reception & Reception Lounge',
    category: 'salon',
    categoryLabel: 'Studio',
    image: '/images/image006.jpg',
    caption: 'Welcoming reception counter with crystal chandelier and product display wall.',
  },
  {
    id: 'g-11',
    title: 'Bridal Hair & Makeup Close-Up Detail',
    category: 'bridal',
    categoryLabel: 'Bridal',
    image: '/images/image004.jpg',
    caption: 'Subtle eye makeup emphasis and refined skin finish for daytime wedding ceremonies.',
  },
  {
    id: 'g-12',
    title: 'Matte Grey & Black Polka Nail Art',
    category: 'nails',
    categoryLabel: 'Nails',
    image: '/images/image039.jpg',
    caption: 'Modern matte grey coffin nails decorated with delicate black heart accents.',
  },
  {
    id: 'g-13',
    title: 'Main Salon Floor & Styling Stations',
    category: 'hair',
    categoryLabel: 'Hair',
    image: '/images/image007.jpg',
    caption: 'Spacious unisex grooming section equipped with warm ambient LED ceiling lighting.',
  },
  {
    id: 'g-14',
    title: 'AME Salon Exterior Entrance Sign',
    category: 'salon',
    categoryLabel: 'Studio',
    image: '/images/image077.jpg',
    caption: 'Located on 1st Floor, D-78 Sector P, Sector B, Aliganj Lucknow.',
  },
];
