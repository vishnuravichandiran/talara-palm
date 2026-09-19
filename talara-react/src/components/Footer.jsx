import React from 'react';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-white/10 bg-[#060a08] text-zinc-400 text-xs font-mono">
      <div className="site-container">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Summary */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <svg className="brand-logo-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="22" stroke="rgba(217, 146, 59, 0.4)" strokeWidth="1.5"/>
                <path d="M24 6V42" stroke="#d9923b" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M6 24H42" stroke="#d9923b" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="24" cy="24" r="5" fill="#d9923b"/>
              </svg>
              <span className="font-display font-bold text-xl text-white tracking-widest">TALARA</span>
            </div>
            <p className="text-zinc-400 text-xs font-sans leading-relaxed max-w-sm mb-4">
              The Palmyra Company. Building a modern multi-product consumer and industrial brand from the wild <em>Borassus flabellifer</em> tree with zero tree felling and rigorous laboratory safety.
            </p>
            <p className="text-[11px] text-zinc-500">
              Certified FSSAI • US FDA Food Facility Registration • ISO 22000 Compliant
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3">Creations</h4>
            <ul className="space-y-2">
              <li><a href="#catalog-section" className="hover:text-amber-400">Nectar Reserve</a></li>
              <li><a href="#catalog-section" className="hover:text-amber-400">Sugar Crystals</a></li>
              <li><a href="#catalog-section" className="hover:text-amber-400">Sparkling Elixirs</a></li>
              <li><a href="#catalog-section" className="hover:text-amber-400">Prebiotic Tuber Flour</a></li>
              <li><a href="#catalog-section" className="hover:text-amber-400">Frond Tableware</a></li>
            </ul>
          </div>

          {/* Pillars */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3">Pillars</h4>
            <ul className="space-y-2">
              <li><a href="#anatomy-section" className="hover:text-amber-400">Palm Anatomy</a></li>
              <li><a href="#process-section" className="hover:text-amber-400">Cryo-Process</a></li>
              <li><a href="#science-section" className="hover:text-amber-400">Science vs Tradition</a></li>
              <li><a href="#sustainability-section" className="hover:text-amber-400">Zero-Felling Policy</a></li>
              <li><a href="#story-section" className="hover:text-amber-400">Tapper Safety Collective</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3">Vanguard Dispatch</h4>
            <p className="text-[11px] text-zinc-400 mb-3 font-sans">Seasonal harvest updates, botanical research, and limited edition releases.</p>
            <form className="newsletter-form space-y-2">
              <input type="email" required placeholder="your@email.com" className="w-full p-2 rounded bg-black/50 border border-white/10 text-white text-xs outline-none focus:border-amber-400" />
              <button type="submit" className="btn-amber-outline w-full py-1.5 text-xs">Join Dispatch</button>
            </form>
          </div>

        </div>

        {/* Statutory Health & Disclaimers Footer Bar */}
        <div className="pt-8 border-t border-white/10 text-[11px] leading-relaxed text-zinc-500 space-y-2">
          <p>
            <strong>FDA & Regulatory Disclaimer:</strong> Statements made on this website regarding food and beverage products have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease. Dietary advice should come from a qualified health professional.
          </p>
          <p>
            <strong>Diabetes & Carbohydrate Advisory:</strong> While unrefined palm sweeteners possess a lower glycemic index than refined sucrose, they remain a source of dietary carbohydrates and calories. Suitability must be determined in consultation with your personal physician.
          </p>
          <p>
            <strong>Alcohol Warning:</strong> Fermented offerings (Heritage Toddy Reserve) contain alcohol and are strictly prohibited for minors under the legal drinking age. Do not consume if pregnant or nursing.
          </p>
          <div className="flex flex-wrap items-center justify-between pt-4 text-zinc-600">
            <span>© 2026 TALARA Inc. Borassus Ecosystem. All Rights Reserved.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-400">Terms of Service</a>
              <a href="#" className="hover:text-zinc-400">Batch Laboratory Assays</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
