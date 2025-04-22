"use client";
import Link from 'next/link';
import Image from 'next/image';
import Container from '../ui/Container';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { typography } from '@/styles/typography';
import Logo from '@/images/logo1.svg'; 
import { useEffect, useState } from 'react';

interface StatusMessage {
  type: 'success' | 'error';
  message: string;
}

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<StatusMessage | null>(null);
  const [loading, setLoading] = useState(false);

  interface SubscribeResponse {
    error?: string;
  }
  
  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus({ type: 'error', message: 'Please enter a valid email' });
      return;
    }

    setLoading(true);
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data: SubscribeResponse = await response.json();
      
      if (response.ok) {
        setStatus({ type: 'success', message: 'Subscription successful!' });
        setEmail('');
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to subscribe. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-gray-200 py-4">
      <Container marginLeft="5vw" marginRight="5vw">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="mb-4">
              <Link href="/" className="flex items-center h-22">
                <Image
                  src={Logo}
                  alt="StylTara Studios"
                  width={170}
                  height={60}
                  className="object-contain"
                />
              </Link>
            </div>
            <p className={`${typography.body.base} text-gray-900 mb-4`}>Style that makes you shine. </p>
          </div>
        

          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className={`${typography.body.base} space-y-2`}>
              <li>
                <Link href="/aboutus" className="text-gray-900 hover:text-black">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-900 hover:text-black">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-900 hover:text-black">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-900 hover:text-black">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-4">SOCIAL MEDIA</h4>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" aria-label="Facebook" className="bg-white p-2 rounded-full">
                <FaFacebookF className="w-5 h-5" />
              </Link>
              <Link href="https://linkedin.com" aria-label="LinkedIn" className="bg-white p-2 rounded-full">
                <FaLinkedinIn className="w-5 h-5" />
              </Link>
              <Link href="https://instagram.com" aria-label="Instagram" className="bg-white p-2 rounded-full">
                <FaInstagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="col-span-1">
            <h6 className="font-bold text-lg mb-4">SUBSCRIBE TO OUR NEWSLETTER</h6>
            <p className={`${typography.body.base} text-gray-900 mb-4`}>
              *Stay chic, stay updated.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col">
              <div className="flex">
                <input 
                  type="email"
                  placeholder="Enter your e-mail"
                  className="mr-4 px-4 py-2 w-full rounded-full focus:outline-none border border-gray-800 bg-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button 
                  type="submit" 
                  className={`bg-black text-white rounded-full p-3 flex items-center justify-center ${loading ? 'opacity-70' : ''}`}
                  disabled={loading}
                  aria-label="Subscribe"
                >
                  {loading ? (
                    <div className="h-5 w-5 border-t-2 border-white rounded-full animate-spin"></div>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              </div>
              
                {status && (
                <div className={`mt-2 text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  {status.message}
                </div>
                )}
                
            </form>
          </div>
        </div>
        <div className={`${typography.body.base} mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center`}>
          <div className="text-gray-900 text-sm">
            © 2025 WebApp. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-900 hover:text-black text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-900 hover:text-black text-sm">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-900 hover:text-black text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
        
      </Container>
    </footer>
  );
};

export default Footer;