
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import RecentItems from '../components/RecentItems';
import Features from '../components/Features';

const Index = () => {
  return (
    <Layout>
      <div className="animate-fade-in">
        <Hero />
        <RecentItems />
        <Features />
        
        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the UMT community in making lost item recovery faster and more efficient
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                Sign Up with UMT Email
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
