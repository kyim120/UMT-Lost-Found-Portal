
import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';

interface MatchingSuggestion {
  id: string;
  lostItem: {
    id: string;
    title: string;
    description: string;
    reporter: string;
  };
  foundItem: {
    id: string;
    title: string;
    description: string;
    reporter: string;
  };
  matchScore: number;
  keywords: string[];
}

const MatchingSystem = () => {
  const [matches, setMatches] = useState<MatchingSuggestion[]>([
    {
      id: '1',
      lostItem: {
        id: 'lost-1',
        title: 'iPhone 13 Pro - Blue',
        description: 'Lost my blue iPhone 13 Pro in the library',
        reporter: 'Ahmad Hassan'
      },
      foundItem: {
        id: 'found-1',
        title: 'Blue Phone Found',
        description: 'Found a blue smartphone in library ground floor',
        reporter: 'Sarah Ahmed'
      },
      matchScore: 85,
      keywords: ['blue', 'phone', 'library']
    },
    {
      id: '2',
      lostItem: {
        id: 'lost-2',
        title: 'Black Wallet',
        description: 'Lost black leather wallet with ID cards',
        reporter: 'Ali Raza'
      },
      foundItem: {
        id: 'found-2',
        title: 'Leather Wallet Found',
        description: 'Found a black leather wallet in cafeteria',
        reporter: 'Maria Khan'
      },
      matchScore: 92,
      keywords: ['black', 'wallet', 'leather']
    }
  ]);

  const handleNotifyUsers = (matchId: string) => {
    const match = matches.find(m => m.id === matchId);
    if (match) {
      toast.success(`Notification sent to ${match.lostItem.reporter} and ${match.foundItem.reporter}!`);
      // In real app, this would send actual notifications
    }
  };

  const getMatchColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-100';
    if (score >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">AI Matching System</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <AlertCircle className="w-4 h-4" />
          <span>{matches.length} potential matches found</span>
        </div>
      </div>

      <div className="space-y-4">
        {matches.map((match) => (
          <div key={match.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${getMatchColor(match.matchScore)}`}>
                    {match.matchScore}% Match
                  </span>
                  <div className="flex space-x-1">
                    {match.keywords.map((keyword, index) => (
                      <span key={index} className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <Button
                onClick={() => handleNotifyUsers(match.id)}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Notify Users
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Lost Item */}
              <div className="bg-red-50 p-3 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm font-medium text-red-800">Lost Item</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{match.lostItem.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{match.lostItem.description}</p>
                <p className="text-xs text-gray-500">Reported by: {match.lostItem.reporter}</p>
              </div>

              {/* Found Item */}
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-800">Found Item</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{match.foundItem.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{match.foundItem.description}</p>
                <p className="text-xs text-gray-500">Reported by: {match.foundItem.reporter}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {matches.length === 0 && (
        <div className="text-center py-8">
          <CheckCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Matches Found</h3>
          <p className="text-gray-600">AI will automatically detect potential matches when new items are reported.</p>
        </div>
      )}
    </div>
  );
};

export default MatchingSystem;
