import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Portfólio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio items will be added here */}
            <div className="aspect-video bg-dark rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Portfolio items coming soon</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;