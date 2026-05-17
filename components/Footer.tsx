"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-[#041C32] via-[#04293A] to-[#064663] text-white mt-auto border-t border-white/10"
    >
      <div className="container mx-auto px-4 py-14">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:px-10">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo.png"
                className="w-16 h-16 object-contain"
                alt="Logo"
              />

              <h3 className="text-2xl font-bold tracking-wide">
                Miksani Supplier
              </h3>
            </div>

            <p className="text-gray-300 leading-relaxed mb-5">
              Premium quality dry fish wholesale supplier serving
              restaurants, retailers, and seafood businesses with
              trusted quality products for over two decades.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#F97316] p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#F97316] p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#F97316] p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-5 text-xl text-[#F2A900]">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-300">

              <li>
                <Link
                  href="/"
                  className="hover:text-[#F2A900] transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="hover:text-[#F2A900] transition-colors"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-[#F2A900] transition-colors"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#F2A900] transition-colors"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-5 text-xl text-[#F2A900]">
              Products
            </h4>

            <ul className="space-y-3 text-gray-300">

              <li>
                <Link
                  href="/products"
                  className="hover:text-[#F2A900] transition-colors"
                >
                  Dried Cod
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="hover:text-[#F2A900] transition-colors"
                >
                  Sardines
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="hover:text-[#F2A900] transition-colors"
                >
                  Anchovies
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="hover:text-[#F2A900] transition-colors"
                >
                  Tuna
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-5 text-xl text-[#F2A900]">
              Contact
            </h4>

            <ul className="space-y-4 text-gray-300">

              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#F97316] mt-1" />
                <span>+977 9813773786</span>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#F97316] mt-1" />
                <span>info@gmail.com</span>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F97316] mt-1" />
                <span>Kuleshwor, Balkhu, Kathmandu</span>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-400">

          <p>
            © {new Date().getFullYear()} Miksani Supplier. All rights reserved.
          </p>

        </div>
      </div>
    </motion.footer>
  );
}