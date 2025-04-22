"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setErrors({
      name: '',
      email: '',
      mobile: '',
      password: '',
      confirmPassword: ''
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  useEffect(() => {
    validateForm();
  }, [formData, isLogin]);

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      mobile: '',
      password: '',
      confirmPassword: ''
    };

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.password && formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin) {
      if (formData.name && formData.name.length < 2) {
        newErrors.name = 'Name must be at least 2 characters';
      }

      if (formData.mobile && !/^\d{10}$/.test(formData.mobile)) {
        newErrors.mobile = 'Please enter a valid 10-digit mobile number';
      }

      if (formData.confirmPassword && formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const hasErrors = Object.values(errors).some(error => error !== '');
    
    if (!hasErrors) {
      if (isLogin) {
        console.log('Logging in with', { 
          email: formData.email, 
          password: formData.password 
        });
      } else {
        console.log('Registering with', { 
          name: formData.name, 
          email: formData.email,
          mobile: formData.mobile, 
          password: formData.password 
        });
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4 py-4 mb-15 mt-7">
      <div className="w-full max-w-md mb-15 bg-white rounded-lg inset-shadow-sm shadow-2xl p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">
          {isLogin ? 'Login' : 'Create Account'}
        </h1>
        <p className="text-center text-gray-600 mb-6">
          {isLogin 
            ? 'Welcome back! Please login to your account.' 
            : 'Create a new account to get started.'}
        </p>
        
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                }`}
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>
          )}
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
              }`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>
          
          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.mobile ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                }`}
              />
              {errors.mobile && <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>}
            </div>
          )}
          
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.password ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                }`}
              />
            </div>
            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
          </div>
          
          {!isLogin && (
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.confirmPassword ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                  }`}
                />
              </div>
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
            </div>
          )}
          
          <button 
            type="submit" 
            className="w-full bg-gray-600 hover:bg-gray-400 text-white font-medium py-2 px-4 rounded-md transition duration-200"
          >
            {isLogin ? 'Login' : 'Create'}
          </button>
        </form>
        
        <button 
          onClick={handleToggle}
          className="w-full mt-4 text-gray-600 hover:text-black text-sm font-medium py-2 text-center"
        >
          {isLogin ? 'New user? Create an account' : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
};

export default Auth;