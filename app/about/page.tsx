"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Target,
  Heart,
  Award,
} from "lucide-react";

import abuti from "@/public/about.png";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-16">

      <div className="container mx-auto px-6 lg:px-12">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >

          <h1 className="text-5xl md:text-6xl font-extrabold text-[#041C32] mb-6">
            About{" "}
            <span className="text-[#F2A900]">
              Miksani Supplier
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in premium dry fish wholesale
            for over two decades.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-24">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <h2 className="text-4xl font-bold text-[#041C32] mb-8">
              Our Story
            </h2>

            <div className="space-y-5 text-gray-700 text-lg leading-relaxed">

              <p>
                Founded in 2003, Miksani Supplier began as a
                small family business with a simple mission:
                delivering the highest quality dried seafood
                products to restaurants and retailers.
              </p>

              <p>
                Over the years, we have grown into one of the
                most trusted wholesale suppliers in the industry,
                known for quality, reliability, and customer
                satisfaction.
              </p>

              <p>
                We work directly with trusted fisheries and
                maintain strict quality standards to ensure
                freshness, flavor, and premium seafood products
                for our customers.
              </p>

            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl"
          >

            <Image
              src={abuti}
              alt="About us"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:-translate-y-2 transition-all duration-300"
          >

            <div className="bg-[#F2A900]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-[#F2A900]" />
            </div>

            <h3 className="text-2xl font-bold text-[#041C32] mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To provide premium quality dry fish products
              while maintaining sustainable sourcing and
              building long-term customer partnerships.
            </p>

          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:-translate-y-2 transition-all duration-300"
          >

            <div className="bg-[#F97316]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-[#F97316]" />
            </div>

            <h3 className="text-2xl font-bold text-[#041C32] mb-4">
              Our Values
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Quality, integrity, and customer satisfaction
              remain at the center of everything we do.
            </p>

          </motion.div>

          {/* Promise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:-translate-y-2 transition-all duration-300"
          >

            <div className="bg-[#064663]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-[#064663]" />
            </div>

            <h3 className="text-2xl font-bold text-[#041C32] mb-4">
              Our Promise
            </h3>

            <p className="text-gray-600 leading-relaxed">
              We promise consistent quality, competitive
              pricing, and reliable service for every client.
            </p>

          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden relative"
        >

          <div className="bg-gradient-to-r from-[#041C32] via-[#04293A] to-[#064663] p-14 text-center text-white">

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Team
            </h2>

            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Our experienced seafood specialists and customer
              support team work together to ensure premium
              quality products and excellent service for every client.
            </p>

          </div>

        </motion.div>

      </div>
    </div>
  );
}