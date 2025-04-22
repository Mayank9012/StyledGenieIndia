"use client";
import Link from 'next/link';
import Image from 'next/image';
import { CgBell } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Container from '../ui/Container';
import { useState, useEffect } from 'react';
import { typography } from '@/styles/typography';
import Logo from '@/images/logo1.svg'; 
import { colors } from '@/styles/colors';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsDrawerOpen(false);
      }
    };

    const handleClickOutside = () => {
      setIsDrawerOpen(false);
    };

    if (isDrawerOpen) {
      document.addEventListener('keydown', handleEscape);
      setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
      }, 100);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDrawerOpen]);

  return (
    <header className={`py-2 border-b border-gray-200`} /*style={{ backgroundColor: colors.primary.bone }}*/> 
      <Container marginLeft="5vw" marginRight="5vw">
        <div className="flex items-center justify-between h-14"> 
          <div className="flex items-center">
            <button 
              className="md:hidden mr-4 text-gray-700" 
              onClick={(e) => {
                e.stopPropagation();
                setIsDrawerOpen(!isDrawerOpen);
              }}
              aria-label="Toggle menu"
            >
              <HiMenu className="w-6 h-6" />
            </button>
            
            <Link href="/" className="flex h-12">
                <span className=" flex">
                  <Image
                    src={Logo}
                    alt="StylTara Studios" 
                    width={70} 
                    height={35}
                    className="h-auto w-auto"
                  />
                </span>
            </Link>
          </div>

          <nav className={`${typography.body.base} hidden md:flex items-center space-x-8`}>
            <Link href="/services" className="text-gray-700 hover:text-black">
              Services
            </Link>
            <Link href="/freelance" className="text-gray-700 hover:text-black">
              Freelance
            </Link>
            <Link href="/aboutus" className="text-gray-700 hover:text-black">
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-black" aria-label="Notifications">
              <CgBell className="w-5 h-5" />
            </button>
            <button className="text-gray-700 hover:text-black" aria-label="Shopping cart">
              <MdOutlineShoppingCart className="w-5 h-5" />
            </button>
            <Link 
              href="/auth" 
              className="hidden md:inline-block bg-gray-800 hover:bg-black text-center text-white px-0 py-3 rounded-md transition-colors w-[167px] h-[52px] items-center justify-center justify-items-center "
            >
             <p className={`${typography.body.B3}`}> Login/ Sign up</p> 
            </Link>
          </div>
        </div>
      </Container>

      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl">Menu</div>
            <button 
              className="text-gray-700" 
              onClick={() => setIsDrawerOpen(false)}
              aria-label="Close menu"
            >
              <IoMdClose className="w-6 h-6" />
            </button>
          </div>
        </div>
        <nav className="py-4">
          <Link 
            href="/services" 
            className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsDrawerOpen(false)}
          >
            Services
          </Link>
          <Link 
            href="/freelance" 
            className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsDrawerOpen(false)}
          >
            Freelance
          </Link>
          <Link 
            href="/aboutus" 
            className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsDrawerOpen(false)}
          >
            About
          </Link>
          <div className="px-4 pt-4">
            <Link 
              href="/auth" 
              className={`${typography.body.base} block w-full bg-gray-800 hover:bg-black text-white px-5 py-2 rounded-md text-center transition-colors`}
              onClick={() => setIsDrawerOpen(false)}
            >
              Login / Sign up
            </Link>
          </div>
        </nav>
      </div>
      
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-opacity-25 bg-gray-0 z-40"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;