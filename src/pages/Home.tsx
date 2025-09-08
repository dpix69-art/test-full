import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Circle } from 'lucide-react';
import { artworks } from '../data/artworks';

const Home: React.FC = () => {
  const featuredWorks = artworks.filter(artwork => artwork.featured);

  return (
    <main className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="grid grid-cols-12 gap-6 lg:gap-12 items-center"
          >
            {/* Left Column - Text */}
            <div className="col-span-12 lg:col-span-7 space-y-8 lg:space-y-12">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex items-center space-x-4"
                >
                  <Circle size={8} className="fill-black text-black" />
                  <span className="text-sm font-light tracking-[0.2em] text-gray-500 uppercase">
                    Contemporary Artist
                  </span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-5xl lg:text-7xl xl:text-8xl font-extralight tracking-[-0.03em] leading-[0.85] text-black"
                >
                  Exploring the
                  <span className="block italic font-light text-gray-600">
                    liminal spaces
                  </span>
                  between emotion
                  <span className="block">& form</span>
                </motion.h1>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="max-w-lg space-y-6"
              >
                <p className="text-lg font-light leading-relaxed text-gray-700">
                  Through painting and sound, I create immersive experiences that invite 
                  contemplation and connection with the subtle rhythms of our inner worlds.
                </p>
                
                <div className="flex items-center space-x-6">
                  <Link
                    to="/gallery"
                    className="group inline-flex items-center space-x-2 bg-black text-white px-8 py-4 hover:bg-gray-800 transition-all duration-300"
                  >
                    <span className="text-sm font-light tracking-wide">View Works</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                  
                  <div className="text-sm font-light text-gray-500 space-y-1">
                    <div>Milan, Italy</div>
                    <div>Est. 2022</div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Right Column - Featured Image */}
            <div className="col-span-12 lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="relative"
              >
                <div className="aspect-[3/4] bg-gray-50 overflow-hidden">
                  <img
                    src={featuredWorks[0]?.image}
                    alt={featuredWorks[0]?.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-lg max-w-xs">
                  <h3 className="text-lg font-light mb-2">{featuredWorks[0]?.title}</h3>
                  <p className="text-sm text-gray-500 font-light">
                    {featuredWorks[0]?.year} • {featuredWorks[0]?.technique}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Works Grid */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-16 lg:mb-24"
          >
            <div className="grid grid-cols-12 gap-6 lg:gap-12 items-end">
              <div className="col-span-12 lg:col-span-6">
                <h2 className="text-4xl lg:text-5xl font-extralight tracking-[-0.02em] text-black">
                  Selected Works
                </h2>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 h-px bg-gray-300"></div>
                  <span className="text-sm font-light tracking-[0.1em] text-gray-500 uppercase">
                    Recent Series
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            {featuredWorks.slice(0, 3).map((artwork, index) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <Link to={`/artwork/${artwork.id}`} className="block">
                  <div className="relative overflow-hidden bg-white mb-6">
                    <div className="aspect-[4/5]">
                      <img
                        src={artwork.image}
                        alt={artwork.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ArrowUpRight size={16} className="text-black" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-light tracking-wide text-black group-hover:text-gray-600 transition-colors">
                      {artwork.title}
                    </h3>
                    {artwork.series && (
                      <p className="text-sm text-gray-400 font-light italic">
                        {artwork.series}
                      </p>
                    )}
                    <div className="flex items-center justify-between text-sm font-light text-gray-500">
                      <span>{artwork.year}</span>
                      <span>{artwork.price}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 lg:py-32">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h3 className="text-3xl lg:text-4xl font-extralight tracking-[-0.02em] text-black max-w-2xl mx-auto">
              Discover the complete collection of contemporary works
            </h3>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/gallery"
                className="group inline-flex items-center space-x-2 border border-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-300"
              >
                <span className="text-sm font-light tracking-wide">Explore Gallery</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              
              <Link
                to="/music"
                className="text-sm font-light tracking-wide text-gray-500 hover:text-black transition-colors border-b border-transparent hover:border-black pb-1"
              >
                Listen to Sound Works
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;