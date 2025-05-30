import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, University, Shield } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    return email.endsWith('@umt.edu.pk');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      toast.error('Please use your UMT email address (@umt.edu.pk)');
      return;
    }

    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      
      // Set login state in localStorage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userName', email.split('@')[0]);
      
      toast.success('Login successful! Welcome back.');
      
      // Redirect to home page
      navigate('/');
      
      // Trigger a page reload to update navbar state
      window.location.reload();
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Enhanced Blur */}
      <div className="fixed inset-0 z-[-2]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          }}
        />
        <div className="absolute inset-0 backdrop-blur-md bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/30 to-indigo-900/50" />
      </div>

      {/* Floating Elements */}
      <div className="fixed top-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="fixed bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Login Form */}
      <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 animate-scale-in relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-blue-500/30">
            <University className="text-white w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-blue-100/80 text-lg">Sign in to UMT Lost & Found Portal</p>
          <div className="flex items-center justify-center space-x-2 mt-4 text-sm text-blue-200/70">
            <Shield className="w-4 h-4" />
            <span>Secure UMT Authentication</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-200/70 w-5 h-5 group-focus-within:text-blue-300 transition-colors" />
            <Input
              type="email"
              placeholder="Enter your UMT email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:bg-white/15 rounded-xl backdrop-blur-sm"
              required
            />
          </div>

          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-200/70 w-5 h-5 group-focus-within:text-blue-300 transition-colors" />
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-12 pr-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:bg-white/15 rounded-xl backdrop-blur-sm"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-200/70 hover:text-blue-300 transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          <Button 
            type="submit" 
            className="w-full h-14 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02]"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Signing in...</span>
              </div>
            ) : (
              'Sign In to Portal'
            )}
          </Button>
        </form>

        <div className="mt-8 text-center space-y-4">
          <p className="text-blue-100/80">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-300 hover:text-blue-200 font-semibold underline underline-offset-2 hover:underline-offset-4 transition-all">
              Sign up here
            </Link>
          </p>
          
          <Link to="/forgot-password" className="block text-sm text-blue-200/70 hover:text-blue-200 transition-colors">
            Forgot your password?
          </Link>
        </div>

        {/* Security Badge */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-xs text-blue-100/70">UMT Verified Domain Required</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
