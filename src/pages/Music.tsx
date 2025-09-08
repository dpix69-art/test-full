import React from 'react';
import { motion } from 'framer-motion';

const Music: React.FC = () => {
  const compositions = [
    {
      title: 'Ethereal Passages',
      year: 2024,
      duration: '12:30',
      description: 'An ambient soundscape that explores the liminal spaces between consciousness and dream. Composed during the creation of the "Emotional Landscapes" painting series, this piece uses field recordings from my studio combined with synthesized textures to create an immersive sonic environment that mirrors the contemplative nature of my visual work.',
      bandcampId: 'track=2854196983',
      type: 'Bandcamp'
    },
    {
      title: 'Urban Resonance',
      year: 2023,
      duration: '8:45',
      description: 'A rhythmic composition inspired by the pulse of city life, created in parallel with my "City Symphonies" painting series. The piece layers found sounds from Milan\'s streets with electronic elements, creating a sonic collage that captures the energy and chaos of urban existence while finding moments of unexpected beauty.',
      soundcloudId: 'https://soundcloud.com/artistname/urban-resonance',
      type: 'SoundCloud'
    },
    {
      title: 'Temporal Fragments',
      year: 2023,
      duration: '15:20',
      description: 'A meditative piece exploring the concept of time as a fluid, non-linear experience. Using tape loops and acoustic instruments processed through analog delays, the composition reflects my ongoing investigation into memory and perception that also informs my mixed media works on paper.',
      bandcampId: 'track=3456789012',
      type: 'Bandcamp'
    }
  ];

  return (
    <main className="max-w-4xl mx-auto px-8 py-16 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-light mb-8 tracking-tight">
          Music
        </h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg font-light text-gray-600 mb-16 leading-relaxed"
        >Physical controllers extend the instrument list: 
        a contact‑miked metal resonator where stones or sand act as percussion, and an electromagnetic‑fan system whose field, captured by an antenna, modulates other devices. 
        The performance is recorded as‑is.
        Transparent level adjustment, no structural editing.
        </motion.p>

        <div className="space-y-16">
          {compositions.map((composition, index) => (
            <motion.section
              key={composition.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="border-b border-gray-100 pb-16 last:border-b-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Player Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-light tracking-wide">
                      {composition.title}
                    </h2>
                    <span className="text-sm text-gray-500 font-light">
                      {composition.year}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 font-light mb-6">
                    Duration: {composition.duration}
                  </p>

                  {/* Embedded Player */}
                  <div className="bg-gray-50 rounded-lg p-8 text-center">
                    {composition.type === 'Bandcamp' ? (
                      <div className="space-y-4">
                        <div className="w-full h-48 bg-gray-200 rounded flex items-center justify-center">
                          <span className="text-gray-500 font-light">
                            Bandcamp Player Placeholder
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">
                          Embed: bandcamp.com/EmbeddedPlayer/{composition.bandcampId}
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center">
                          <span className="text-gray-500 font-light">
                            SoundCloud Player Placeholder
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">
                          Embed: {composition.soundcloudId}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Description Section */}
                <div className="space-y-6">
                  <h3 className="text-sm font-medium text-gray-900 tracking-wide">
                    ABOUT THIS COMPOSITION
                  </h3>
                  <p className="text-base font-light text-gray-700 leading-relaxed">
                    {composition.description}
                  </p>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-16 pt-16 border-t border-gray-100 text-center"
        >
          <p className="text-base font-light text-gray-600 leading-relaxed mb-8">
            All compositions are available for licensing and collaboration inquiries. 
            Custom soundworks for exhibitions and installations available upon request.
          </p>
          <button className="text-sm font-light tracking-wide border border-gray-300 px-8 py-3 hover:border-black transition-colors duration-300">
            Listen on Bandcamp
          </button>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Music;