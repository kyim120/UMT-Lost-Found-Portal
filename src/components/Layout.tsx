
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Main Background Image with Multiple Layers */}
      <div className="fixed inset-0 z-[-3]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          }}
        />
        {/* Blur Layer */}
        <div className="absolute inset-0 backdrop-blur-sm bg-black/20" />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-indigo-500/30" />
        {/* Additional Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2%, transparent 50%), 
                           radial-gradient(circle at 75px 75px, rgba(255,255,255,0.1) 2%, transparent 50%)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Content Container with Glass Effect */}
      <div className="relative min-h-screen bg-white/5 backdrop-blur-[2px]">
        <Navbar />
        
        <main className="pt-16 transition-all duration-700 ease-in-out">
          <div className="relative z-10">
            {children}
          </div>
        </main>

        {/* Floating Elements for Visual Appeal */}
        <div className="fixed top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" />
        <div className="fixed bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="fixed top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse delay-500" />
      </div>
    </div>
  );
};

export default Layout;
