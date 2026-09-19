import React from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS_DATA } from '../data';
import { useAppContext } from '../AppContext';

export default function ProductCatalog() {
  return (
    <section id="catalog-section" className="py-24 border-t border-white/5 bg-[#0c1410] relative">
      <div className="site-container">
        
        {/* Premium Indian Startup Brand Banner */}
        <div className="mb-10 p-5 sm:p-6 rounded-2xl brand-banner-glass border border-amber-500/20 backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono tracking-wider text-amber-300">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-200 border border-amber-500/30 font-bold uppercase">ONE PALMYRA PALM</span>
              <span className="text-zinc-500">→</span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold uppercase">MANY RAW MATERIALS</span>
              <span className="text-zinc-500">→</span>
              <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-100 border border-amber-400/30 font-bold uppercase">19 AUTHENTIC CREATIONS</span>
              <span className="text-zinc-500">→</span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 font-bold uppercase">ONE LUXURY BRAND</span>
            </div>
            <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>All Prices in Indian Rupees (₹ / INR) • FSSAI Certified</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <span className="badge-tag badge-amber mb-2 font-mono">Borassus flabellifer Multi-Product Ecosystem</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-2">
              The Complete Product Ecosystem
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Certified South Indian origin • Single-origin cold-chain logistics • Rigorous laboratory testing • Zero tree felling
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative min-w-[240px]">
              <input 
                type="text" 
                id="product-search-input" 
                placeholder="Search Fresh Kallu, Nungu, Chocolate..." 
                className="w-full py-2.5 pl-9 pr-4 rounded-full bg-black/50 border border-white/10 text-xs text-white placeholder:text-zinc-500 focus:border-amber-400 outline-none transition-all input-theme-adaptive"
              />
              <svg className="absolute left-3 top-3 text-zinc-500" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>

            {/* Sort Select */}
            <select 
              id="product-sort-select" 
              className="py-2.5 px-4 rounded-full bg-black/50 border border-white/10 text-xs text-zinc-300 focus:border-amber-400 outline-none cursor-pointer font-mono select-theme-adaptive"
            >
              <option value="featured">Sort: Featured First</option>
              <option value="price-low">Price: Low to High (₹)</option>
              <option value="price-high">Price: High to Low (₹)</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Alphabetical (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Quick Showcase View Sub-Tabs (Featured, New, All) */}
        <div className="flex flex-wrap items-center gap-2 mb-6 pb-2 border-b border-white/10 text-xs font-mono">
          <span className="text-zinc-500 uppercase text-[10px] tracking-wider mr-2">Highlight:</span>
          <button className="status-tab-btn active px-3.5 py-1.5 rounded-lg border border-amber-500/40 bg-amber-950/40 text-amber-200 font-semibold transition-all" data-status="all">
            Explore All Creations (19)
          </button>
          <button className="status-tab-btn px-3.5 py-1.5 rounded-lg border border-white/10 bg-black/40 text-zinc-400 hover:text-white transition-all" data-status="featured">
            ★ Featured Flagships
          </button>
          <button className="status-tab-btn px-3.5 py-1.5 rounded-lg border border-white/10 bg-black/40 text-zinc-400 hover:text-white transition-all" data-status="new">
            ✦ New Harvest Launches
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <button className="filter-pill active" data-category="all">All Categories (19)</button>
          <button className="filter-pill" data-category="sweeteners">Palm Jaggery & Sweeteners</button>
          <button className="filter-pill" data-category="beverages">Fresh Kallu & Drinks</button>
          <button className="filter-pill" data-category="nungu">Nungu & Tender Fruit</button>
          <button className="filter-pill" data-category="tuber">Palm Tuber & Powders</button>
          <button className="filter-pill" data-category="foods">Traditional Sweets & Foods</button>
          <button className="filter-pill" data-category="frond">Palm Leaf Homeware</button>
          <button className="filter-pill" data-category="fiber">Palm Fiber & Eco-Craft</button>
          <button className="filter-pill" data-category="curations">Luxury Gift Collections</button>
        </div>

        {/* Results Count Info */}
        <div className="flex items-center justify-between text-xs text-zinc-400 mb-6 font-mono">
          <span id="product-results-count">Showing {PRODUCTS_DATA.length} creations across the Borassus ecosystem</span>
          <span className="flex items-center gap-1.5 text-amber-400/90">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            Direct cold-chain shipping across India • Free delivery above ₹999
          </span>
        </div>

        {/* Products Grid */}
        <div id="products-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PRODUCTS_DATA.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
