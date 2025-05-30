import React, { useState, useEffect } from 'react';
import { Eye, MessageCircle, Edit, Trash2, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import Layout from '../components/Layout';
import MatchingSystem from '../components/MatchingSystem';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('myPosts');
  const [userReports, setUserReports] = useState<any[]>([]);

  useEffect(() => {
    // Load user reports from localStorage
    const reports = JSON.parse(localStorage.getItem('userReports') || '[]');
    setUserReports(reports);
  }, []);

  const handleDeleteReport = (id: string) => {
    const updatedReports = userReports.filter(report => report.id !== id);
    setUserReports(updatedReports);
    localStorage.setItem('userReports', JSON.stringify(updatedReports));
    toast.success('Report deleted successfully!');
  };

  const handleEditReport = (id: string) => {
    toast.info('Edit functionality will redirect to edit form');
    // In real app, this would navigate to edit form
  };

  const myPosts = [
    {
      id: 1,
      title: "iPhone 13 Pro - Blue",
      type: "lost",
      status: "active",
      views: 24,
      messages: 3,
      date: "2024-01-15",
      location: "Library - Ground Floor"
    },
    {
      id: 2,
      title: "Black Wallet Found",
      type: "found", 
      status: "claimed",
      views: 18,
      messages: 5,
      date: "2024-01-10",
      location: "Cafeteria"
    }
  ];

  const claimRequests = [
    {
      id: 1,
      itemTitle: "Red USB Drive - 32GB",
      requester: "Ali Hassan",
      status: "pending",
      date: "2024-01-16",
      message: "I believe this is my USB drive. It has my project files on it."
    },
    {
      id: 2,
      itemTitle: "Student ID Card",
      requester: "Sara Ahmed", 
      status: "approved",
      date: "2024-01-14",
      message: "This is definitely my ID card. I can provide additional verification."
    }
  ];

  const myRequests = [
    {
      id: 1,
      itemTitle: "iPhone 13 Pro - Blue",
      owner: "Ahmed Khan",
      status: "pending",
      date: "2024-01-16",
      message: "I think this might be my phone. I lost it in the library yesterday."
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <AlertCircle className="w-4 h-4 text-blue-500" />;
      case 'claimed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'approved':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-blue-100 text-blue-800';
      case 'claimed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'approved':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="min-h-screen py-8 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard</h1>
            <p className="text-lg text-gray-600">Manage your posts and track claim requests</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-200/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Total Posts</p>
                  <p className="text-2xl font-bold text-gray-900">{userReports.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-200/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Active Posts</p>
                  <p className="text-2xl font-bold text-gray-900">8</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-200/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Pending Claims</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-200/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Items Returned</p>
                  <p className="text-2xl font-bold text-gray-900">4</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>

          {/* AI Matching System */}
          <div className="mb-8">
            <MatchingSystem />
          </div>

          {/* Tabs */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden">
            <div className="border-b border-gray-200/50">
              <nav className="flex space-x-8 px-6">
                <button
                  onClick={() => setActiveTab('myPosts')}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === 'myPosts'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  My Posts
                </button>
                <button
                  onClick={() => setActiveTab('claimRequests')}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === 'claimRequests'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Claim Requests
                </button>
                <button
                  onClick={() => setActiveTab('myRequests')}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === 'myRequests'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  My Requests
                </button>
              </nav>
            </div>

            <div className="p-6">
              {/* My Posts Tab */}
              {activeTab === 'myPosts' && (
                <div className="space-y-4">
                  {userReports.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-gray-600">No reports submitted yet. <a href="/report" className="text-blue-600 hover:underline">Submit your first report</a></p>
                    </div>
                  ) : (
                    userReports.map((report) => (
                      <div key={report.id} className="bg-gray-50/50 rounded-xl p-6 hover:bg-gray-100/50 transition-colors duration-200">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-lg font-semibold text-gray-900">{report.title}</h3>
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                report.type === 'lost' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                              }`}>
                                {report.type === 'lost' ? 'Lost' : 'Found'}
                              </span>
                              <span className="px-2 py-1 text-xs rounded-full flex items-center space-x-1 bg-blue-100 text-blue-800">
                                <AlertCircle className="w-3 h-3" />
                                <span>Active</span>
                              </span>
                            </div>
                            <p className="text-gray-600 text-sm">{report.location} • {report.date}</p>
                            <p className="text-gray-700 mt-2">{report.description}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              onClick={() => handleEditReport(report.id)}
                              variant="outline"
                              size="sm"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              onClick={() => handleDeleteReport(report.id)}
                              variant="outline"
                              size="sm"
                              className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

              {/* Claim Requests Tab */}
              {activeTab === 'claimRequests' && (
                <div className="space-y-4">
                  {claimRequests.map((request) => (
                    <div key={request.id} className="bg-gray-50/50 rounded-xl p-6 hover:bg-gray-100/50 transition-colors duration-200">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{request.itemTitle}</h3>
                            <span className={`px-2 py-1 text-xs rounded-full flex items-center space-x-1 ${getStatusColor(request.status)}`}>
                              {getStatusIcon(request.status)}
                              <span className="capitalize">{request.status}</span>
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mb-2">Request by {request.requester} • {request.date}</p>
                          <p className="text-gray-700">{request.message}</p>
                        </div>
                        {request.status === 'pending' && (
                          <div className="flex items-center space-x-2 ml-4">
                            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm">
                              Approve
                            </button>
                            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm">
                              Decline
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* My Requests Tab */}
              {activeTab === 'myRequests' && (
                <div className="space-y-4">
                  {myRequests.map((request) => (
                    <div key={request.id} className="bg-gray-50/50 rounded-xl p-6 hover:bg-gray-100/50 transition-colors duration-200">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{request.itemTitle}</h3>
                            <span className={`px-2 py-1 text-xs rounded-full flex items-center space-x-1 ${getStatusColor(request.status)}`}>
                              {getStatusIcon(request.status)}
                              <span className="capitalize">{request.status}</span>
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mb-2">Request to {request.owner} • {request.date}</p>
                          <p className="text-gray-700">{request.message}</p>
                        </div>
                        <button className="ml-4 p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                          <MessageCircle className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
