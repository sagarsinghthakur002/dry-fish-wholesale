"use client";

import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import productsData from "@/data/products.json";

import {
  Waves,
  Package,
  ShieldCheck,
  Truck,
} from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-16">

      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F2A900]/10 text-[#F2A900] px-5 py-2 rounded-full mb-6 font-semibold">

            <Waves className="w-5 h-5" />
            Premium Seafood Collection

          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#041C32] mb-6">
            Our{" "}
            <span className="text-[#F2A900]">
              Products
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our premium quality dried seafood products
            carefully selected for restaurants, retailers,
            and wholesale businesses.
          </p>

        </motion.div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

          {/* Quality */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:-translate-y-2 transition-all duration-300"
          >

            <div className="bg-[#F2A900]/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
              <ShieldCheck className="w-7 h-7 text-[#F2A900]" />
            </div>

            <h3 className="text-xl font-bold text-[#041C32] mb-3">
              Premium Quality
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Carefully processed and quality-tested seafood products.
            </p>

          </motion.div>

          {/* Packaging */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:-translate-y-2 transition-all duration-300"
          >

            <div className="bg-[#F97316]/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
              <Package className="w-7 h-7 text-[#F97316]" />
            </div>

            <h3 className="text-xl font-bold text-[#041C32] mb-3">
              Safe Packaging
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Hygienic and secure packaging for maximum freshness.
            </p>

          </motion.div>

          {/* Delivery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:-translate-y-2 transition-all duration-300"
          >

            <div className="bg-[#064663]/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
              <Truck className="w-7 h-7 text-[#064663]" />
            </div>

            <h3 className="text-xl font-bold text-[#041C32] mb-3">
              Fast Delivery
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Reliable nationwide wholesale delivery service.
            </p>

          </motion.div>

        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {productsData.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              unit={product.unit}
              image={product.image}
              description={product.description}
            />
          ))}

        </div>

        {/* Wholesale Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-3xl overflow-hidden shadow-2xl"
        >

          <div className="bg-gradient-to-r from-[#041C32] via-[#04293A] to-[#064663] p-10 text-white">

            <h3 className="text-3xl font-bold mb-4 text-[#F2A900]">
              Wholesale Pricing
            </h3>

            <p className="text-lg text-gray-200 leading-relaxed max-w-4xl">
              All prices displayed are wholesale rates.
              For bulk orders above 100kg, contact us for
              special discounts, flexible payment options,
              and long-term business partnership pricing.
            </p>

          </div>

        </motion.div>

      </div>
    </div>
  );
}