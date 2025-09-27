import React from 'react';
import Header from './components/Header';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="flex-grow flex items-center bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1581090700227-76637e960c5a?auto=format&fit=crop&w=1420&q=80)'}}>
        <div className="bg-black bg-opacity-50 w-full py-24">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Empowering Farmers With Data-Driven Insights</h1>
            <p className="max-w-2xl mx-auto mb-6 text-lg md:text-xl">Real-time soil, weather, and market analytics — delivered through voice, text & images, right on your phone.</p>
            <a href="#features" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded shadow inline-block">Explore Features</a>
          </div>
        </div>
      </section>
      <FeatureGrid />
      <Footer />
    </div>
  );
}

export default App;
