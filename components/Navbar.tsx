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
      className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-[#041C32]/95 via-[#04293A]/95 to-[#064663]/95 shadow-xl border-b border-white/10"
    >
      <div className="container mx-auto  px-4">
        <div className="flex items-center justify-between mx-5 lg:px-10 font-bold">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-[1.3rem] font-bold text-white"
          >
            <img
              src="/logo.png"
              className="lg:w-24 lg:h-24 w-20 h-20 object-contain"
              alt="Logo"
            />
            <span className="tracking-wide">
              Miksani Supplier
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">

            <Link
              href="/"
              className="text-white hover:text-[#F2A900] transition-all duration-300"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-white hover:text-[#F2A900] transition-all duration-300"
            >
              About
            </Link>

            <Link
              href="/products"
              className="text-white hover:text-[#F2A900] transition-all duration-300"
            >
              Products
            </Link>

            <Link
              href="/contact"
              className="text-white hover:text-[#F2A900] transition-all duration-300"
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
              className="w-7 h-7"
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
            className="md:hidden mt-4 mx-5 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 p-5 space-y-4"
          >

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-[#F2A900] transition-colors"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-[#F2A900] transition-colors"
            >
              About
            </Link>

            <Link
              href="/products"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-[#F2A900] transition-colors"
            >
              Products
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-[#F2A900] transition-colors"
            >
              Contact
            </Link>

          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}