import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('talara_theme') || 'dark');
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('talara_cart') || '[]'));
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem('talara_wishlist') || '[]'));
  
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeStatusFilter, setActiveStatusFilter] = useState('all');
  const [activeAnatomyPart, setActiveAnatomyPart] = useState(null);
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('talara_current_user'));
  const [userProfile, setUserProfile] = useState(() => JSON.parse(localStorage.getItem('talara_current_user') || 'null'));

  useEffect(() => {
    localStorage.setItem('talara_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('talara_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('talara_theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  const addToCart = (productId, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === productId);
      if (existing) {
        return prev.map(item => item.id === productId ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prev, { id: productId, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateCartQuantity = (productId, quantity) => {
    setCart(prev => prev.map(item => item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item));
  };

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const login = (user) => {
    setIsAuthenticated(true);
    setUserProfile(user);
    localStorage.setItem('talara_current_user', JSON.stringify(user));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserProfile(null);
    localStorage.removeItem('talara_current_user');
  };

  const value = {
    theme, toggleTheme,
    cart, addToCart, removeFromCart, updateCartQuantity,
    wishlist, toggleWishlist,
    activeCategory, setActiveCategory,
    activeStatusFilter, setActiveStatusFilter,
    activeAnatomyPart, setActiveAnatomyPart,
    activeProcessStep, setActiveProcessStep,
    searchQuery, setSearchQuery,
    isAuthenticated, userProfile, login, logout
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
