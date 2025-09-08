import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Grid, List } from 'lucide-react';
import { artworks, getSeries } from '../data/artworks';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const series = getSeries();
  const seriesNames = Object.keys(series);
  
  const filteredWorks = filter === 'all' 
    ? artworks 
    : filter === 'singles'
    ? artworks.filter(work => !work.series)
    : artworks.filter(work => work.series === filter);

  return (
    <main className="pt-20 lg:pt-24">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
        {/* Header */}
        <section className="mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-12 gap-6 lg:gap-12 items-end mb-12"
          >
            <div className="col-span-12 lg:col-span-8">
              <h1 className="text-4xl lg:text-6xl font-extralight tracking-[-0.03em] text-black mb-4">
                Gallery
              </h1>
              <p className="text-lg font-light text-gray-600 max-w-2xl">
                I explore the balance between control and chaos
                while using  acrylics, organics and sounds.
              </p>
            </div>
            
            <div className="col-span-12 lg:col-span-4 lg:text-right">
              <div className="flex items-center justify-start lg:justify-end space-x-4">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 transition-colors ${viewMode === 'grid' ? 'text-black' : 'text-gray-400 hover:text-black'}`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 transition-colors ${viewMode === 'list' ? 'text-black' : 'text-gray-400 hover:text-black'}`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </motion.div>
          
          {/* Filter Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-8 border-b border-gray-200 pb-8"
          >
            <button
              onClick={() => setFilter('all')}
              className={`relative text-sm font-light tracking-wide transition-all duration-300 group ${
                filter === 'all' ? 'text-black' : 'text-gray-400 hover:text-black'
              }`}
            >
              All Works ({artworks.length})
              <span className={`absolute -bottom-8 left-0 h-px bg-black transition-all duration-300 ${
                filter === 'all' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
            
            {seriesNames.map((seriesName) => (
              <button
                key={seriesName}
                onClick={() => setFilter(seriesName)}
                className={`relative text-sm font-light tracking-wide transition-all duration-300 group ${
                  filter === seriesName ? 'text-black' : 'text-gray-400 hover:text-black'
                }`}
              >
                {seriesName} ({series[seriesName].length})
                <span className={`absolute -bottom-8 left-0 h-px bg-black transition-all duration-300 ${
                  filter === seriesName ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
            
            <button
              onClick={() => setFilter('singles')}
              className={`relative text-sm font-light tracking-wide transition-all duration-300 group ${
                filter === 'singles' ? 'text-black' : 'text-gray-400 hover:text-black'
              }`}
            >
              Individual Works ({artworks.filter(work => !work.series).length})
              <span className={`absolute -bottom-8 left-0 h-px bg-black transition-all duration-300 ${
                filter === 'singles' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
          </motion.div>
        </section>

        {/* Gallery Grid/List */}
        <section>
          {viewMode === 'grid' ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16"
            >
              {filteredWorks.map((artwork, index) => (
                <motion.div
                  key={artwork.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
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
                      <div className="space-y-1 text-sm font-light text-gray-500">
                        <div className="flex justify-between">
                          <span>{artwork.year}</span>
                          <span>{artwork.price}</span>
                        </div>
                        <div>{artwork.technique}</div>
                        <div>{artwork.dimensions}</div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              layout
              className="space-y-8"
            >
              {filteredWorks.map((artwork, index) => (
                <motion.div
                  key={artwork.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group border-b border-gray-100 pb-8"
                >
                  <Link to={`/artwork/${artwork.id}`} className="block">
                    <div className="grid grid-cols-12 gap-6 lg:gap-12 items-center">
                      <div className="col-span-12 sm:col-span-4 lg:col-span-3">
                        <div className="aspect-[4/5] overflow-hidden bg-white">
                          <img
                            src={artwork.image}
                            alt={artwork.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      </div>
                      
                      <div className="col-span-12 sm:col-span-8 lg:col-span-9 space-y-4">
                        <div>
                          <h3 className="text-2xl font-light tracking-wide text-black group-hover:text-gray-600 transition-colors mb-2">
                            {artwork.title}
                          </h3>
                          {artwork.series && (
                            <p className="text-sm text-gray-400 font-light italic mb-3">
                              From the series "{artwork.series}"
                            </p>
                          )}
                          <p className="text-base font-light text-gray-600 leading-relaxed max-w-2xl">
                            {artwork.description}
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm font-light text-gray-500">
                          <div>
                            <span className="block text-xs text-gray-400 uppercase tracking-wide mb-1">Year</span>
                            {artwork.year}
                          </div>
                          <div>
                            <span className="block text-xs text-gray-400 uppercase tracking-wide mb-1">Technique</span>
                            {artwork.technique}
                          </div>
                          <div>
                            <span className="block text-xs text-gray-400 uppercase tracking-wide mb-1">Dimensions</span>
                            {artwork.dimensions}
                          </div>
                          <div>
                            <span className="block text-xs text-gray-400 uppercase tracking-wide mb-1">Price</span>
                            <span className="text-black font-medium">{artwork.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}

          {filteredWorks.length === 0 && (
            <div className="text-center py-24">
              <p className="text-lg font-light text-gray-500">No works found in this category.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Gallery;