import React from 'react';

export default function CheckoutModal() {
  return (
    <div id="checkout-modal" className="modal-content-wrapper max-w-2xl">
      <div className="p-6 sm:p-8 max-w-2xl mx-auto">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div>
            <span className="badge-tag badge-amber mb-1 font-mono text-[10px]">Secure Express Checkout</span>
            <h3 className="font-display text-2xl font-bold text-white">Order Finalization (India)</h3>
          </div>
          <button id="close-checkout-btn" className="text-zinc-400 hover:text-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form id="checkout-form" className="space-y-6">
          {/* Step 1: Shipping Details */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold mb-3">1. Delivery Address & Contact</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <input type="text" id="chk-name" placeholder="Full Name" required defaultValue="Aarav" className="sm:col-span-2 p-2.5 rounded-lg bg-black/40 border border-white/10 text-white focus:border-amber-400 outline-none" />
              <input type="email" id="chk-email" placeholder="Email Address" required defaultValue="aarav.sundaram@talara.in" className="sm:col-span-2 p-2.5 rounded-lg bg-black/40 border border-white/10 text-white focus:border-amber-400 outline-none" />
              <input type="text" id="chk-address" placeholder="Delivery Street Address" required defaultValue="Flat 4B, Coastal Palm Residency, Besant Nagar" className="sm:col-span-2 p-2.5 rounded-lg bg-black/40 border border-white/10 text-white focus:border-amber-400 outline-none" />
              <input type="text" id="chk-city" placeholder="City" required defaultValue="Chennai" className="p-2.5 rounded-lg bg-black/40 border border-white/10 text-white focus:border-amber-400 outline-none" />
              <input type="text" id="chk-postal" placeholder="PIN Code" required defaultValue="600090" className="p-2.5 rounded-lg bg-black/40 border border-white/10 text-white focus:border-amber-400 outline-none" />
            </div>
          </div>

          {/* Step 2: Delivery Speed */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold mb-3">2. Domestic Carbon-Neutral Shipping</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <label className="flex items-start gap-3 p-3 rounded-lg border border-amber-500/40 bg-amber-950/20 cursor-pointer">
                <input type="radio" name="delivery_method" defaultChecked className="mt-0.5" />
                <div>
                  <strong className="text-white block">Standard Cold-Chain Express</strong>
                  <span className="text-zinc-400">2–3 Days Across India • FREE</span>
                </div>
              </label>
              <label className="flex items-start gap-3 p-3 rounded-lg border border-white/10 bg-black/30 cursor-pointer">
                <input type="radio" name="delivery_method" className="mt-0.5" />
                <div>
                  <strong className="text-white block">White-Glove Insulated Freight</strong>
                  <span className="text-zinc-400">Next-Day Refrigerated • +₹150</span>
                </div>
              </label>
            </div>
          </div>

          {/* Step 3: Payment Method */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold mb-3">3. Payment Mode (Sandbox)</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-3">
              <label className="payment-option-label flex items-start gap-3 p-3 rounded-lg border border-amber-500/40 bg-amber-950/20 cursor-pointer transition-colors">
                <input type="radio" name="payment_method" value="online" defaultChecked className="mt-0.5" />
                <div>
                  <strong className="text-white block">Online Payment</strong>
                  <span className="text-zinc-400 block mt-1">UPI / RuPay / NetBanking / Cards</span>
                </div>
              </label>
              <label className="payment-option-label flex items-start gap-3 p-3 rounded-lg border border-white/10 bg-black/30 cursor-pointer transition-colors hover:bg-black/50">
                <input type="radio" name="payment_method" value="cod" className="mt-0.5" />
                <div>
                  <strong className="text-white block">Cash on Delivery</strong>
                  <span className="text-zinc-400 block mt-1">Pay with cash at your doorstep</span>
                </div>
              </label>
            </div>
            <div className="p-3 bg-black/40 rounded-lg border border-white/5">
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                🔒 Demonstration Mode: No real financial transaction occurs. Clicking "Place Order" generates a simulated Indian tax invoice and order receipt.
              </p>
            </div>
          </div>

          {/* Summary Strip */}
          <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between text-sm">
            <div>
              <span className="text-xs text-zinc-400 block font-mono">Total Payable (INR)</span>
              <span className="text-2xl font-bold font-display text-white">₹0</span>
            </div>
            <button type="submit" className="btn-primary py-3 px-6 text-sm">
              Confirm & Place Order →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
