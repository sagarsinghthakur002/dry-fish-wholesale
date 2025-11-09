"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Fish } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/95 backdrop-blur-sm shadow-md sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-ocean-700">
            <Fish className="w-8 h-8 text-ocean-600" />
            <span>Ocean Catch</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            <Link
              href="/"
              className="text-ocean-700 hover:text-coral-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-ocean-700 hover:text-coral-600 transition-colors font-medium"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-ocean-700 hover:text-coral-600 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-ocean-700 hover:text-coral-600 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-ocean-700"
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
              className="block text-ocean-700 hover:text-coral-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={() => setIsOpen(false)}
              className="block text-ocean-700 hover:text-coral-600 transition-colors font-medium"
            >
              Products
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block text-ocean-700 hover:text-coral-600 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-ocean-700 hover:text-coral-600 transition-colors font-medium"
            >
              Contact
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

