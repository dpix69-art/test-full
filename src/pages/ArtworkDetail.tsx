import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { artworks } from '../data/artworks';

const ArtworkDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const artwork = artworks.find(work => work.id === id);

  if (!artwork) {
    return <Navigate to="/gallery" replace />;
  }

  const relatedWorks = artworks
    .filter(work => work.id !== artwork.id && work.series === artwork.series)
    .slice(0, 3);

  return (
    <main className="pt-20 lg:pt-24">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Back Navigation */}
          <Link
            to="/gallery"
            className="inline-flex items-center space-x-2 text-sm font-light text-gray-500 hover:text-black transition-colors duration-200 mb-12 lg:mb-16 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Gallery</span>
          </Link>

          {/* Main Content */}
          <div className="grid grid-cols-12 gap-8 lg:gap-16 mb-16 lg:mb-24">
            {/* Image */}
            <div className="col-span-12 lg:col-span-8">
              <div className="aspect-[4/5] bg-gray-50 overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div className="col-span-12 lg:col-span-4 space-y-8">
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-extralight tracking-[-0.02em] text-black mb-4">
                    {artwork.title}
                  </h1>
                  {artwork.series && (
                    <p className="text-lg font-light text-gray-500 italic">
                      From the series "{artwork.series}"
                    </p>
                  )}
                </div>

                <div className="space-y-6 py-8 border-y border-gray-100">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xs font-medium text-gray-400 uppercase tracking-[0.1em] mb-2">
                        Year
                      </h3>
                      <p className="text-base font-light text-black">
                        {artwork.year}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xs font-medium text-gray-400 uppercase tracking-[0.1em] mb-2">
                        Price
                      </h3>
                      <p className="text-base font-medium text-black">
                        {artwork.price}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xs font-medium text-gray-400 uppercase tracking-[0.1em] mb-2">
                      Technique
                    </h3>
                    <p className="text-base font-light text-black">
                      {artwork.technique}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xs font-medium text-gray-400 uppercase tracking-[0.1em] mb-2">
                      Dimensions
                    </h3>
                    <p className="text-base font-light text-black">
                      {artwork.dimensions}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-medium text-gray-400 uppercase tracking-[0.1em] mb-4">
                    About This Work
                  </h3>
                  <p className="text-base font-light text-gray-700 leading-relaxed">
                    {artwork.description}
                  </p>
                </div>

                <div className="pt-8">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center space-x-2 bg-black text-white px-8 py-4 hover:bg-gray-800 transition-all duration-300"
                  >
                    <span className="text-sm font-light tracking-wide">Inquire About This Work</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Related Works */}
          {relatedWorks.length > 0 && (
            <section className="border-t border-gray-100 pt-16 lg:pt-24">
              <div className="mb-12">
                <h2 className="text-2xl lg:text-3xl font-extralight tracking-[-0.02em] text-black mb-4">
                  More from "{artwork.series}"
                </h2>
                <p className="text-base font-light text-gray-600">
                  Explore other works from this series
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
                {relatedWorks.map((relatedWork, index) => (
                  <motion.div
                    key={relatedWork.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link to={`/artwork/${relatedWork.id}`} className="block">
                      <div className="relative overflow-hidden bg-white mb-6">
                        <div className="aspect-[4/5]">
                          <img
                            src={relatedWork.image}
                            alt={relatedWork.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <ArrowUpRight size={16} className="text-black" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-lg font-light tracking-wide text-black group-hover:text-gray-600 transition-colors">
                          {relatedWork.title}
                        </h3>
                        <div className="flex justify-between text-sm font-light text-gray-500">
                          <span>{relatedWork.year}</span>
                          <span>{relatedWork.price}</span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </section>
          )}
        </motion.div>
      </div>
    </main>
  );
};

export default ArtworkDetail;