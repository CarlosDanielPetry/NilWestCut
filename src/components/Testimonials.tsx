import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "João Silva",
      role: "Empresário",
      text: "Trabalho excepcional! A qualidade da produção superou todas as expectativas.",
      rating: 5
    },
    {
      name: "Maria Santos",
      role: "Produtora de Eventos",
      text: "Profissionalismo e criatividade em cada projeto. Recomendo fortemente!",
      rating: 5
    },
    {
      name: "Pedro Costa",
      role: "Diretor de Marketing",
      text: "A capacidade de transformar nossa visão em realidade é impressionante.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Depoimentos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-dark p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gold text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;