import React from 'react';
import { motion } from 'framer-motion';

const CV: React.FC = () => {
  const sections = [
    {
      title: 'Education',
      items: [
        {
          year: '2018-2022',
          title: 'Master of Fine Arts',
          institution: 'Academy of Fine Arts, Milan',
          description: 'Specialization in Contemporary Painting and Mixed Media'
        },
        {
          year: '2014-2018',
          title: 'Bachelor of Fine Arts',
          institution: 'Brera Academy, Milan',
          description: 'Major in Visual Arts with honors'
        }
      ]
    },
    {
      title: 'Solo Exhibitions',
      items: [
        {
          year: '2024',
          title: 'Emotional Landscapes',
          institution: 'Galleria Contemporanea, Milan',
          description: 'A comprehensive survey of recent paintings exploring inner emotional topographies'
        },
        {
          year: '2023',
          title: 'City Symphonies',
          institution: 'Spazio Arte Moderna, Rome',
          description: 'Urban-inspired works combining painting and sound installation'
        },
        {
          year: '2022',
          title: 'Temporal Studies',
          institution: 'Centro Arte Contemporanea, Florence',
          description: 'Debut solo exhibition featuring mixed media works on paper'
        }
      ]
    },
    {
      title: 'Group Exhibitions',
      items: [
        {
          year: '2024',
          title: 'New Voices in Italian Art',
          institution: 'Palazzo delle Esposizioni, Rome',
          description: 'Curated exhibition featuring emerging Italian artists'
        },
        {
          year: '2023',
          title: 'Contemporary Perspectives',
          institution: 'Venice Biennale Arte, Collateral Events',
          description: 'International exhibition of contemporary painting'
        },
        {
          year: '2023',
          title: 'Mediterranean Dialogues',
          institution: 'Museum of Contemporary Art, Barcelona',
          description: 'Cross-cultural exhibition exploring regional artistic connections'
        }
      ]
    },
    {
      title: 'Awards & Recognition',
      items: [
        {
          year: '2024',
          title: 'Young Artist Prize',
          institution: 'Fondazione per l\'Arte Contemporanea',
          description: 'Recognition for outstanding contribution to contemporary Italian painting'
        },
        {
          year: '2023',
          title: 'Artist Residency',
          institution: 'Villa Medici, Rome',
          description: 'Three-month residency program for emerging artists'
        }
      ]
    }
  ];

  return (
    <main className="max-w-4xl mx-auto px-8 py-16 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-light mb-16 tracking-tight">
          Curriculum Vitae
        </h1>

        <div className="space-y-16">
          {sections.map((section, sectionIndex) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              className="border-l border-gray-200 pl-8"
            >
              <h2 className="text-xl font-light mb-8 tracking-wide text-gray-900">
                {section.title}
              </h2>
              
              <div className="space-y-8">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (itemIndex * 0.1) }}
                    className="relative"
                  >
                    <div className="absolute -left-10 top-1 w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-gray-500 tracking-wide">
                          {item.year}
                        </span>
                        <span className="text-lg font-light text-gray-900">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-gray-700">
                        {item.institution}
                      </p>
                      <p className="text-sm font-light text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-16 pt-16 border-t border-gray-100"
        >
          <p className="text-sm font-light text-gray-600 leading-relaxed">
             Lives and works in Stuttgart.
            <br />
            For collection information, please contact the studio.
          </p>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default CV;