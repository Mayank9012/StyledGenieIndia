import Link from 'next/link';
import Container from '../ui/Container';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4">
      <Container marginLeft="3vw" marginRight="3vw">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="mb-4">
              <Link href="/" className="flex items-center">
                <div className="font-bold text-xl">
                  <span className="flex items-center">
                    <span className="font-black">Logo</span>ipsum
                  </span>
                </div>
              </Link>
            </div>
            <p className="text-gray-600 mb-4">Company Slogan / Tagline</p>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-black">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-black">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-black">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-black">
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
            <h4 className="font-bold text-lg mb-4">SUBSCRIBE TO OUR NEWSLETTER</h4>
            <div className="flex">
            <input
                type="email"
                placeholder="Enter your e-mail"
                className="px-4 py-2 w-full rounded-l-full focus:outline-none border border-gray-800"
            />
              <button 
                type="submit" 
                className="bg-black text-white rounded-r-full px-4 flex items-center justify-center"
                aria-label="Subscribe"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 text-sm">
            © 2025 WebApp. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-600 hover:text-black text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-black text-sm">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-600 hover:text-black text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
