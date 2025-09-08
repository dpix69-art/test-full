// src/data/artworks.ts
import { withBase } from '../lib/assets';

export interface Artwork {
  id: string;
  title: string;
  year: number;
  technique: string;
  dimensions: string;
  price?: string;
  series: string;
  description?: string;
  image: string;
  featured?: boolean;
}

export const artworks: Artwork[] = [
  {
    id: 'fk-1',
    title: 'Fkb - 01 (Farbkörper I)',
    year: 2022,
    technique: 'mixed media',
    dimensions: '61 × 59 cm',
    series: 'Farbkörper',
    description: '—',
    // файл ДОЛЖЕН лежать: public/images/farbkoerper/blau-2-2022.jpg
    image: withBase('images/farb/fkb - 01.jpg'),
    featured: true,
  },
  {
    id: 'fk-2',
    title: 'Fkb - 02 (Farbkörper II)',
    year: 2022,
    technique: 'mixed media',
    dimensions: '61 × 59 cm',
    series: 'Farbkörper',
    description: '—',
    // файл ДОЛЖЕН лежать: public/images/farbkoerper/blau-2-2022.jpg
    image: withBase('images/farb/fkb - 02.jpg'),
    featured: true,
  }, 
  {
    id: 'fk-3',
    title: 'Fkb - 03 (Farbkörper III)',
    year: 2022,
    technique: 'mixed media',
    dimensions: '61 × 59 cm',
    series: 'Farbkörper',
    description: '—',
    // файл ДОЛЖЕН лежать: public/images/farbkoerper/blau-2-2022.jpg
    image: withBase('images/farb/fkb - 03.jpg'),
    featured: true,
  },
  {
    id: 'fk-4',
    title: 'Fkb - 04 (Farbkörper IV)',
    year: 2022,
    technique: 'mixed media',
    dimensions: '61 × 59 cm',
    series: 'Farbkörper',
    description: '—',
    // файл ДОЛЖЕН лежать: public/images/farbkoerper/blau-2-2022.jpg
    image: withBase('images/farb/fkb - 04.jpg'),
    featured: true,
  },
  {
    id: 'fk-5',
    title: 'Fkb - 05 (Farbkörper V)',
    year: 2022,
    technique: 'mixed media',
    dimensions: '61 × 59 cm',
    series: 'Farbkörper',
    description: '—',
    // файл ДОЛЖЕН лежать: public/images/farbkoerper/blau-2-2022.jpg
    image: withBase('images/farb/fkb - 05.jpg'),
    featured: true,
  },
  {
    id: 'fk-6',
    title: 'Fkb - 06 (Farbkörper VI)',
    year: 2022,
    technique: 'mixed media',
    dimensions: '41 × 60 cm',
    series: 'Farbkörper',
    description: '—',
    // файл ДОЛЖЕН лежать: public/images/farbkoerper/blau-2-2022.jpg
    image: withBase('images/farb/fkb - 06.jpg'),
    featured: true,
  },  
  {
    id: 'pg-2',
    title: 'panel 01',
    year: 2023,
    technique: 'plywood, gravel, sand',
    dimensions: '—',
    series: 'plywood-gravel',
    description: '—',
    // файл ДОЛЖЕН лежать: public/images/plywood-gravel/panel-01.jpg
    image: withBase('images/plywood-gravel/panel-01.jpg'),
  },
  // добавляй дальше по этому же паттерну
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