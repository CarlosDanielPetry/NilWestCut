import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Film, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Sobre</h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gray-300 text-lg mb-8">
              Com mais de uma década de experiência em produção audiovisual, 
              Edenilson Westphalen tem se dedicado a transformar momentos em 
              memórias eternas através das lentes de sua câmera.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/50 p-6 rounded-lg text-center">
              <Camera className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-playfair font-bold mb-3">Visão Criativa</h3>
              <p className="text-gray-400">
                Cada projeto é uma nova oportunidade para criar algo único e memorável.
              </p>
            </div>

            <div className="bg-black/50 p-6 rounded-lg text-center">
              <Film className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-playfair font-bold mb-3">Experiência</h3>
              <p className="text-gray-400">
                Anos de dedicação à arte da cinematografia e edição de vídeo.
              </p>
            </div>

            <div className="bg-black/50 p-6 rounded-lg text-center">
              <Award className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-playfair font-bold mb-3">Qualidade</h3>
              <p className="text-gray-400">
                Compromisso com a excelência em cada projeto realizado.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;