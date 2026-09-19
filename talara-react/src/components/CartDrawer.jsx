import React from 'react';

export default function CartDrawer() {
  return (
    <aside id="cart-drawer" className="cart-drawer">
      <div className="p-5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="font-display font-bold text-lg text-white">Your Cart</h3>
          <span className="text-xs font-mono text-zinc-400">(<span id="cart-drawer-count">0</span> items)</span>
        </div>
        <button id="close-cart-btn" className="p-2 text-zinc-400 hover:text-white" aria-label="Close cart">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Cart Items Scroll Area */}
      <div id="cart-items-list" className="flex-grow overflow-y-auto p-5 space-y-3">
        {/* Render cart items here */}
      </div>

      {/* Cart Footer & Calculations */}
      <div className="p-5 border-t border-white/10 bg-black/60 space-y-3 text-xs font-mono">
        {/* Promo Code Input */}
        <div className="flex gap-2">
          <input 
            type="text" 
            id="promo-code-input" 
            placeholder="Promo (PALMVALUE)" 
            className="flex-grow p-2 rounded bg-black/50 border border-white/10 text-white uppercase text-xs outline-none focus:border-amber-400" 
          />
          <button id="apply-promo-btn" className="btn-amber-outline py-1.5 px-3 text-xs">Apply</button>
        </div>
        <span id="promo-feedback-msg" className="hidden"></span>

        {/* Financial Breakdown */}
        <div className="space-y-1.5 pt-2 border-t border-white/5 text-zinc-300">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span id="cart-subtotal-val" className="font-bold text-white">₹0</span>
          </div>
          <div id="cart-promo-discount-row" className="flex justify-between text-emerald-400 hidden">
            <span>Promotional Discount</span>
            <span id="cart-promo-discount-val">-₹0</span>
          </div>
          <div className="flex justify-between">
            <span>Climate-Neutral Shipping</span>
            <span id="cart-shipping-val">FREE</span>
          </div>
          <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-white/10">
            <span className="font-display">Total</span>
            <span id="cart-total-val" className="font-display text-amber-400 text-lg">₹0</span>
          </div>
        </div>

        <button id="cart-checkout-btn" className="btn-primary w-full py-3.5 text-sm font-semibold tracking-wider">
          Proceed to Checkout →
        </button>
        <p className="text-[10px] text-zinc-500 text-center font-sans">
          Protected by simulated 256-bit bank-grade encryption.
        </p>
      </div>
    </aside>
  );
}
