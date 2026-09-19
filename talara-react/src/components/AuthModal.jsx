import React from 'react';

export default function AuthModal() {
  return (
    <div id="unified-auth-modal" className="modal-content-wrapper max-w-md">
      <div className="relative p-6 sm:p-8">
        <button id="close-unified-auth-btn" className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-zinc-400 hover:text-white flex items-center justify-center border border-white/10 z-20" aria-label="Close auth modal">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        {/* Login View */}
        <div id="auth-login-view">
          <h3 className="font-display text-2xl font-bold text-white mb-2">Welcome Back</h3>
          <p className="text-sm text-zinc-400 mb-6">Login to access your profile, wishlist, and cart.</p>
          
          <form id="unified-login-form" className="space-y-4">
            <div>
              <label className="block font-mono uppercase text-zinc-400 text-[10px] mb-1">Email Address</label>
              <input type="email" id="login-email" required className="w-full p-3 rounded-lg bg-black/40 border border-white/10 text-white focus:border-amber-400 outline-none" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block font-mono uppercase text-zinc-400 text-[10px]">Password</label>
                <a href="#" className="text-[10px] text-amber-500 hover:text-amber-400 font-mono">Forgot Password?</a>
              </div>
              <input type="password" id="login-password" required className="w-full p-3 rounded-lg bg-black/40 border border-white/10 text-white focus:border-amber-400 outline-none" />
            </div>
            <button type="submit" className="btn-primary w-full py-3.5 text-sm mt-4">Login</button>
          </form>

          <div className="mt-8">
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-3 border-b border-white/10 pb-2">Recent Logins (Last 4)</h4>
            <ul id="recent-logins-list" className="space-y-2 text-sm text-zinc-300">
              <li className="text-zinc-500 italic">No recent logins.</li>
            </ul>
          </div>

          <div className="mt-6 text-center text-sm text-zinc-400">
            Don't Have an Account? <button id="switch-to-register-btn" className="text-amber-500 hover:text-amber-400 font-medium ml-1 transition-colors">Create New Account</button>
          </div>
        </div>

        {/* Register View */}
        <div id="auth-register-view" className="hidden">
          <h3 className="font-display text-2xl font-bold text-white mb-2">Create New Account</h3>
          <p className="text-sm text-zinc-400 mb-6">Join Talara to unlock a personalized shopping experience.</p>
          
          <form id="unified-register-form" className="space-y-4">
            <div>
              <label className="block font-mono uppercase text-zinc-400 text-[10px] mb-1">Full Name</label>
              <input type="text" id="register-name" required className="w-full p-3 rounded-lg bg-black/40 border border-white/10 text-white focus:border-amber-400 outline-none" />
            </div>
            <div>
              <label className="block font-mono uppercase text-zinc-400 text-[10px] mb-1">Email Address</label>
              <input type="email" id="register-email" required className="w-full p-3 rounded-lg bg-black/40 border border-white/10 text-white focus:border-amber-400 outline-none" />
            </div>
            <div>
              <label className="block font-mono uppercase text-zinc-400 text-[10px] mb-1">Create Password</label>
              <input type="password" id="register-password" required minLength="6" className="w-full p-3 rounded-lg bg-black/40 border border-white/10 text-white focus:border-amber-400 outline-none" />
            </div>
            <div>
              <label className="block font-mono uppercase text-zinc-400 text-[10px] mb-1">Confirm Password</label>
              <input type="password" id="register-confirm-password" required minLength="6" className="w-full p-3 rounded-lg bg-black/40 border border-white/10 text-white focus:border-amber-400 outline-none" />
            </div>
            <button type="submit" className="btn-primary w-full py-3.5 text-sm mt-4">Send OTP</button>
          </form>

          <div className="mt-6 text-center text-sm text-zinc-400">
            Already Have an Account? <button id="switch-to-login-btn" className="text-amber-500 hover:text-amber-400 font-medium ml-1 transition-colors">Login</button>
          </div>
        </div>

        {/* OTP View */}
        <div id="auth-otp-view" className="hidden text-center">
          <h3 className="font-display text-2xl font-bold text-white mb-2">Verify Your Email</h3>
          <p className="text-sm text-zinc-400 mb-6">We've sent a 4-digit code to <span id="otp-target-email" className="text-amber-500 font-medium">your email</span>.</p>
          
          <form id="unified-otp-form" className="space-y-6">
            <input type="text" id="unified-otp-input" required maxLength="4" placeholder="••••" className="w-32 mx-auto p-4 rounded-lg bg-black/40 border border-white/10 text-white text-center text-2xl tracking-widest focus:border-amber-400 outline-none font-mono" />
            
            <button type="submit" className="btn-primary w-full py-3.5 text-sm">Verify & Create Account</button>
          </form>

          <div className="mt-6 flex flex-col items-center gap-2">
            <span id="otp-timer-text" className="text-xs font-mono text-zinc-500">Expires in: 05:00</span>
            <button id="resend-otp-btn" className="text-sm text-amber-500 hover:text-amber-400 font-medium transition-colors" disabled>Resend OTP</button>
          </div>
        </div>
      </div>
    </div>
  );
}
