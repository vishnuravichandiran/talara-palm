import React from 'react';
import { useAppContext } from '../AppContext';

const Navbar = () => {
  const { cart, wishlist, toggleTheme, isAuthenticated } = useAppContext();
  
  const cartCount = cart.length;
  const wishlistCount = wishlist.length;

  return (
    <header id="main-navbar" className="navbar-fixed px-4 sm:px-8 py-4">
      <div className="site-container flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="brand-logo-wrap flex items-center gap-3 group">
          <svg className="brand-logo-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="22" stroke="rgba(217, 146, 59, 0.4)" strokeWidth="1.5"/>
            <path d="M24 6V42" stroke="#d9923b" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M6 24H42" stroke="#d9923b" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M11 11L37 37" stroke="#f4c07c" strokeWidth="2" strokeLinecap="round"/>
            <path d="M11 37L37 11" stroke="#f4c07c" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="24" cy="24" r="5" fill="#d9923b"/>
          </svg>

          <div>
            <span className="font-display font-bold text-xl tracking-[0.2em] text-white group-hover:text-amber-300 transition-colors">TALARA</span>
            <span className="block text-[9px] font-mono tracking-[0.25em] text-zinc-400 uppercase -mt-1">Borassus flabellifer</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        {!isAuthenticated ? (
          <nav id="logged-out-nav" className="hidden lg:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-zinc-300">
            <a href="#hero-section" className="hover:text-amber-400 transition-colors">Home</a>
            <a href="#universe-section" className="hover:text-amber-400 transition-colors">Universe</a>
            <a href="#anatomy-section" className="hover:text-amber-400 transition-colors">Palm Anatomy</a>
            <a href="#catalog-section" className="hover:text-amber-400 transition-colors">Products</a>
            <a href="#process-section" className="hover:text-amber-400 transition-colors">Process</a>
            <a href="#science-section" className="hover:text-amber-400 transition-colors">Science & Lore</a>
            <a href="#sustainability-section" className="hover:text-amber-400 transition-colors">Zero-Waste</a>
            <a href="#story-section" className="hover:text-amber-400 transition-colors">Our Story</a>
            <a href="#contact-section" className="hover:text-amber-400 transition-colors">Partnership</a>
          </nav>
        ) : (
          <nav id="logged-in-nav" className="hidden lg:flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-zinc-300">
            <a href="#hero-section" className="hover:text-amber-400 transition-colors">Home</a>
            
            <div className="relative">
              <input type="text" id="nav-search-input" placeholder="Search products..." className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white focus:border-amber-400 outline-none w-48 sm:w-64 placeholder-zinc-500" />
              <svg className="absolute right-3 top-2 w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            
            <a href="#catalog-section" className="hover:text-amber-400 transition-colors">Products</a>
          </nav>
        )}

        {/* Utility Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          <button
            onClick={toggleTheme}
            className="relative p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors border border-white/10"
            aria-label="Toggle Theme"
            title="Toggle Theme"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          </button>

          {!isAuthenticated ? (
            <button 
              id="nav-login-btn"
              className="auth-logged-out relative p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors border border-white/10"
              aria-label="User Login"
              title="Login"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </button>
          ) : (
            <div className="auth-logged-in flex items-center gap-2 sm:gap-3">
              <button 
                className="open-wishlist-btn relative p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors border border-white/10"
                aria-label="View Wishlist"
                title="Wishlist"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                {wishlistCount > 0 && (
                  <span id="wishlist-count-badge" className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-black text-[10px] font-mono font-bold flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              <button 
                className="open-cart-btn relative flex items-center gap-2 py-2 px-3.5 sm:px-4 rounded-full bg-white/5 hover:bg-white/10 text-zinc-200 hover:text-white transition-all border border-white/10"
                aria-label="View Shopping Cart"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                <span className="hidden sm:inline font-mono tracking-widest text-[11px] font-bold">CART</span>
                {cartCount > 0 && (
                  <span id="cart-count-badge" className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-black text-[10px] font-mono font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              <button 
                id="nav-profile-btn"
                className="relative p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-amber-400 hover:text-amber-300 transition-colors border border-amber-500/30"
                aria-label="User Profile"
                title="Profile"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </button>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button 
            id="mobile-menu-toggle" 
            className="lg:hidden p-2.5 rounded-full bg-white/5 text-zinc-300 hover:text-white border border-white/10"
            aria-label="Open Mobile Menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div id="mobile-menu-drawer" className="lg:hidden hidden pt-4 pb-6 px-4 border-t border-white/10 mt-3 bg-black/95 backdrop-blur-xl">
        <div className="flex flex-col gap-4 text-sm font-mono uppercase tracking-wider text-zinc-300">
          <a href="#hero-section" className="py-1 hover:text-amber-400">Home</a>
          <a href="#universe-section" className="py-1 hover:text-amber-400">Product Universe</a>
          <a href="#anatomy-section" className="py-1 hover:text-amber-400">Palm Anatomy</a>
          <a href="#catalog-section" className="py-1 hover:text-amber-400">Full Catalog</a>
          <a href="#process-section" className="py-1 hover:text-amber-400">Craft & Process</a>
          <a href="#science-section" className="py-1 hover:text-amber-400">Science vs Tradition</a>
          <a href="#sustainability-section" className="py-1 hover:text-amber-400">Zero-Waste Matrix</a>
          <a href="#story-section" className="py-1 hover:text-amber-400">Startup Story</a>
          <a href="#contact-section" className="py-1 hover:text-amber-400">B2B & Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
