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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0] py-20">

      {/* Blur Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F2A900]/10 text-[#F2A900] px-5 py-2 rounded-full mb-6 font-semibold">

            <Waves className="w-5 h-5" />

            Premium Seafood Collection

          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#041C32] mb-6 leading-tight">

            Our{" "}

            <span className="text-[#F2A900]">
              Products
            </span>

          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">

            Explore our premium quality dried seafood
            products carefully selected for restaurants,
            retailers, and wholesale businesses.

          </p>

        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}

            className="
            bg-white/90
            backdrop-blur-md
            rounded-3xl
            p-8
            shadow-lg
            hover:shadow-2xl
            border
            border-white
            transition-all
            duration-300
            hover:-translate-y-2
            "
          >

            <div className="bg-[#F2A900]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-5">

              <ShieldCheck className="w-8 h-8 text-[#F2A900]" />

            </div>

            <h3 className="text-2xl font-bold text-[#041C32] mb-3">

              Premium Quality

            </h3>

            <p className="text-gray-600 leading-relaxed">

              Carefully processed and quality-tested seafood products.

            </p>

          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}

            className="
            bg-white/90
            backdrop-blur-md
            rounded-3xl
            p-8
            shadow-lg
            hover:shadow-2xl
            border
            border-white
            transition-all
            duration-300
            hover:-translate-y-2
            "
          >

            <div className="bg-[#F97316]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-5">

              <Package className="w-8 h-8 text-[#F97316]" />

            </div>

            <h3 className="text-2xl font-bold text-[#041C32] mb-3">

              Safe Packaging

            </h3>

            <p className="text-gray-600 leading-relaxed">

              Hygienic and secure packaging for maximum freshness.

            </p>

          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}

            className="
            bg-white/90
            backdrop-blur-md
            rounded-3xl
            p-8
            shadow-lg
            hover:shadow-2xl
            border
            border-white
            transition-all
            duration-300
            hover:-translate-y-2
            "
          >

            <div className="bg-[#064663]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-5">

              <Truck className="w-8 h-8 text-[#064663]" />

            </div>

            <h3 className="text-2xl font-bold text-[#041C32] mb-3">

              Fast Delivery

            </h3>

            <p className="text-gray-600 leading-relaxed">

              Reliable nationwide wholesale delivery service.

            </p>

          </motion.div>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">

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

        {/* Wholesale Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}

          className="
          mt-24
          rounded-[32px]
          overflow-hidden
          shadow-[0_20px_60px_rgba(0,0,0,0.15)]
          "
        >

          <div className="bg-gradient-to-r from-[#041C32] via-[#04293A] to-[#064663] px-10 py-14 md:px-16 text-white">

            <h3 className="text-4xl font-bold mb-5 text-[#F2A900]">

              Wholesale Pricing

            </h3>

            <p className="text-lg text-gray-200 leading-relaxed max-w-4xl">

              All prices displayed are wholesale rates.
              For bulk orders above 100kg, contact us for
              special discounts, flexible payment options,
              and long-term business partnership pricing.

            </p>

            {/* Button */}
            <div className="mt-8">

              <a
                href="/contact"

                className="
                inline-block
                bg-[#F97316]
                hover:bg-[#EA580C]
                text-white
                font-semibold
                px-8
                py-4
                rounded-2xl
                transition-all
                duration-300
                hover:-translate-y-1
                shadow-xl
                "
              >

                Contact for Bulk Orders

              </a>

            </div>

          </div>

        </motion.div>

      </div>
    </div>
  );
}

