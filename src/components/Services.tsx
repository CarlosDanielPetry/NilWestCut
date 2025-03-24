import React from 'react';
import { motion } from 'framer-motion';
import { Video, Camera, Edit, Film } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Serviços</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-black/50 rounded-lg">
              <Video className="w-12 h-12 text-gold mb-4" />
              <h3 className="text-xl font-playfair font-bold mb-3">Videografia</h3>
              <p className="text-gray-400">
                Produção de vídeos profissionais para eventos e ocasiões especiais.
              </p>
            </div>

            <div className="p-6 bg-black/50 rounded-lg">
              <Camera className="w-12 h-12 text-gold mb-4" />
              <h3 className="text-xl font-playfair font-bold mb-3">Fotografia</h3>
              <p className="text-gray-400">
                Captura de momentos especiais com qualidade e sensibilidade.
              </p>
            </div>

            <div className="p-6 bg-black/50 rounded-lg">
              <Edit className="w-12 h-12 text-gold mb-4" />
              <h3 className="text-xl font-playfair font-bold mb-3">Edição</h3>
              <p className="text-gray-400">
                Edição profissional de vídeos com atenção aos detalhes.
              </p>
            </div>

            <div className="p-6 bg-black/50 rounded-lg">
              <Film className="w-12 h-12 text-gold mb-4" />
              <h3 className="text-xl font-playfair font-bold mb-3">Produção</h3>
              <p className="text-gray-400">
                Produção completa de conteúdo audiovisual para sua marca.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;