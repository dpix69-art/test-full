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
    id: 'fk-1',
    title: 'blau 2 (Farbkörper I)',
    year: 2022,
    technique: 'mixed media',
    dimensions: '61 × 59 cm',
    series: 'Farbkörper',
    description: '…',
    // → public/images/farbkoerper/blau-2.jpg
    image: withBase(imagePath('Farbkörper', 'blau 2')),
    featured: true,
  },
  {
    id: 'pg-1',
    title: 'panel 01',
    year: 2023,
    technique: 'plywood, gravel, sand',
    dimensions: '—',
    series: 'plywood-gravel',
    description: '…',
    // → public/images/plywood-gravel/panel-01.jpg
    image: withBase(imagePath('plywood-gravel', 'panel 01')),
  },
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