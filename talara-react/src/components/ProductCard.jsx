import React from 'react';

export default function ProductCard({ product }) {
  const isWishlisted = false; // Mock for now
  const isConcept = product.status === 'concept';

  return (
    <article className="product-card group flex flex-col overflow-hidden" data-product-id={product.id}>
      {product.isAlcoholic ? (
        <div className="w-full py-1.5 px-3 bg-gradient-to-r from-red-950 via-red-900 to-red-950 border-b border-red-500/40 text-center flex items-center justify-center gap-2 z-20">
          <span className="px-1.5 py-0.5 rounded bg-red-600 text-white font-bold text-[10px] tracking-wider font-mono uppercase shadow-sm">21+ ONLY</span>
          <span className="text-[11px] font-semibold text-red-200 tracking-wide font-sans">For Adults Aged 21 and Above</span>
        </div>
      ) : null}
      
      {/* Product Visual Container (ONE UNIQUE IMAGE PER PRODUCT) */}
      <div className="product-card-img-wrap relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-card-img w-full h-56 sm:h-64 object-cover" 
          loading="lazy"
          onError={(e) => { e.currentTarget.src = 'images/hero-palmyra.jpg'; }}
        />
        
        {/* Badges Overlay */}
        <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 z-10">
          <span 
            className={`badge-tag ${product.isAlcoholic ? 'badge-red' : (isConcept ? 'badge-blue' : 'badge-amber')}`} 
            style={isConcept ? { background: 'rgba(56,189,248,0.2)', borderColor: '#38bdf8', color: '#e0f2fe' } : {}}
          >
            {product.badge}
          </span>
          {product.isNew ? <span className="badge-tag badge-emerald">New Harvest</span> : null}
        </div>

        {/* Wishlist Button */}
        <button 
          className={`wishlist-toggle-btn absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-amber-400 hover:scale-110 transition-all z-10 ${isWishlisted ? 'text-amber-400 !border-amber-400/40 bg-amber-950/50' : ''}`}
          data-product-id={product.id}
          aria-label="Save to wishlist"
          title="Add to wishlist"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={isWishlisted ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>

        {/* Quick Specs Hover Button */}
        <button 
          className="quick-view-btn absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 py-2 px-5 bg-black/85 hover:bg-black backdrop-blur-md border border-amber-500/40 text-amber-200 rounded-full text-xs font-semibold tracking-wider uppercase shadow-xl flex items-center gap-1.5 pointer-events-auto"
          data-product-id={product.id}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          Quick Specs
        </button>
      </div>

      {/* Product Details Body */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center justify-between text-xs text-amber-400/80 mb-1.5 font-mono uppercase tracking-wider">
          <span className="truncate max-w-[160px]">{product.categoryLabel}</span>
          <span className="flex items-center gap-1 text-zinc-400 flex-shrink-0">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="var(--primary-amber)" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            {product.rating} ({product.reviewsCount})
          </span>
        </div>

        <h3 className="font-display font-semibold text-base sm:text-lg text-white group-hover:text-amber-300 transition-colors mb-1 line-clamp-1 cursor-pointer" data-product-id={product.id}>
          {product.name}
        </h3>

        {/* Explicit Palmyra Palm Source Part Identification */}
        <div className="text-xs text-zinc-400 mb-2 font-mono flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
          <span className="truncate">Source: <strong className="text-zinc-200">{product.palmPart}</strong></span>
        </div>

        {/* Short Description */}
        <p className="text-xs text-zinc-400 line-clamp-2 mb-4 leading-relaxed flex-grow">
          {product.shortDesc}
        </p>

        {/* Card Bottom Bar: Price in ₹ INR & Action Buttons */}
        <div className="pt-3 border-t border-white/5 flex items-center justify-between mt-auto">
          <div>
            <span className="text-[10px] text-zinc-500 block uppercase tracking-wider font-mono">Price (INR)</span>
            <span className="text-lg font-bold font-display text-white">₹{product.price}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Explore Product Story Modal Button */}
            <button 
              className="open-product-modal-btn p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-colors border border-white/10"
              data-product-id={product.id}
              title="Explore Full Story & Specs"
              aria-label="View product details"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            </button>

            {/* Add to Cart or Explore Concept Button */}
            {isConcept ? (
              <button 
                className="open-product-modal-btn text-xs py-2 px-3.5 rounded-full border border-sky-500/40 bg-sky-950/30 text-sky-200 hover:bg-sky-900/50 font-semibold flex items-center gap-1.5 transition-all"
                data-product-id={product.id}
              >
                <span>Concept</span>
              </button>
            ) : (
              <>
                <button 
                  className="direct-add-cart-btn btn-amber-outline py-2 px-3 text-xs font-semibold flex items-center gap-1.5"
                  data-product-id={product.id}
                  title="Add to Cart"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                  <span>Add</span>
                </button>
                <button 
                  className="direct-buy-now-btn btn-primary py-2 px-3 text-xs font-semibold flex items-center gap-1.5"
                  data-product-id={product.id}
                  title="Buy Now"
                >
                  <span>Buy</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
