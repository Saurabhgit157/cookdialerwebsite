import React from 'react';
import { BRAND, CONTACT, SOCIAL, NAV_LINKS, PLAY_STORE_URL } from '../lib/constants';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white text-slate-900 pt-16 pb-8 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center font-black text-slate-900 text-lg">
                C
              </div>
              <span className="text-xl font-black tracking-tight text-slate-900 font-heading">
                {BRAND.name}
              </span>
            </div>
            <p className="text-emerald-400 font-semibold text-xs tracking-wider uppercase">
              {BRAND.tagline}
            </p>
            <p className="text-slate-500 text-xs leading-relaxed font-sans">
              Connecting Greater Noida residents with background-verified home cooks for customized daily meals.
            </p>
            {/* Live Platform Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>All Systems Operational in Greater Noida</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-600 mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-emerald-400 transition-colors text-xs font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Direct Contact */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-600 mb-4 font-heading">Direct Contact</h3>
            <ul className="space-y-2.5 text-xs text-slate-500">
              <li>
                <a href={CONTACT.email.link} className="hover:text-emerald-400 transition-colors">
                  📧 {CONTACT.email.value}
                </a>
              </li>
              <li>
                <a href={CONTACT.phone.link} className="hover:text-emerald-400 transition-colors">
                  📞 {CONTACT.phone.value}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  💬 WhatsApp Booking (+91 8287794390)
                </a>
              </li>
              <li>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors font-bold text-emerald-600"
                >
                  📱 Get App on Play Store
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.privacyPolicy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  📄 Privacy Policy & Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-600 mb-4 font-heading">Connect With Us</h3>
            <ul className="space-y-2.5">
              {SOCIAL.map((item) => (
                <li key={item.platform}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-500 hover:text-emerald-400 transition-colors text-xs font-medium"
                  >
                    <span>{item.icon}</span>
                    <span>{item.platform}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {BRAND.company}. All rights reserved.</p>
          <p>Built for Greater Noida • Your Kitchen, Our Cook</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
