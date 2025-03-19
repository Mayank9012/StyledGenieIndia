import Link from 'next/link';
import Image from 'next/image';
import { FaShoppingCart, FaBell } from 'react-icons/fa';
import Container from '../ui/Container';

const Header = () => {
  return (
    <header className="py-4 border-b border-gray-200">
      <Container marginLeft="3vw" marginRight="3vw">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="font-bold text-2xl">
                <span className="flex items-center">
                  <span className="font-black">Logo</span>ipsum
                </span>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-gray-700 hover:text-black">
              Services
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-black">
              Pricing
            </Link>
            <Link href="/freelance" className="text-gray-700 hover:text-black">
              Freelance
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-black">
              About
            </Link>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-black">
                More
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  <Link href="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Blog
                  </Link>
                  <Link href="/resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Resources
                  </Link>
                  <Link href="/careers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Careers
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-black" aria-label="Notifications">
              <FaBell className="w-5 h-5" />
            </button>
            <button className="text-gray-700 hover:text-black" aria-label="Shopping cart">
              <FaShoppingCart className="w-5 h-5" />
            </button>
            <Link 
              href="/login" 
              className="hidden md:inline-block bg-gray-800 hover:bg-black text-white px-4 py-2 rounded-md transition-colors"
            >
              Login/ Sign up
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;