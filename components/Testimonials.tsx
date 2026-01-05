import React from 'react';
import { LANDING_DATA } from '../constants';
import { Star, ChevronLeft, BadgeCheck } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = LANDING_DATA.trust_signals.filter(t => t.type === 'testimonial');

  // Helper for Google Logo letters
  const GoogleLogo = () => (
    <div className="flex text-2xl font-bold tracking-tighter font-heading select-none">
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC05]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
    </div>
  );

  const GoogleIcon = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
        
        {/* Header Widget */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-xl md:text-2xl font-bold font-heading text-gray-900 uppercase tracking-wide mb-2">
            KIVÁLÓ
          </h2>
          <div className="flex gap-1.5 text-[#fbbc04] mb-3">
             {[1, 2, 3, 4, 5].map((s) => (
               <Star key={s} size={28} fill="currentColor" strokeWidth={0} />
             ))}
          </div>
          <div className="text-center">
            <p className="text-gray-900 font-semibold mb-1">53 vélemény alapján</p>
            <div className="transform scale-90">
              <GoogleLogo />
            </div>
          </div>
        </div>

        {/* Carousel / Grid Area */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* Decorative Left Arrow (Visual only for now) */}
          <div className="hidden lg:flex absolute left-[-40px] top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">
            <ChevronLeft size={32} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {testimonials.slice(0, 3).map((test, idx) => (
              <div key={idx} className="bg-white rounded-none md:rounded-xl p-0 md:p-4 flex flex-col h-full">
                
                {/* Card Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={test.avatar} 
                      alt={test.source || 'User'} 
                      className="w-10 h-10 rounded-full object-cover shadow-sm"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 text-[15px] leading-tight">
                        {test.source}
                      </h4>
                      <span className="text-gray-400 text-xs">{test.date}</span>
                    </div>
                  </div>
                  <GoogleIcon />
                </div>

                {/* Rating Row */}
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="flex text-[#fbbc04] gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <BadgeCheck size={16} className="text-[#4285F4] fill-[#4285F4] text-white" />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <p className="text-gray-700 text-[15px] leading-relaxed line-clamp-4">
                    {test.content}
                  </p>
                  {test.content.length > 100 && (
                     <button className="text-gray-400 text-sm mt-2 hover:text-gray-600 font-medium">
                       Olvass tovább
                     </button>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};