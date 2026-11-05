import { SkinPhotoItem, RepairService } from '../types';

export const SHOP_INFO = {
  name: 'Gadaliya Mobile',
  brandName: 'GadaliyaMobile',
  owner: 'Prakash Gadaliya',
  tagline: 'Mobile Phone Accessories, Lamination & Repairing Shop • Visnagar',
  phoneRaw: '9173309034',
  phoneFormatted: '+91 91733 09034',
  phoneDial: '+919173309034',
  prakashPhoneRaw: '9173309034',
  prakashPhoneFormatted: '+91 91733 09034',
  prakashPhoneDial: '+919173309034',
  farhanName: 'Farhan',
  farhanPhoneRaw: '6354085390',
  farhanPhoneFormatted: '+91 63540 85390',
  farhanPhoneDial: '+916354085390',
  instagramHandle: '@gadaliya_mobile_skin',
  instagramUrl: 'https://instagram.com/gadaliya_mobile_skin',
  shopNumber: 'Shop No. 12, Main Market, Visnagar',
  address: 'Gujarat - 384315 • Run by Prakash Gadaliya',
  fullAddress: 'Gate No-2 Ganj Bazar, Opp.Nagori Market, Visnagar, Gujarat, 384315',
  city: 'Visnagar, Gujarat',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Gadaliya+Mobile+Shop+No+12+Main+Market+Visnagar+Gujarat+384315',
  hoursWeekday: '9:30 AM – 8:30 PM',
  hoursSunday: '10:00 AM – 6:00 PM',
  rating: '4.9 / 5',
  reviewCount: '120+ Google reviews',
  skinBasePrice: 150,
  skinShippingCharge: 50,
  walkinNotice: 'Walk-ins welcome anytime!',
  whatsappUrl: (msg?: string) => {
    const text = msg
      ? encodeURIComponent(msg)
      : encodeURIComponent('Hello Prakash bhai, I want to inquire about mobile skins, lamination, and repairing at Gadaliya Mobile Visnagar.');
    return `https://api.whatsapp.com/send?phone=919173309034&text=${text}`;
  },
  farhanWhatsappUrl: (msg?: string) => {
    const text = msg
      ? encodeURIComponent(msg)
      : encodeURIComponent('Hello Farhan bhai, I want to inquire about mobile skins, lamination, and repairing at Gadaliya Mobile Visnagar.');
    return `https://api.whatsapp.com/send?phone=916354085390&text=${text}`;
  },
};

export interface ShopOffering {
  id: string;
  title: string;
  titleGu?: string;
  category: string;
  descriptionEn: string;
  descriptionGu: string;
  badge?: string;
  iconName: string;
  imageUrl: string;
}

