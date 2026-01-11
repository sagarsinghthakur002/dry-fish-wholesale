"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className=" bg-ocean-900 backdrop-blur-md shadow-md sticky top-0 z-50 text-white"
    >
      <div className="container mx-auto  py-4  ">
        <div className="flex items-center justify-between mx-5 px-10 font-bold">
          <Link href="/" className="flex items-center text-[1.3rem] font-bold text-white">
            <img src="/logo.png" className="lg:w-28 lg:h-28 w-24 h-24 -my-9  text-white" />
            <span>Miksani Supplier</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            <Link
              href="/"
              className=" hover:text-coral-600 transition-colors font-bold text-white"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-white hover:text-coral-600 transition-colors font-bo
            ld"
            >
              About
            </Link>

            <Link
              href="/products"
              className="text-white hover:text-coral-600 transition-colors font-bold"
            >
              Products
            </Link>

            <Link
              href="/contact"
              className="text-white hover:text-coral-600 transition-colors font-bold"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden mt-4 pb-4 space-y-3"
          >
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-coral-600 transition-colors font-bold"
            >
              Home
            </Link>


            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-coral-600 transition-colors font-bold"
            >
               About
            </Link>


            <Link
              href="/products"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-coral-600 transition-colors font-bold"
            >
              Products
            </Link>

             
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-coral-600 transition-colors font-bold"
            >
              Contact
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

