import React from 'react';
import { ChatInterface } from './ChatInterface';
import { CheckCircle2, ArrowRight, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center">
      {/* Background Decor - Pattern & Gradients */}
      <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-primary-200/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-secondary-200/30 rounded-full blur-[100px]"></div>
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-primary-100/30 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl mx-auto lg:mx-0">
            
            {/* Trust Badge - Google Reviews */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/80 backdrop-blur-md rounded-full shadow-lg shadow-gray-200/50 border border-white/60 mx-auto lg:mx-0 animate-fade-in-up group hover:scale-[1.02] transition-transform cursor-default">
              <div className="flex gap-0.5 text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <div className="h-4 w-px bg-gray-300"></div>
              <span className="text-xs font-bold text-gray-700 tracking-wide uppercase">
                4.9-es értékelés Google-ön
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-heading text-gray-900 leading-[1.1] tracking-tight">
              A szépség <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500">
                tudományos
              </span> alapokon.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 font-body leading-relaxed">
              Nem tudja pontosan mire van szüksége a bőrének? <br className="hidden md:block" />
              <strong className="text-primary-800">Szakértőnk segít kiválasztani</strong> a tökéletes kezelést egy perc alatt.
            </p>

            {/* Feature List */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              {['Szakorvosi háttér', 'Dél-Koreai technológia', 'Ingyenes állapotfelmérés'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                  <CheckCircle2 className="text-primary-500 shrink-0" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
               <button 
                 onClick={() => document.getElementById('chatbot-input')?.focus()}
                 className="bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold font-heading shadow-xl shadow-primary-600/20 hover:bg-primary-700 hover:scale-[1.02] transition-all transform flex items-center justify-center gap-3 group"
               >
                 Segíts választani
                 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </div>

          {/* Chatbot Interface - Hero Piece */}
          <div className="flex-1 w-full relative perspective-1000">
            {/* Glow Effect behind chat */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary-400/20 to-secondary-400/20 blur-3xl rounded-full z-0"></div>
            
            <div className="relative z-10">
              <ChatInterface />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};