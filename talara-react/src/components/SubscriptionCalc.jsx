import React, { useState } from 'react';
import { useAppContext } from '../AppContext';
import { PRODUCTS_DATA } from '../data';

export default function SubscriptionCalc() {
  const { addToCart } = useAppContext();
  const [spoons, setSpoons] = useState(2);
  const [people, setPeople] = useState(2);

  // Math: Spoons * People * 5g per spoon * 30 days
  const totalGrams = spoons * people * 5 * 30;
  let formattedWeight = totalGrams + 'g';
  if (totalGrams >= 1000) {
    formattedWeight = (totalGrams / 1000).toFixed(1) + 'kg';
  }
  const jarsRequired = Math.ceil(totalGrams / 300);

  const handleSubscribe = () => {
    const subProduct = PRODUCTS_DATA.find(p => p.id === 'talara-sugar-01');
    if (subProduct) {
      addToCart(subProduct.id, jarsRequired);
      // In a full app, we'd open the cart drawer here
      alert('Subscription plan added to your cart!');
    }
  };

  return (
    <section id="subscription-section" className="py-24 border-t border-white/5 bg-[#0a110d] relative">
      <div className="site-container">
        
        <div className="max-w-2xl mb-12">
          <span className="badge-tag badge-emerald mb-3 font-mono">Auto-Replenish</span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
            Never Run Out of Nature's Nectar.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Calculate your exact monthly requirement based on your household's daily consumption. Subscribe to receive freshly harvested batches direct from our cold-chain reserves at a 15% recurring privilege discount.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl">
            <h3 className="font-display text-xl font-bold text-white mb-6">Usage Calculator</h3>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between text-sm text-zinc-300 mb-3 font-mono">
                  <span>Daily Consumption (Teaspoons per person)</span>
                  <span className="text-amber-400 font-bold">{spoons === 1 ? '1 Spoon' : `${spoons} Spoons`}</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  value={spoons} 
                  onChange={(e) => setSpoons(parseInt(e.target.value, 10))}
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer" 
                />
              </div>

              <div>
                <div className="flex justify-between text-sm text-zinc-300 mb-3 font-mono">
                  <span>Household Size (People consuming)</span>
                  <span className="text-amber-400 font-bold">{people === 1 ? '1 Person' : `${people} People`}</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  value={people} 
                  onChange={(e) => setPeople(parseInt(e.target.value, 10))}
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer" 
                />
              </div>
              
              <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/20">
                <p className="text-xs text-zinc-400 leading-relaxed">
                  *One teaspoon of unrefined Palm Sweetener is approximately 5 grams. Calculations are based on a 30-day monthly cycle.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-amber-500/30 flex flex-col justify-center text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-emerald-500"></div>
            
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">Your Recommended Monthly Plan</span>
            <div className="text-5xl font-display font-bold text-white mb-2">{formattedWeight}</div>
            <p className="text-amber-400 font-mono text-sm mb-8">Requires: {jarsRequired}x 300g Jars / month</p>
            
            <button onClick={handleSubscribe} className="btn-primary w-full max-w-sm mx-auto">
              <span>Subscribe & Save 15%</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
