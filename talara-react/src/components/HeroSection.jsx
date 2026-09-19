import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero-section" className="hero-wrapper">
      <div className="hero-background-media">
        <img 
          src="images/hero-palmyra.jpg" 
          alt="Ancient wild towering Palmyra Palm trees in morning mist" 
          className="hero-bg-img" 
        />
        <div className="hero-overlay-gradient"></div>
      </div>

      <div className="site-container hero-content w-full">
        <div className="max-w-3xl hero-glass-card p-6 sm:p-10 rounded-3xl">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-amber-500/40 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="text-xs font-mono font-medium tracking-widest text-amber-200 uppercase">
              Modern Biomaterial & Consumer Brand
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.08] mb-6">
            One Palm. <br />
            <span className="gradient-text-amber">Endless Possibilities.</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 hero-pitch mb-8 max-w-2xl font-sans font-light leading-relaxed">
            The Palmyra Palm (<em>Borassus flabellifer</em>) is nature’s most extraordinary zero-felling super-plant. 
            TALARA transforms every biological part—from morning floral nectar and tender fruit to tough leaf fibers 
            and subterranean prebiotic roots—into an elevated ecosystem of culinary reserves, isotonic elixirs, and circular homeware.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a href="#catalog-section" className="btn-primary">
              <span>Explore Products</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>

            <a href="#story-section" className="btn-secondary">
              <span>Our Story</span>
            </a>

            <a href="#anatomy-section" className="text-xs font-mono tracking-wider text-amber-400 hover:text-amber-300 underline underline-offset-4 ml-2">
              View Anatomy Matrix ↓
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-xs font-mono">
            <div className="p-3 rounded-lg bg-black/40 border border-white/5 backdrop-blur-sm metric-box">
              <span className="text-xl font-bold text-amber-400 block font-display">18</span>
              <span className="text-zinc-400 metric-label">Flagship Creations</span>
            </div>
            <div className="p-3 rounded-lg bg-black/40 border border-white/5 backdrop-blur-sm metric-box">
              <span className="text-xl font-bold text-amber-400 block font-display">0</span>
              <span className="text-zinc-400 metric-label">Trees Felled</span>
            </div>
            <div className="p-3 rounded-lg bg-black/40 border border-white/5 backdrop-blur-sm metric-box">
              <span className="text-xl font-bold text-emerald-400 block font-display">94.8%</span>
              <span className="text-zinc-400 metric-label">Biomass Yield</span>
            </div>
            <div className="p-3 rounded-lg bg-black/40 border border-white/5 backdrop-blur-sm metric-box">
              <span className="text-xl font-bold text-white block font-display">420+</span>
              <span className="text-zinc-400 metric-label">Tapper Families</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
