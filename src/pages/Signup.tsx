
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff, Phone, University, Shield, GraduationCap } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/sonner';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    studentId: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => {
    return email.endsWith('@umt.edu.pk');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      toast.error('Please use your UMT email address (@umt.edu.pk)');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (formData.password.length < 8) {
      toast.error('Password must be at least 8 characters long');
      return;
    }

    setIsLoading(true);
    
    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Account created successfully! Please check your email for verification.');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative py-12 overflow-hidden">
      {/* Background Image with Enhanced Blur */}
      <div className="fixed inset-0 z-[-2]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          }}
        />
        <div className="absolute inset-0 backdrop-blur-md bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/30 to-indigo-900/50" />
      </div>

      {/* Floating Elements */}
      <div className="fixed top-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-500" />
      <div className="fixed bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      
      {/* Signup Form */}
      <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 animate-scale-in relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-purple-500/30">
            <GraduationCap className="text-white w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
            Join UMT Portal
          </h1>
          <p className="text-purple-100/80 text-lg">Create your Lost & Found account</p>
          <div className="flex items-center justify-center space-x-2 mt-4 text-sm text-purple-200/70">
            <Shield className="w-4 h-4" />
            <span>Secure Registration Process</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative group">
            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-200/70 w-5 h-5 group-focus-within:text-purple-300 transition-colors" />
            <Input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="pl-12 h-12 bg-white/10 border-white/20 text-white placeholder:text-purple-200/50 focus:border-purple-400 focus:bg-white/15 rounded-xl backdrop-blur-sm"
              required
            />
          </div>

          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-200/70 w-5 h-5 group-focus-within:text-purple-300 transition-colors" />
            <Input
              type="email"
              placeholder="UMT Email (@umt.edu.pk)"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="pl-12 h-12 bg-white/10 border-white/20 text-white placeholder:text-purple-200/50 focus:border-purple-400 focus:bg-white/15 rounded-xl backdrop-blur-sm"
              required
            />
          </div>

          <div className="relative group">
            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-200/70 w-5 h-5 group-focus-within:text-purple-300 transition-colors" />
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="pl-12 h-12 bg-white/10 border-white/20 text-white placeholder:text-purple-200/50 focus:border-purple-400 focus:bg-white/15 rounded-xl backdrop-blur-sm"
              required
            />
          </div>

          <Select onValueChange={(value) => handleInputChange('role', value)}>
            <SelectTrigger className="h-12 bg-white/10 border-white/20 text-white focus:border-purple-400 rounded-xl backdrop-blur-sm">
              <SelectValue placeholder="Select your role" className="text-purple-200/50" />
            </SelectTrigger>
            <SelectContent className="bg-white/95 backdrop-blur-xl border-white/20">
              <SelectItem value="student">Student</SelectItem>
              <SelectItem value="faculty">Faculty</SelectItem>
              <SelectItem value="staff">Staff</SelectItem>
            </SelectContent>
          </Select>

          {formData.role === 'student' && (
            <Input
              type="text"
              placeholder="Student ID"
              value={formData.studentId}
              onChange={(e) => handleInputChange('studentId', e.target.value)}
              className="h-12 bg-white/10 border-white/20 text-white placeholder:text-purple-200/50 focus:border-purple-400 focus:bg-white/15 rounded-xl backdrop-blur-sm"
              required
            />
          )}

          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-200/70 w-5 h-5 group-focus-within:text-purple-300 transition-colors" />
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password (min 8 characters)"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="pl-12 pr-12 h-12 bg-white/10 border-white/20 text-white placeholder:text-purple-200/50 focus:border-purple-400 focus:bg-white/15 rounded-xl backdrop-blur-sm"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-200/70 hover:text-purple-300 transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-200/70 w-5 h-5 group-focus-within:text-purple-300 transition-colors" />
            <Input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              className="pl-12 pr-12 h-12 bg-white/10 border-white/20 text-white placeholder:text-purple-200/50 focus:border-purple-400 focus:bg-white/15 rounded-xl backdrop-blur-sm"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-200/70 hover:text-purple-300 transition-colors"
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          <Button 
            type="submit" 
            className="w-full h-14 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02]"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Creating Account...</span>
              </div>
            ) : (
              'Create Account'
            )}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-purple-100/80">
            Already have an account?{' '}
            <Link to="/login" className="text-purple-300 hover:text-purple-200 font-semibold underline underline-offset-2 hover:underline-offset-4 transition-all">
              Sign in here
            </Link>
          </p>
        </div>

        {/* Security Badge */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
            <University className="w-4 h-4 text-green-400" />
            <span className="text-xs text-purple-100/70">UMT Community Exclusive</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
