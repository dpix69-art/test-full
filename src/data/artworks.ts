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
    technique: 'mixed media on panel',
    dimensions: '51 x 69 x 0.6 cm',
    series: 'Farbkörper',
    description: 'Pigment behaves here as matter. I layer, compress and partly plane it off.  The surface stores gradients of pressure, not decorative harmony.',
    // файл ДОЛЖЕН лежать: public/images/farbkoerper/blau-2-2022.jpg
    image: withBase('images/farbkoerper/fkb - 01.jpg'),
    featured: true,
  },
  {
    id: 'fk-2',
    title: 'Fkb - 02 (Farbkörper II)',
    year: 2022,
    technique: 'mixed media on panel',
    dimensions: '51 x 69 x 0.6 cm',
    series: 'Farbkörper',
    description: 'Pigment behaves here as matter. I layer, compress and partly plane it off.  The surface stores gradients of pressure, not decorative harmony.',
    // файл ДОЛЖЕН лежать: public/images/farbkoerper/blau-2-2022.jpg
    image: withBase('images/farbkoerper/fkb - 02.jpg'),
    featured: true,
  }, 
  {
    id: 'fk-3',
    title: 'Fkb - 03 (Farbkörper III)',
    year: 2022,
    technique: 'mixed media on panel',
    dimensions: '51 x 69 x 0.6 cm',
    series: 'Farbkörper',
    description: 'Pigment behaves here as matter. I layer, compress and partly plane it off. The surface stores gradients of pressure, not decorative harmony.',
    // файл ДОЛЖЕН лежать: public/images/farbkoerper/blau-2-2022.jpg
    image: withBase('images/farbkoerper/fkb - 03.jpg'),
    featured: true,
  },
  {
    id: 'fk-4',
    title: 'Fkb - 04 (Farbkörper IV)',
    year: 2022,
    technique: 'mixed media on panel',
    dimensions: '51 x 69 x 0.6 cm',
    series: 'Farbkörper',
    description: 'Pigment behaves here as matter. I layer, compress and partly plane it off.  The surface stores gradients of pressure, not decorative harmony.',
    // файл ДОЛЖЕН лежать: public/images/farbkoerper/blau-2-2022.jpg
    image: withBase('images/farbkoerper/fkb - 04.jpg'),
    featured: true,
  },
  {
    id: 'fk-5',
    title: 'Fkb - 05 (Farbkörper V)',
    year: 2022,
    technique: 'mixed media on panel',
    dimensions: '51 x 69 x 0.6 cm',
    series: 'Farbkörper',
    description: 'Pigment behaves here as matter. I layer, compress and partly plane it off.  The surface stores gradients of pressure, not decorative harmony.',
    // файл ДОЛЖЕН лежать: public/images/farbkoerper/blau-2-2022.jpg
    image: withBase('images/farbkoerper/fkb - 05.jpg'),
    featured: true,
  },
  {
    id: 'fk-6',
    title: 'Fkb - 06 (Farbkörper VI)',
    year: 2022,
    technique: 'mixed media on panel',
    dimensions: '41 x 60 x 0.6 cm',
    series: 'Farbkörper',
    description: 'Pigment behaves here as matter. I layer, compress and partly plane it off.  The surface stores gradients of pressure, not decorative harmony.',
    // файл ДОЛЖЕН лежать: public/images/farbkoerper/blau-2-2022.jpg
    image: withBase('images/farbkoerper/fkb - 06.jpg'),
    featured: true,
  },  
  // PGSRD
  {
    id: 'PGSRD-Trc-01',
    title: 'PGSRD-Trc 01',
    year: 2023,
    technique: 'Gravel, sand, road dust on plywood',
    dimensions: '21 × 29,7 × 0.4 cm',
    series: 'PGSRD-Trc',
    description: 'Plywood, gravel and road dust register direct actions — imprint, friction, displacement. This is not metaphor: it is a topography of actual interaction. The crushed stone leaves permanent scars; plywood absorbs the impact without breaking.',
    // файл ДОЛЖЕН лежать: public/images/plywood-gravel/panel-01.jpg
    image: withBase('images/pgsrd-trc/pgsrd-trc - 01.jpg'),
  },
   {
    id: 'PGSRD-Trc-02',
    title: 'PGSRD-Trc 02',
    year: 2023,
    technique: 'Gravel, sand, road dust on plywood',
    dimensions: '21 × 29,7 × 0.4 cm',
    series: 'PGSRD-Trc',
    description: 'Plywood, gravel and road dust register direct actions — imprint, friction, displacement. This is not metaphor: it is a topography of actual interaction. The crushed stone leaves permanent scars; plywood absorbs the impact without breaking.',
    // файл ДОЛЖЕН лежать: public/images/plywood-gravel/panel-01.jpg
    image: withBase('images/pgsrd-trc/pgsrd-trc - 02.jpg'), 
  },
   {
    id: 'PGSRD-Trc-03',
    title: 'PGSRD-Trc 03',
    year: 2023,
    technique: 'Gravel, sand, road dust on plywood',
    dimensions: '21 × 29,7 × 0.4 cm',
    series: 'PGSRD-Trc',
    description: 'Plywood, gravel and road dust register direct actions — imprint, friction, displacement. This is not metaphor: it is a topography of actual interaction. The crushed stone leaves permanent scars; plywood absorbs the impact without breaking.',
    // файл ДОЛЖЕН лежать: public/images/plywood-gravel/panel-01.jpg
    image: withBase('images/pgsrd-trc/pgsrd-trc - 03.jpg'), 
  },
   {
    id: 'PGSRD-Trc-04',
    title: 'PGSRD-Trc 04',
    year: 2023,
    technique: 'Gravel, sand, road dust on plywood',
    dimensions: '21 × 29,7 × 0.4 cm',
    series: 'PGSRD-Trc',
    description: 'Plywood, gravel and road dust register direct actions — imprint, friction, displacement. This is not metaphor: it is a topography of actual interaction. The crushed stone leaves permanent scars; plywood absorbs the impact without breaking.',
    // файл ДОЛЖЕН лежать: public/images/plywood-gravel/panel-01.jpg
    image: withBase('images/pgsrd-trc/pgsrd-trc - 04.jpg'), 
  },
   {
    id: 'PGSRD-Trc-05',
    title: 'PGSRD-Trc 05',
    year: 2023,
    technique: 'Gravel, sand, road dust on plywood',
    dimensions: '21 × 29,7 × 0.4 cm',
    series: 'PGSRD-Trc',
    description: '—',
    // файл ДОЛЖЕН лежать: public/images/plywood-gravel/panel-01.jpg
    image: withBase('images/pgsrd-trc/pgsrd-trc - 05.jpg'), 
  },
   {
    id: 'PGSRD-Trc-06',
    title: 'PGSRD-Trc 06',
    year: 2023,
    technique: 'Gravel, sand, road dust on plywood',
    dimensions: '21 × 29,7 × 0.4 cm',
    series: 'PGSRD-Trc',
    description: 'Plywood, gravel and road dust register direct actions — imprint, friction, displacement. This is not metaphor: it is a topography of actual interaction. The crushed stone leaves permanent scars; plywood absorbs the impact without breaking.',
    // файл ДОЛЖЕН лежать: public/images/plywood-gravel/panel-01.jpg
    image: withBase('images/pgsrd-trc/pgsrd-trc - 06.jpg'), 
  },
   {
    id: 'PGSRD-Trc-07',
    title: 'PGSRD-Trc 07',
    year: 2023,
    technique: 'Gravel, sand, road dust on plywood',
    dimensions: '21 × 29,7 × 0.4 cm',
    series: 'PGSRD-Trc',
    description: 'Plywood, gravel and road dust register direct actions — imprint, friction, displacement. This is not metaphor: it is a topography of actual interaction. The crushed stone leaves permanent scars; plywood absorbs the impact without breaking.',
    // файл ДОЛЖЕН лежать: public/images/plywood-gravel/panel-01.jpg
    image: withBase('images/pgsrd-trc/pgsrd-trc - 07.jpg'), 
  },
   {
    id: 'PGSRD-Trc-08',
    title: 'PGSRD-Trc 08',
    year: 2023,
    technique: 'Gravel, sand, road dust on plywood',
    dimensions: '21 × 29,7 × 0.4 cm',
    series: 'PGSRD-Trc',
    description: 'Plywood, gravel and road dust register direct actions — imprint, friction, displacement. This is not metaphor: it is a topography of actual interaction. The crushed stone leaves permanent scars; plywood absorbs the impact without breaking.',
    // файл ДОЛЖЕН лежать: public/images/plywood-gravel/panel-01.jpg
    image: withBase('images/pgsrd-trc/pgsrd-trc - 08.jpg'), 
  },
   {
    id: 'PGSRD-Trc-09',
    title: 'PGSRD-Trc 09',
    year: 2023,
    technique: 'Gravel, sand, road dust on plywood',
    dimensions: '21 × 29,7 × 0.4 cm',
    series: 'PGSRD-Trc',
    description: 'Plywood, gravel and road dust register direct actions — imprint, friction, displacement. This is not metaphor: it is a topography of actual interaction. The crushed stone leaves permanent scars; plywood absorbs the impact without breaking.',
    // файл ДОЛЖЕН лежать: public/images/plywood-gravel/panel-01.jpg
    image: withBase('images/pgsrd-trc/pgsrd-trc - 09.jpg'), 
  },
   {
    id: 'PGSRD-Trc-10',
    title: 'PGSRD-Trc 10',
    year: 2023,
    technique: 'Gravel, sand, road dust on plywood',
    dimensions: '21 × 29,7 × 0.4 cm',
    series: 'PGSRD-Trc',
    description: 'Plywood, gravel and road dust register direct actions — imprint, friction, displacement. This is not metaphor: it is a topography of actual interaction. The crushed stone leaves permanent scars; plywood absorbs the impact without breaking.',
    // файл ДОЛЖЕН лежать: public/images/plywood-gravel/panel-01.jpg
    image: withBase('images/pgsrd-trc/pgsrd-trc - 10.jpg'), 
  },
   {
    id: 'PGSRD-Trc-11',
    title: 'PGSRD-Trc 11',
    year: 2023,
    technique: 'Gravel, sand, road dust on plywood',
    dimensions: '21 × 29,7 × 0.4 cm',
    series: 'PGSRD-Trc',
    description: 'Plywood, gravel and road dust register direct actions — imprint, friction, displacement. This is not metaphor: it is a topography of actual interaction. The crushed stone leaves permanent scars; plywood absorbs the impact without breaking.',
    // файл ДОЛЖЕН лежать: public/images/plywood-gravel/panel-01.jpg
    image: withBase('images/pgsrd-trc/pgsrd-trc - 11.jpg'), 
  },
   {
    id: 'PGSRD-Trc-12',
    title: 'PGSRD-Trc 12',
    year: 2023,
    technique: 'Gravel, sand, road dust on plywood',
    dimensions: '21 × 29,7 × 0.4 cm',
    series: 'PGSRD-Trc',
    description: 'Plywood, gravel and road dust register direct actions — imprint, friction, displacement. This is not metaphor: it is a topography of actual interaction. The crushed stone leaves permanent scars; plywood absorbs the impact without breaking.',
    // файл ДОЛЖЕН лежать: public/images/plywood-gravel/panel-01.jpg
    image: withBase('images/pgsrd-trc/pgsrd-trc - 12.jpg'), 
  },
   {
    id: 'PGSRD-Trc-13',
    title: 'PGSRD-Trc 13',
    year: 2023,
    technique: 'Gravel, sand, road dust on plywood',
    dimensions: '21 × 29,7 × 0.4 cm',
    series: 'PGSRD-Trc',
    description: 'Plywood, gravel and road dust register direct actions — imprint, friction, displacement. This is not metaphor: it is a topography of actual interaction. The crushed stone leaves permanent scars; plywood absorbs the impact without breaking.',
    // файл ДОЛЖЕН лежать: public/images/plywood-gravel/panel-01.jpg
    image: withBase('images/pgsrd-trc/pgsrd-trc - 13.jpg'), 
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