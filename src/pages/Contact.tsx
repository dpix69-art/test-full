import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'hi@kremenskii.art';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-8 py-16 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16"
      >
        {/* Contact Information */}
        <div className="space-y-12">
          <div>
            <h1 className="text-4xl font-light mb-8 tracking-tight">
              Contact
            </h1>
            <p className="text-lg font-light text-gray-600 leading-relaxed">
              For inquiries about available works, commissions, exhibitions, or collaborations, 
              please don't hesitate to get in touch.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4 tracking-wide">
                EMAIL
              </h3>
              <div className="flex items-center gap-3">
                <span className="text-base font-light text-gray-900">
                  {email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 hover:bg-gray-100 rounded transition-colors duration-200"
                  title="Copy email address"
                >
                  {copied ? (
                    <Check size={16} className="text-green-600" />
                  ) : (
                    <Copy size={16} className="text-gray-500" />
                  )}
                </button>
              </div>
              {copied && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-sm text-green-600 mt-2"
                >
                  Email copied to clipboard
                </motion.p>
              )}
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4 tracking-wide">
                STUDIO
              </h3>
              <div className="text-base font-light text-gray-700 space-y-1">
                <p>Ressestr. </p>
                <p>70599 Stuttgart, Germany</p>
              </div>
            </div>

            {/* <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4 tracking-wide">
                REPRESENTATION
              </h3>
              <div className="text-base font-light text-gray-700 space-y-2">
                <p>Galleria Elseins</p>
                <p>info@elseins-gallery.com</p>
                <p>+39 02 8646 2871</p>
              </div>
            </div> */}
          </div>
        </div>

        {/* Additional Information */}
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-light mb-6 tracking-wide">
              Services
            </h3>
            <ul className="space-y-3 text-base font-light text-gray-700">
              <li>• Original artwork sales</li>
              {/* <li>• Commission paintings</li> */}
              <li>• Custom sound compositions</li>
              <li>• Exhibition collaborations</li>
              {/* <li>• Art consultation</li> */}
              {/* <li>• Studio visits by appointment</li> */}
            </ul>
          </div>

          {/* <div>
            <h3 className="text-xl font-light mb-6 tracking-wide">
              Studio Visits
            </h3>
            <p className="text-base font-light text-gray-700 leading-relaxed mb-4">
              Studio visits are welcome by appointment. Please contact me to schedule 
              a time to view works in person and discuss potential acquisitions.
            </p>
            <p className="text-sm text-gray-600 font-light">
              Please allow 48 hours notice for scheduling.
            </p>
          </div> */}

          {/* <div>
            <h3 className="text-xl font-light mb-6 tracking-wide">
              Press & Media
            </h3>
            <p className="text-base font-light text-gray-700 leading-relaxed">
              High-resolution images, artist statement, and biographical information 
              available upon request. Please specify intended use and publication details.
            </p>
          </div> */}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-16 pt-16 border-t border-gray-100 text-center"
      >
        <p className="text-sm font-light text-gray-500">
          I aim to respond to all inquiries within 24-48 hours.
        </p>
      </motion.div>
    </main>
  );
};

export default Contact;