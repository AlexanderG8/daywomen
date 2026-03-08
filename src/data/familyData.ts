// src/data/familyData.ts
import type { FamilyMember, GalaxyConfig } from '@/types';

export const galaxyConfig: GalaxyConfig = {
  radius: 12,
  particleCount: 3000,
  rotationSpeed: 0.0004,
  cameraFov: 75,
};

export const familyMembers: FamilyMember[] = [
  {
    id: 'mama',
    name: 'Jenny Gómez',
    nickname: 'Mamá',
    relationship: 'Madre',
    message: 'Eres la razón por la que sé lo que es la perseverancia y  el amor incondicional. Cada logro mío aunque no te lo demuestre lleva tu nombre, porque sin ti ninguno hubiera sido posible. Gracias por ser esa madre luchona y ese hogar que me dio la fuerza para seguir adelante. Se que no soy de expresar mis emociones pero te amo más de lo que las palabras pueden decir. ✨',
    photo: '/images/Mama.webp',
    color: '#F0B429',
    size: 1.4,
    position: [0, 2, 0],
    emoji: '⭐',
  },
  {
    id: 'hermana1',
    name: 'Nicolle Gomez',
    nickname: 'Monga',
    relationship: 'Hermana',
    message: 'Crecer contigo ha sido el mejor regalo que la vida me dio. Eres más fuerte, más valiente y más brillante de lo que crees. Me enorgullece llamarte mi hermana, tal vez la vida te traiga dificultades pero sigue adelante hermanita y no te rindas. 🌸',
    photo: '/images/Hermana1.webp',
    color: '#5DADE2',
    size: 1.0,
    position: [2, -1, 3],
    emoji: '🌸',
  },
  {
    id: 'hermana2',
    name: 'Margiori Mamani',
    nickname: 'Magy Poto',
    relationship: 'Hermana',
    message: 'Eres la alegría más pura de nuestra familia, aunque tal vez aun no te des cuenta de cuánto eres especial. Cada vez que sonríes me recuerdas que las cosas simples son las más importantes. Cuídate mucho, tal vez no este muy presente pero quiero que sepas que eres muy especial para mí y para todos los que te queremos. 🌟',
    photo: '/images/Hermana2.webp',
    color: '#8d68c9',
    size: 1.0,
    position: [2, -1, -3],
    emoji: '🌟',
  }
];
