
import React from 'react';
import { Shield, Zap, Users, Brain, MessageSquare, Search } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Authentication",
      description: "Access restricted to @umt.edu.pk email addresses, ensuring a safe and verified community environment."
    },
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Intelligent image similarity system recommends visually matched items, even with different descriptions."
    },
    {
      icon: Search,
      title: "Smart Search & Filters",
      description: "Powerful search functionality with advanced filters to quickly locate relevant lost or found items."
    },
    {
      icon: MessageSquare,
      title: "Real-time Communication",
      description: "Integrated chat system enables secure communication between finders and claimants for safe handovers."
    },
    {
      icon: Zap,
      title: "Instant Notifications",
      description: "Get real-time updates on claim requests, status changes, and potential matches for your items."
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Designed exclusively for UMT students, faculty, and staff to foster trust and accountability."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced features designed to make finding and returning lost items easier, faster, and more secure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200/50 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
