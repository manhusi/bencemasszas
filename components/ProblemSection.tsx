import React from 'react';
import { Frown, AlertCircle, Clock } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: Clock,
      title: "Múló idő nyomai?",
      desc: "Ráncok, megereszkedett bőr, vagy fáradt tekintet, ami nem tükrözi belső energiáját."
    },
    {
      icon: AlertCircle,
      title: "Zavaró bőrhibák?",
      desc: "Akne, hegek, pigmentfoltok vagy rosacea, amelyek rontják az önbizalmát a mindennapokban."
    },
    {
      icon: Frown,
      title: "Bizonytalanság?",
      desc: "Rengeteg kezelés létezik, de nem tudja, melyik lenne valóban hatásos az Ön számára."
    }
  ];

  return (
    <section className="py-20 bg-white relative z-10 -mt-8 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-heading text-gray-900">
            Ismerős helyzetek?
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {problems.map((prob, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="mb-6 w-16 h-16 rounded-2xl bg-secondary-50 text-secondary-500 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-2 shadow-sm">
                <prob.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">{prob.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs">
                {prob.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};