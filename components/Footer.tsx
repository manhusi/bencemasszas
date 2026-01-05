import React from 'react';
import { LANDING_DATA } from '../constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const { contact_details } = LANDING_DATA;

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-bold font-heading text-white mb-6">
              Dunakanyar<span className="text-primary-400">Esztétika</span>
            </h3>
            <p className="text-gray-400 max-w-md leading-relaxed mb-6">
              Vác első számú orvos-esztétikai és bőrgyógyászati centruma. Dr. Kondorosi Ildikó és csapata várja Önt a legmodernebb technológiákkal.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold font-heading text-white mb-6">Elérhetőség</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <MapPin size={20} className="shrink-0 mt-1" />
                <span>{contact_details.address}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <Phone size={20} className="shrink-0" />
                <a href={`tel:${contact_details.phone_number}`}>{contact_details.phone_number}</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <Mail size={20} className="shrink-0" />
                <a href={`mailto:${contact_details.email_address}`}>{contact_details.email_address}</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold font-heading text-white mb-6">Nyitvatartás</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Clock size={20} className="shrink-0 mt-1" />
                <span>{contact_details.opening_hours}</span>
              </li>
              <li className="text-sm text-gray-500 italic mt-4">
                Bejelentkezés szükséges minden kezelésre.
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Dunakanyar Esztétika. Minden jog fenntartva.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Adatkezelés</a>
            <a href="#" className="hover:text-white">ÁSZF</a>
          </div>
        </div>
      </div>
    </footer>
  );
};