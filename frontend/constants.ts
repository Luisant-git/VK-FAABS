
import { Category, FabricProduct, GalleryImage } from './types';

export const FABRICS: FabricProduct[] = [
  {
    id: '1',
    name: 'Premium Cotton Pique',
    category: Category.PIQUE,
    gsm: '180 - 240 GSM',
    composition: '100% Combed Cotton / Poly-Cotton Blends',
    useCases: ['Polo Shirts', 'Sportswear', 'Corporate Uniforms'],
    image: 'https://www.akfabrics.com/img/t1.jpg',
    description: 'Highly breathable and durable, our pique fabric offers superior texture and moisture-wicking properties.'
  },
  {
    id: '2',
    name: 'Single Jersey',
    category: Category.JERSEY,
    gsm: '140 - 200 GSM',
    composition: '100% Organic Cotton / Cotton Spandex',
    useCases: ['T-Shirts', 'Sleepwear', 'Lounge Wear'],
    image: 'https://www.akfabrics.com/img/t2.jpg',
    description: 'Soft, lightweight, and versatile. Perfect for high-quality everyday essentials.'
  },
  {
    id: '3',
    name: 'Brushed French Terry',
    category: Category.FRENCH_TERRY,
    gsm: '260 - 320 GSM',
    composition: '80% Cotton 20% Polyester',
    useCases: ['Hoodies', 'Sweatpants', 'Luxury Loungewear'],
    image: 'https://www.akfabrics.com/img/t3.jpg',
    description: 'Heavyweight comfort with a loop-back structure for heat retention and premium feel.'
  },
  {
    id: '4',
    name: 'Heavy Fleece',
    category: Category.FLEECE,
    gsm: '300 - 400 GSM',
    composition: '65% Cotton 35% Polyester',
    useCases: ['Winter Wear', 'Jackets', 'Heavy Hoodies'],
    image: 'https://www.akfabrics.com/img/t4.jpg',
    description: 'Superior warmth with a soft brushed inner layer, ideal for cold climates.'
  },
  {
    id: '5',
    name: 'Matty Pique',
    category: Category.PIQUE,
    gsm: '220 - 260 GSM',
    composition: 'Cotton Rich Blends',
    useCases: ['Premium Polos', 'Workwear'],
    image: 'https://content.jdmagicbox.com/quickquotes/images_main/pique-matty-pink-fabric-2213455406-ra1piik7.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit',
    description: 'Tougher texture with high durability for professional attire.'
  },
  {
    id: '6',
    name: 'Slub Jersey',
    category: Category.JERSEY,
    gsm: '160 - 180 GSM',
    composition: '100% Cotton',
    useCases: ['Fashion Tees', 'Designer Tops'],
    image: 'https://www.polestargarments.com/wp-content/uploads/2020/04/Slub-Jersey-Tirupur-Fabrics.jpg',
    description: 'Unique irregular texture giving a sophisticated fashion-forward look.'
  }
];

export const GALLERY: GalleryImage[] = [
  { id: 'g1', url: 'https://www.akfabrics.com/img/elements/g18.jpg', alt: 'Industrial knitting machine', type: 'factory' },
  { id: 'g2', url: 'https://www.akfabrics.com/img/elements/g7.jpg', alt: 'Fabric rolls', type: 'fabric' },
  { id: 'g3', url: 'https://www.akfabrics.com/img/elements/g1.jpg', alt: 'Textile texture', type: 'fabric' },
  { id: 'g4', url: 'https://www.akfabrics.com/img/elements/g12.jpg', alt: 'Garment production', type: 'process' },
  { id: 'g5', url: 'https://www.akfabrics.com/img/elements/g2.jpg', alt: 'Quality checking', type: 'process' },
  { id: 'g6', url: 'https://www.akfabrics.com/img/elements/g6.jpg', alt: 'Fabric storage', type: 'factory' },
];

export const COMPANY_DETAILS = {
  name: 'VK FAABS',
  address: '36, Thirumalai Nagar, Near Balamurugan Kovil, P.N. Road, Tirupur – 641602',
  phone: ['+91 98765 43210', '+91 91234 56789'],
  email: 'info@vkfaabs.com',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.896740695029!2d77.3323!3d11.1085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9079f87f7b3e1%3A0x6b776a3e6c3846e4!2sTiruppur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1715694321045!5m2!1sen!2sin'
};
