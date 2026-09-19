import React from 'react';
import { AppProvider } from './AppContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductCatalog from './components/ProductCatalog';
import SubscriptionCalc from './components/SubscriptionCalc';
import CartDrawer from './components/CartDrawer';
import AuthModal from './components/AuthModal';
import CheckoutModal from './components/CheckoutModal';
import Footer from './components/Footer';

const App = () => {
  return (
    <AppProvider>
      <Navbar />
      <CartDrawer />
      <AuthModal />
      <CheckoutModal />
      <HeroSection />
      <ProductCatalog />
      <SubscriptionCalc />
      <Footer />
    </AppProvider>
  );
};

export default App;
