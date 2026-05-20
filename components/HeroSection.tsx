"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Phone } from "lucide-react";
import bg from "@/public/bg.png";

export default function HeroSection() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url(${bg.src})`,
          }}
        />

        {/* Premium Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#041C32]/90 via-[#04293A]/75 to-[#064663]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
          >
            Premium Dry Fish
            <br />
            <span className="text-[#d39a09]">
              Wholesale Supplier
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl sm:text-1xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Serving businesses with the finest quality dried seafood
            products for over two decades. Trusted by restaurants
            and retailers nationwide.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >

            {/* Shop Button */}
            <Link
              href="/products"
              className="group bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-2xl hover:-translate-y-1"
            >
              <ShoppingBag className="w-5 h-5" />
              Shop Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-2 border border-white/30 hover:border-white/60"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </Link>

          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}