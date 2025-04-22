"use client";
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  portfolioLink: string;
  socialMediaLinks: string;
  location: string;
  specialization: string;
  experience: string;
  preferredStylingAreas: string[];
  rates: string;
  availability: string;
  references: string;
  agreeToTerms: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  portfolioLink?: string;
  location?: string;
  specialization?: string;
  experience?: string;
  preferredStylingAreas?: string;
  availability?: string;
  agreeToTerms?: string;
}

const StylistRegistrationForm = () => {
  const router = useRouter();
  
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    portfolioLink: '',
    socialMediaLinks: '',
    location: '',
    specialization: '',
    experience: '',
    preferredStylingAreas: [],
    rates: '',
    availability: '',
    references: '',
    agreeToTerms: false
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Specialization options
  const specializationOptions = [
    'Personal Styling', 'Corporate Styling', 'Editorial', 'Costume Styling', 'Runway Styling', 'Others'
  ];
  
  // Preferred Styling Areas options
  const stylingAreasOptions = [
    'Wardrobe Styling', 'Event Styling', 'Fashion Shows', 'Photo Shoots', 
    'Music Videos', 'Red Carpet', 'Personal Shopping', 'TV/Film', 'E-commerce'
  ];
  
  // Availability options
  const availabilityOptions = ['Full-time', 'Part-time', 'Project-Based', 'Weekends Only'];
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    if (name === 'preferredStylingAreas') {
      // Handle the checkbox group for preferred styling areas
      const selectedValue = value;
      const isChecked = (e.target as HTMLInputElement).checked;
      
      setFormData(prev => ({
        ...prev,
        preferredStylingAreas: isChecked 
          ? [...prev.preferredStylingAreas, selectedValue]
          : prev.preferredStylingAreas.filter(area => area !== selectedValue)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
    
    validateField(name, type === 'checkbox' ? checked : value);
  };
  
  const validateField = (name: string, value: any): boolean => {
    let isValid = true;
    const newErrors = { ...errors };
    
    switch (name) {
      case 'fullName':
        if (!value.trim()) {
          newErrors.fullName = 'Full name is required';
          isValid = false;
        } else if (value.trim().length < 2) {
          newErrors.fullName = 'Name must be at least 2 characters';
          isValid = false;
        } else {
          delete newErrors.fullName;
        }
        break;
        
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          newErrors.email = 'Email is required';
          isValid = false;
        } else if (!emailRegex.test(value)) {
          newErrors.email = 'Please enter a valid email address';
          isValid = false;
        } else {
          delete newErrors.email;
        }
        break;
        
      case 'phone':
        const phoneRegex = /^\+?[0-9\s\-()]{8,20}$/;
        if (!value.trim()) {
          newErrors.phone = 'Phone number is required';
          isValid = false;
        } else if (!phoneRegex.test(value)) {
          newErrors.phone = 'Please enter a valid phone number';
          isValid = false;
        } else {
          delete newErrors.phone;
        }
        break;
        
      case 'location':
        if (!value.trim()) {
          newErrors.location = 'Location is required';
          isValid = false;
        } else {
          delete newErrors.location;
        }
        break;
        
      case 'specialization':
        if (!value) {
          newErrors.specialization = 'Please select a specialization';
          isValid = false;
        } else {
          delete newErrors.specialization;
        }
        break;
        
      case 'experience':
        if (!value.trim()) {
          newErrors.experience = 'Years of experience is required';
          isValid = false;
        } else {
          delete newErrors.experience;
        }
        break;
        
      case 'preferredStylingAreas':
        if (formData.preferredStylingAreas.length === -1) {
          newErrors.preferredStylingAreas = 'Please select at least one styling area';
          isValid = false;
        } else {
          delete newErrors.preferredStylingAreas;
        }
        break;
        
      case 'availability':
        if (!value) {
          newErrors.availability = 'Please select your availability';
          isValid = false;
        } else {
          delete newErrors.availability;
        }
        break;
        
      case 'agreeToTerms':
        if (!value) {
          newErrors.agreeToTerms = 'You must agree to the terms and conditions';
          isValid = false;
        } else {
          delete newErrors.agreeToTerms;
        }
        break;
        
      default:
        break;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const validateForm = (): boolean => {
    let isValid = true;
    
    const fields: (keyof FormData)[] = [
      'fullName', 'email', 'phone', 'location',
      'specialization', 'experience', 'availability', 'agreeToTerms'
    ];
    
    // Validate preferred styling areas separately
    if (formData.preferredStylingAreas.length === 0) {
      setErrors(prev => ({
        ...prev,
        preferredStylingAreas: 'Please select at least one styling area'
      }));
      isValid = false;
    }
    
    fields.forEach(field => {
      const valid = validateField(
        field, 
        field === 'agreeToTerms' ? formData[field] : formData[field]
      );
      if (!valid) isValid = false;
    });
    
    return isValid;
  };
  
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  if (!validateForm()) {
    toast.error('Please fix the errors before submitting');
    return;
  }
  
  setIsSubmitting(true);
  
  try {
    const formDataToSubmit = new FormData();
    
    // Add text fields
    Object.keys(formData).forEach(key => {
      if (key !== 'agreeToTerms' && key !== 'preferredStylingAreas') {
        formDataToSubmit.append(key, formData[key as keyof FormData] as string);
      }
    });
    
    // Add preferredStylingAreas array
    formData.preferredStylingAreas.forEach((area, index) => {
      formDataToSubmit.append(`preferredStylingAreas[${index}]`, area);
    });
    
    // Add checkbox value
    formDataToSubmit.append('agreeToTerms', formData.agreeToTerms.toString());
    
    const response = await fetch('/api/stylists', {
      method: 'POST',
      body: formDataToSubmit, 
    });
    
    if (response.ok) {
      toast.success('Registration submitted successfully!');
      router.push('/registrationsuccess');
    } else {
      throw new Error('Failed to submit form');
    }
  } catch (error) {
    console.error('Submission error:', error);
    toast.error('There was an error submitting your registration');
  } finally {
    setIsSubmitting(false);
  }
};
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gray-600 py-6 px-8">
          <h1 className="text-2xl font-bold text-white">Freelance Stylist Registration</h1>
          <p className="text-indigo-100 mt-2">Join our network of professional stylists</p>
        </div>
        
        <form onSubmit={handleSubmit} className="py-8 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="col-span-1">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border ${
                  errors.fullName ? 'border-red-300 ring-red-500' : 'border-gray-300'
                } px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500`}
                placeholder="John Doe"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
              )}
            </div>
            
            {/* Email Address */}
            <div className="col-span-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border ${
                  errors.email ? 'border-red-300 ring-red-500' : 'border-gray-300'
                } px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
            
            {/* Phone Number */}
            <div className="col-span-1">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border ${
                  errors.phone ? 'border-red-300 ring-red-500' : 'border-gray-300'
                } px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500`}
                placeholder="+91 23456 78900"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>
            
            {/* Portfolio/Website Link */}
            <div className="col-span-1">
              <label htmlFor="portfolioLink" className="block text-sm font-medium text-gray-700">
                Styling Portfolio/Website Link
              </label>
              <input
                type="url"
                id="portfolioLink"
                name="portfolioLink"
                value={formData.portfolioLink}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                placeholder="https://yourportfolio.com"
              />
            </div>
            
            {/* Social Media Links */}
            <div className="col-span-2">
              <label htmlFor="socialMediaLinks" className="block text-sm font-medium text-gray-700">
                Social Media Links (Optional)
              </label>
              <input
                type="text"
                id="socialMediaLinks"
                name="socialMediaLinks"
                value={formData.socialMediaLinks}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                placeholder="LinkedIn, Instagram, TikTok (comma separated)"
              />
            </div>
            
            {/* Location */}
            <div className="col-span-1">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border ${
                  errors.location ? 'border-red-300 ring-red-500' : 'border-gray-300'
                } px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500`}
                placeholder="City, Country"
              />
              {errors.location && (
                <p className="mt-1 text-sm text-red-600">{errors.location}</p>
              )}
            </div>
            
            {/* Specialization */}
            <div className="col-span-1">
              <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">
                Specialization <span className="text-red-500">*</span>
              </label>
              <select
                id="specialization"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border ${
                  errors.specialization ? 'border-red-300 ring-red-500' : 'border-gray-300'
                } px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500`}
              >
                <option value="">Select specialization</option>
                {specializationOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.specialization && (
                <p className="mt-1 text-sm text-red-600">{errors.specialization}</p>
              )}
            </div>
            
            {/* Years of Experience */}
            <div className="col-span-1">
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                Years of Experience <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border ${
                  errors.experience ? 'border-red-300 ring-red-500' : 'border-gray-300'
                } px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500`}
                placeholder="e.g., 5 years"
              />
              {errors.experience && (
                <p className="mt-1 text-sm text-red-600">{errors.experience}</p>
              )}
            </div>
            
            {/* Rates */}
            <div className="col-span-1">
              <label htmlFor="rates" className="block text-sm font-medium text-gray-700">
                Rates (Optional, hourly/day rate)
              </label>
              <input
                type="text"
                id="rates"
                name="rates"
                value={formData.rates}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                placeholder="e.g., $100/hour or $800/day"
              />
            </div>
            
            {/* Availability */}
            <div className="col-span-1">
              <label htmlFor="availability" className="block text-sm font-medium text-gray-700">
                Availability <span className="text-red-500">*</span>
              </label>
              <select
                id="availability"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border ${
                  errors.availability ? 'border-red-300 ring-red-500' : 'border-gray-300'
                } px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500`}
              >
                <option value="">Select availability</option>
                {availabilityOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.availability && (
                <p className="mt-1 text-sm text-red-600">{errors.availability}</p>
              )}
            </div>
            
            {/* Preferred Styling Areas */}
            <div className="col-span-2">
              <fieldset>
                <legend className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Styling Areas <span className="text-red-500">*</span>
                </legend>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {stylingAreasOptions.map(area => (
                    <div key={area} className="flex items-center">
                      <input
                        id={`area-${area}`}
                        name="preferredStylingAreas"
                        value={area}
                        type="checkbox"
                        checked={formData.preferredStylingAreas.includes(area)}
                        onChange={handleChange}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor={`area-${area}`} className="ml-2 text-sm text-gray-700">
                        {area}
                      </label>
                    </div>
                  ))}
                </div>
                {errors.preferredStylingAreas && (
                  <p className="mt-1 text-sm text-red-600">{errors.preferredStylingAreas}</p>
                )}
              </fieldset>
            </div>
            
            {/* References/Client Testimonials */}
            <div className="col-span-2">
              <label htmlFor="references" className="block text-sm font-medium text-gray-700">
                References/Client Testimonials (Optional)
              </label>
              <textarea
                id="references"
                name="references"
                rows={3}
                value={formData.references}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                placeholder="Please provide details of previous clients or testimonials"
              />
            </div>
            
            {/* Agreement to Terms */}
            <div className="col-span-2">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="agreeToTerms"
                    name="agreeToTerms"
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className={`h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 ${
                      errors.agreeToTerms ? 'border-red-300 ring-red-500' : ''
                    }`}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agreeToTerms" className={`font-medium ${errors.agreeToTerms ? 'text-red-700' : 'text-gray-700'}`}>
                    I agree to the <a href="#" className="text-indigo-600 hover:text-indigo-500">Terms and Conditions</a> and <a href="#" className="text-indigo-600 hover:text-indigo-500">Privacy Policy</a> <span className="text-red-500">*</span>
                  </label>
                  {errors.agreeToTerms && (
                    <p className="mt-1 text-sm text-red-600">{errors.agreeToTerms}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                'Submit Registration'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StylistRegistrationForm;