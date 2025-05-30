
import React from 'react';
import { Clock, MapPin, User, MessageCircle } from 'lucide-react';

const RecentItems = () => {
  const recentItems = [
    {
      id: 1,
      title: "iPhone 13 Pro - Blue",
      type: "lost",
      location: "Library - Ground Floor",
      time: "2 hours ago",
      description: "Lost my blue iPhone 13 Pro near the study area. Has a clear case with stickers.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3",
      user: "Ahmed Khan",
      status: "active"
    },
    {
      id: 2,
      title: "Black Leather Wallet",
      type: "found",
      location: "Cafeteria - Table 12",
      time: "4 hours ago",
      description: "Found a black leather wallet with some cards inside. Please contact with ID proof.",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3",
      user: "Sara Ahmed",
      status: "claimed"
    },
    {
      id: 3,
      title: "Red USB Drive - 32GB",
      type: "lost",
      location: "Computer Lab - 3rd Floor",
      time: "1 day ago",
      description: "Important project files on red SanDisk USB drive. Reward offered!",
      image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-4.0.3",
      user: "Ali Hassan",
      status: "active"
    },
    {
      id: 4,
      title: "Student ID Card - Roll# 2021",
      type: "found",
      location: "Parking Area - Block A",
      time: "2 days ago",
      description: "Found student ID card in the parking area. Owner can contact me.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3",
      user: "Fatima Sheikh",
      status: "active"
    }
  ];

  return (
    <section className="py-16 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recent Posts
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Latest lost and found items reported by the UMT community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {recentItems.map((item, index) => (
            <div 
              key={item.id}
              className="group bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.type === 'lost' 
                      ? 'bg-red-500 text-white' 
                      : 'bg-green-500 text-white'
                  }`}>
                    {item.type === 'lost' ? 'Lost' : 'Found'}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.status === 'active' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-500 text-white'
                  }`}>
                    {item.status === 'active' ? 'Active' : 'Claimed'}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{item.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{item.time}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500 text-sm">
                    <User className="w-4 h-4 mr-2" />
                    <span>Posted by {item.user}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                    View Details
                  </button>
                  <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                    <MessageCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            View All Items
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentItems;
