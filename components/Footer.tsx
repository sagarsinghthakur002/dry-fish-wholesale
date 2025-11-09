"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Fish, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-ocean-900 text-white mt-auto"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Fish className="w-6 h-6" />
              <h3 className="text-xl font-bold">Ocean Catch</h3>
            </div>
            <p className="text-ocean-200 mb-4">
              Premium quality dry fish wholesale supplier. Serving businesses with the finest seafood products for over two decades.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ocean-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ocean-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ocean-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-ocean-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Products</h4>
            <ul className="space-y-2 text-ocean-200">
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Dried Cod
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Sardines
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Anchovies
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Tuna
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-3 text-ocean-200">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>info@oceancatch.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>123 Harbor Street, Coastal City, CC 12345</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-ocean-800 mt-8 pt-8 text-center text-ocean-300">
          <p>&copy; {new Date().getFullYear()} Ocean Catch. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}