// 5 core services (Online Services & Recharge removed as requested)
export const SHOP_OFFERINGS: ShopOffering[] = [
  {
    id: 'accessories',
    title: 'Mobile Accessories',
    titleGu: 'મોબાઈલ એક્સેસરીઝ',
    category: 'Accessories',
    badge: 'Latest Collection',
    descriptionEn: 'Wide variety of designer cases, tough covers, 9H tempered glasses, fast chargers, USB-C cables, TWS earphones, and power banks for all smartphone brands.',
    descriptionGu: 'અમારા "Gadaliya Mobile" પર તમને દરેક બ્રાન્ડના મોબાઈલ માટે લેટેસ્ટ અને ટ્રેન્ડી એક્સેસરીઝ મળશે! કવર, સ્ક્રીન પ્રોટેક્ટર, હેડફોન, ચાર્જર, પાવર બેંક - બધું જ અહીં ઉપલબ્ધ છે.',
    iconName: 'Headphones',
    imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'lamination',
    title: 'Mobile Lamination & Skins',
    titleGu: 'મોબાઈલ લેમિનેશન વર્ક',
    category: 'Lamination',
    badge: '₹150 Only',
    descriptionEn: '360° scratch-proof hydrogel lamination, custom devotional, automotive, anime, and 3D textured skins. Laser precision cutting for all models.',
    descriptionGu: 'અમારા ત્યાં તમામ સ્માર્ટફોન માટે માત્ર ₹150 માં પ્રીમિયમ લેમિનેશન સ્કિન ઉપલબ્ધ છે! ઉચ્ચ ગુણવત્તાવાળા મટિરિયલથી તમારા ફોનને સ્ક્રેચથી બચાવો.',
    iconName: 'Shield',
    imageUrl: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'repairing',
    title: 'Mobile Repairing',
    titleGu: 'મોબાઈલ રિપેરિંગ સેવા',
    category: 'Repairing',
    badge: 'Same-Day Service',
    descriptionEn: 'Expert repair for cracked AMOLED/OLED screens, fast battery replacement, loose charging ports, water damage cleaning, and motherboard IC micro-soldering.',
    descriptionGu: 'દરેક બ્રાન્ડના ફોનના ડિસ્પ્લે, બેટરી, ચાર્જિંગ સોકેટ અને મધરબોર્ડ આઈસી રિપેરિંગ. સાચા સ્પેરપાર્ટ્સ અને વોરંટી સાથે ઝડપી સર્વિસ!',
    iconName: 'Wrench',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'tempered-glass',
    title: 'Screen Protectors & Guards',
    titleGu: 'ટેમ્પર્ડ ગ્લાસ અને કેમેરા ગાર્ડ',
    category: 'Protection',
    badge: '9H Hardness',
    descriptionEn: 'Curved UV edge-to-edge tempered glass, matte gaming guards, privacy filters, and sapphire camera lens protector rings.',
    descriptionGu: 'કર્વ્ડ યુવી ગ્લાસ, ગેમિંગ મેટ ગ્લાસ અને કેમેરા પ્રોટેક્ટર રિંગ્સ જે તમારા કેમેરા અને ડિસ્પ્લેને ફૂટવાથી બચાવે છે.',
    iconName: 'Smartphone',
    imageUrl: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'audio-gadgets',
    title: 'Audio Gadgets & Earphones',
    titleGu: 'ઈયરફોન અને સાઉન્ડ ગેજેટ્સ',
    category: 'Accessories',
    badge: 'High Bass & Warranty',
    descriptionEn: 'High-bass wired earphones, wireless Bluetooth neckbands, TWS earbuds with noise cancellation, and portable mini speakers.',
    descriptionGu: 'શ્રેષ્ઠ સાઉન્ડ ક્વોલિટી અને બાસ સાથે બ્રાન્ડેડ હેડફોન, નેકબેન્ડ અને TWS ઇયરબડ્સ વ્યાજબી ભાવે મેળવો.',
    iconName: 'Speaker',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80',
  },
];

