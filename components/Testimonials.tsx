import React from 'react';
import { LANDING_DATA } from '../constants';
import { Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = LANDING_DATA.trust_signals.filter(t => t.type === 'testimonial');

  return (
    <section className="py-24 bg-secondary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
            Pácienseink mondták
          </h2>
          <div className="flex justify-center items-center gap-2 mb-2">
            <div className="flex text-yellow-400">
               {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <span className="font-bold text-gray-700">5.0</span>
          </div>
          <p className="text-gray-500">Valós Google vélemények alapján</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((test, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
              <Quote className="absolute top-6 right-6 text-secondary-200" size={40} />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold text-xl font-heading">
                   {test.source?.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{test.source}</p>
                  <div className="flex text-yellow-400 text-xs">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                "{test.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};