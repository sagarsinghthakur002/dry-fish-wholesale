"use client";

import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import productsData from "@/data/products.json";
import { Fish } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Fish className="w-10 h-10 text-ocean-600" />
            <h1 className="text-5xl font-bold text-ocean-800">Our Products</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse our premium selection of dry fish products. All prices are wholesale rates. Contact us for bulk order discounts.
          </p>
        </motion.div>

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

        {/* Note Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-ocean-50 border-l-4 border-ocean-600 p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold text-ocean-800 mb-2">
            Wholesale Pricing
          </h3>
          <p className="text-gray-700">
            All prices shown are wholesale rates. For bulk orders (100kg+), please contact us for special pricing. 
            We offer competitive rates and flexible payment terms for established business partners.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

