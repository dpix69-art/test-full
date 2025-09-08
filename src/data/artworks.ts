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
    title: 'Contemplation in Blue',
    year: 2024,
    technique: 'Oil on canvas',
    dimensions: '120 × 90 cm',
    price: '€3,200',
    series: 'Emotional Landscapes',
    description: 'A profound exploration of solitude and reflection, where azure tones merge with subtle earth pigments to create a meditative space that invites introspection.',
    image: 'https://images.pexels.com/photos/1187079/pexels-photo-1187079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: true
  },
  {
    id: '2',
    title: 'Urban Rhythm',
    year: 2024,
    technique: 'Acrylic and mixed media on canvas',
    dimensions: '100 × 150 cm',
    price: '€2,800',
    series: 'City Symphonies',
    description: 'Dynamic composition capturing the pulse of metropolitan life through layered textures and bold geometric forms.',
    image: 'https://images.pexels.com/photos/1070527/pexels-photo-1070527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: true
  },
  {
    id: '3',
    title: 'Silent Storm',
    year: 2023,
    technique: 'Oil on canvas',
    dimensions: '80 × 80 cm',
    price: '€2,400',
    description: 'Monochromatic study in tension and release, exploring the quiet power of understated emotion.',
    image: 'https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '4',
    title: 'Memory Fragments',
    year: 2024,
    technique: 'Mixed media on paper',
    dimensions: '70 × 50 cm',
    price: '€1,800',
    series: 'Temporal Studies',
    description: 'Delicate layering of translucent materials creates a palimpsest of remembered moments.',
    image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '5',
    title: 'Intersection',
    year: 2023,
    technique: 'Oil on canvas',
    dimensions: '110 × 80 cm',
    price: '€2,600',
    series: 'City Symphonies',
    description: 'Geometric abstraction meets organic forms in this exploration of urban and natural boundaries.',
    image: 'https://images.pexels.com/photos/1070527/pexels-photo-1070527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: true
  },
  {
    id: '6',
    title: 'Ethereal Dawn',
    year: 2024,
    technique: 'Watercolor on paper',
    dimensions: '60 × 40 cm',
    price: '€1,400',
    series: 'Emotional Landscapes',
    description: 'Subtle gradations of light capture the transformative moment between night and day.',
    image: 'https://images.pexels.com/photos/1187079/pexels-photo-1187079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
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