import { withBase, imagePath } from '../lib/assets';


export interface Artwork {
  id: string;
  title: string;
  year: number;
  technique: string;
  dimensions: string;
  price: string;
  series?: string;
  description: string;
  image: string;
  featured?: boolean;
}

export const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Farbkoerper',
    year: 2022,
    technique: 'Mixtecknic',
    dimensions: '120 × 90 cm',
    price: '€3,200',
    series: 'Farbkoerper',
    description: 'A profound exploration of solitude and reflection, where azure tones merge with subtle earth pigments to create a meditative space that invites introspection.',
    image: withBase(imagePath('farbkoerper', 'blau-2_2022_61x59')),
    featured: true
  },
  {
    id: '2',
    title: 'Farbkoeper',
    year: 2024,
    technique: 'Acrylic and mixed media on canvas',
    dimensions: '100 × 150 cm',
    price: '€2,800',
    series: 'City Symphonies',
    description: 'Dynamic composition capturing the pulse of metropolitan life through layered textures and bold geometric forms.',
    image: withBase(imagePath('plywood-gravel', 'Contemplation in Blue')),
    featured: true
  }
];

export const getSeries = () => {
  const series = artworks
    .filter(artwork => artwork.series)
    .reduce((acc, artwork) => {
      if (!acc[artwork.series!]) {
        acc[artwork.series!] = [];
      }
      acc[artwork.series!].push(artwork);
      return acc;
    }, {} as Record<string, Artwork[]>);
  
  return series;
};