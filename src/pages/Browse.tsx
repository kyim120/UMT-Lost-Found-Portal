import React, { useState } from 'react';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import ItemDetailModal from '../components/ItemDetailModal';
import { Eye, MessageCircle, Calendar, MapPin, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Item {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  date: string;
  status: 'lost' | 'found' | 'claimed';
  image: string;
  reporter: string;
  contact: string;
}

const Browse = () => {
  const [allItems] = useState<Item[]>([
    {
      id: '1',
      title: 'iPhone 13 Pro Max',
      description: 'Blue iPhone 13 Pro Max found in the library. Has a clear case with some stickers.',
      category: 'electronics',
      location: 'library',
      date: '2024-01-15',
      status: 'found',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300',
      reporter: 'Sarah Ahmed',
      contact: 'sarah.ahmed@umt.edu.pk'
    },
    {
      id: '2',
      title: 'Brown Leather Wallet',
      description: 'Lost my brown leather wallet containing ID card and some cash. Last seen in cafeteria.',
      category: 'accessories',
      location: 'cafeteria',
      date: '2024-01-14',
      status: 'lost',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300',
      reporter: 'Ahmad Hassan',
      contact: 'ahmad.hassan@umt.edu.pk'
    },
    {
      id: '3',
      title: 'UMT Student ID Card',
      description: 'Found a student ID card belonging to Maria Khan. Please contact to claim.',
      category: 'id-cards',
      location: 'parking',
      date: '2024-01-13',
      status: 'found',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300',
      reporter: 'Ali Raza',
      contact: 'ali.raza@umt.edu.pk'
    },
    {
      id: '4',
      title: 'Blue Backpack',
      description: 'Large blue backpack with laptop compartment. Contains some books and notebooks.',
      category: 'accessories',
      location: 'classroom',
      date: '2024-01-12',
      status: 'found',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300',
      reporter: 'Fatima Ali',
      contact: 'fatima.ali@umt.edu.pk'
    }
  ]);

  const [filteredItems, setFilteredItems] = useState<Item[]>(allItems);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (query: string, filters: any) => {
    let filtered = allItems;

    // Filter by search query
    if (query.trim()) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        item.location.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Apply filters
    if (filters.category) {
      filtered = filtered.filter(item => item.category === filters.category);
    }
    if (filters.location) {
      filtered = filtered.filter(item => item.location === filters.location);
    }
    if (filters.status) {
      filtered = filtered.filter(item => item.status === filters.status);
    }
    if (filters.dateRange) {
      const now = new Date();
      filtered = filtered.filter(item => {
        const itemDate = new Date(item.date);
        const diffTime = Math.abs(now.getTime() - itemDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        switch (filters.dateRange) {
          case 'today':
            return diffDays <= 1;
          case 'week':
            return diffDays <= 7;
          case 'month':
            return diffDays <= 30;
          case '3months':
            return diffDays <= 90;
          default:
            return true;
        }
      });
    }

    setFilteredItems(filtered);
  };

  const handleViewDetails = (item: Item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'lost':
        return 'bg-red-100 text-red-800';
      case 'found':
        return 'bg-green-100 text-green-800';
      case 'claimed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Browse Items</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Search through lost and found items reported by the UMT community
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredItems.length} of {allItems.length} items
          </p>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {item.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Tag className="w-4 h-4 mr-2" />
                    <span className="capitalize">{item.category.replace('-', ' ')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="capitalize">{item.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{formatDate(item.date)}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-blue-50 hover:border-blue-300"
                    onClick={() => handleViewDetails(item)}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => handleViewDetails(item)}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat
                  </Button>
                </div>

                <div className="mt-3 pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    Reported by: <span className="font-medium">{item.reporter}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No items found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Try adjusting your search criteria or browse all items to find what you're looking for.
            </p>
          </div>
        )}

        {/* Item Detail Modal */}
        {selectedItem && (
          <ItemDetailModal
            item={selectedItem}
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
              setSelectedItem(null);
            }}
          />
        )}
      </div>
    </Layout>
  );
};

export default Browse;
