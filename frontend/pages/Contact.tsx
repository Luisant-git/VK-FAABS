
import React from 'react';
import ContactForm from '../components/ContactForm';
import { COMPANY_DETAILS } from '../constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-12 md:py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-start">
          {/* Contact Info */}
          <div className="space-y-8 md:space-y-12">
            <div>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs md:text-sm">Contact Us</span>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 md:mt-4 leading-tight">Let's Discuss Your Fabric Requirements</h1>
              <p className="text-base md:text-lg text-slate-500 mt-4 md:mt-6">
                Whether you're looking for custom development or bulk stock supply, our team is ready to assist you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div className="flex items-start">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mr-3 md:mr-4 shrink-0">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-slate-900 mb-1">Our Location</h4>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed">{COMPANY_DETAILS.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mr-3 md:mr-4 shrink-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-slate-900 mb-1">Call Us</h4>
                  {COMPANY_DETAILS.phone.map(p => (
                    <p key={p} className="text-xs md:text-sm text-slate-500">{p}</p>
                  ))}
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mr-3 md:mr-4 shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-slate-900 mb-1">Email Support</h4>
                  <p className="text-xs md:text-sm text-slate-500">{COMPANY_DETAILS.email}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mr-3 md:mr-4 shrink-0">
                  <Clock className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-slate-900 mb-1">Working Hours</h4>
                  <p className="text-xs md:text-sm text-slate-500">Mon - Sat: 9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            {/* Mock Map */}
            <div className="rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-xl h-64 md:h-80 relative group">
              <iframe 
                src={COMPANY_DETAILS.mapUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="lg:sticky lg:top-32">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