// Real Shop Skin Photos - All at ₹150 (+₹50 shipping if ordered online)
export const PHOTO_SKINS: SkinPhotoItem[] = [
  {
    id: 'ktm-rider',
    name: 'KTM Rider (ktm_rider)',
    nameGu: 'કેટીએમ રાઇડર સ્કિન',
    category: 'Superbikes & Moto',
    imageUrl: '/assets/aistudio/WhatsApp_Image_2026-11-03_at_5.55.53_AM_8d3ae3a4.jpeg',
    description: 'Real client photo: Intense night superbike KTM racer with glowing neon orange wheels on premium phone wrap.',
    badge: 'Popular Rider',
    price: 150,
    shippingFee: 50,
  },
  {
    id: 'royal-horse',
    name: 'Royal Horse',
    nameGu: 'રોયલ મારવાડી અશ્વ સ્કિન',
    category: 'Heritage & Traditional',
    imageUrl: '/assets/aistudio/WhatsApp_Image_2026-11-03_at_5.56.12_AM_1acb2b2d.jpeg',
    description: 'Real client photo: Majestic black Marwari stallion with royal Indian embroidery saddle on pearl white phone wrap.',
    badge: 'Royal Heritage',
    price: 150,
    shippingFee: 50,
  },
  {
    id: 'porche',
    name: 'Porsche (porche)',
    nameGu: 'પોર્શ જીટી૩ રેસિંગ સ્કિન',
    category: 'Supercars & Racing',
    imageUrl: '/assets/aistudio/WhatsApp_Image_2026-11-03_at_5.56.26_AM_951a549f.jpeg',
    description: 'Real client photo: Technical Porsche 911 GT3 blueprint schematic wrap with white & racing emerald gradient finish.',
    badge: 'Speed Edition',
    price: 150,
    shippingFee: 50,
  },
  {
    id: 'premium-black',
    name: 'Premium Black',
    nameGu: 'પ્રીમિયમ બ્લેક હનીકોમ્બ સ્કિન',
    category: '3D Geometric & Texture',
    imageUrl: '/assets/aistudio/WhatsApp_Image_2026-11-03_at_5.56.33_AM_67111775.jpeg',
    description: 'Real client photo: Tactile stealth matte black 3D hexagonal honeycomb texture wrap with non-slip grip.',
    badge: 'Extreme Grip',
    price: 150,
    shippingFee: 50,
  },
  {
    id: 'premium-rose',
    name: 'Premium Rose (Burgundy)',
    nameGu: 'પ્રીમિયમ રોઝ બર્ગન્ડી સ્કિન',
    category: 'Metallic & Luxury',
    imageUrl: '/assets/aistudio/WhatsApp_Image_2026-11-03_at_5.56.31_AM_12869407.jpeg',
    description: 'Real client photo: Luxurious satin metallic burgundy rose finish wrap with sleek camera ring cutout.',
    badge: 'Luxury Matte',
    price: 150,
    shippingFee: 50,
  },
  {
    id: 'shivay',
    name: 'Shivay (Holy Skin)',
    nameGu: 'શિવાય મહાદેવ ભક્તિ સ્કિન',
    category: 'Holy Skin',
    imageUrl: '/assets/aistudio/WhatsApp_Image_2026-11-03_at_5.56.09_AM_ac3c6e06.jpeg',
    description: 'Real client photo: Divine Lord Shiva Mahadev illustration with Trishul, Crescent Moon, and glowing crimson aura.',
    badge: 'Holy Skin',
    price: 150,
    shippingFee: 50,
  },
  {
    id: 'krishna',
    name: 'Krishna (Holy Skin)',
    nameGu: 'શ્રી કૃષ્ણ બાલ ગોપાલ સ્કિન',
    category: 'Holy Skin',
    imageUrl: '/assets/aistudio/WhatsApp_Image_2026-11-03_at_5.56.04_AM_41fc4a7a.jpeg',
    description: 'Real client photo: Adorable smiling Bal Krishna with peacock feather sketch on brushed champagne gold background.',
    badge: 'Holy Skin',
    price: 150,
    shippingFee: 50,
  },
  {
    id: 'traval',
    name: 'Travel (Traval)',
    nameGu: 'ટ્રાવેલ વાંડરલસ્ટ સ્કિન',
    category: 'Travel & Lifestyle',
    imageUrl: '/assets/aistudio/WhatsApp_Image_2026-11-03_at_5.56.20_AM_a8e09e7a.jpeg',
    description: 'Real client photo: Vintage world map with travel stamps, passport, airplane, and city direction signs on deep twilight phone wrap.',
    badge: 'Wanderlust',
    price: 150,
    shippingFee: 50,
  },
];

export const REPAIR_SERVICES: RepairService[] = [
  {
    id: 'screen-replacement',
    title: 'AMOLED & Display Replacement',
    description: 'Crisp color restoration with original 120Hz refresh rate and responsive touch digitizer.',
    timeEstimate: '30 - 45 mins',
    warranty: '3 Months Warranty',
    startingPrice: 1200,
    iconName: 'Smartphone',
  },
  {
    id: 'battery-replacement',
    title: 'High-Capacity Battery Replacement',
    description: 'Restore all-day endurance with genuine certified battery cells and health calibration.',
    timeEstimate: '20 - 30 mins',
    warranty: '6 Months Warranty',
    startingPrice: 650,
    iconName: 'BatteryCharging',
  },
  {
    id: 'charging-port',
    title: 'Type-C & Charging Port Repair',
    description: 'Fix loose cables, slow charging, or audio jack issues with precision micro-soldering.',
    timeEstimate: '25 mins',
    warranty: '3 Months Warranty',
    startingPrice: 350,
    iconName: 'Zap',
  },
  {
    id: 'camera-glass',
    title: 'Camera Lens & Module Repair',
    description: 'Crystal-clear sapphire lens replacement so photos never suffer from blurry glare.',
    timeEstimate: '30 mins',
    warranty: '3 Months Warranty',
    startingPrice: 400,
    iconName: 'Camera',
  },
  {
    id: 'water-damage',
    title: 'Water Damage Ultrasonic Revival',
    description: 'Specialized chemical wash and PCB de-oxidation to rescue motherboards and save data.',
    timeEstimate: '2 - 4 hours',
    warranty: 'Diagnostic Tested',
    startingPrice: 500,
    iconName: 'Droplets',
  },
  {
    id: 'motherboard-ic',
    title: 'Motherboard IC Micro-Soldering',
    description: 'Fix no-power, restart loops, network IC faults, and sound issues with microscope tools.',
    timeEstimate: 'Same Day Service',
    warranty: 'Guaranteed Diagnosis',
    startingPrice: 850,
    iconName: 'Cpu',
  },
];
