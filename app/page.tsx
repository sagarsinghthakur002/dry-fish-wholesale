"use client";

import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { Fish, Award, Users, Truck } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Features Section */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B3C5D] mb-5">
              Why Choose Miksani Supplier?
            </h2>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We deliver excellence in every batch, ensuring your business gets
              premium quality dried seafood products with trusted wholesale service.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                icon: Award,
                title: "Premium Quality",
                description:
                  "Hand-selected premium grade dry fish from trusted suppliers.",
              },
              {
                icon: Fish,
                title: "Wide Variety",
                description:
                  "Extensive range of dried seafood products for every need.",
              },
              {
                icon: Truck,
                title: "Fast Delivery",
                description:
                  "Reliable wholesale delivery service across the country.",
              },
              {
                icon: Users,
                title: "Trusted Partner",
                description:
                  "Serving businesses with excellence for over 20 years.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}

                className="bg-white p-8 rounded-2xl text-center shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >

                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#E0F2FE] flex items-center justify-center">
                  <feature.icon className="w-10 h-10 text-[#0EA5A4]" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#0B3C5D] mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-r from-[#0B3C5D] to-[#146C94] text-white">

        {/* Fish Decoration */}
        <div className="absolute left-10 bottom-10 opacity-10 text-9xl">
          🐟
        </div>

        <div className="absolute right-10 top-10 opacity-10 text-9xl rotate-12">
          🐠
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Wholesale Order?
            </h2>

            {/* Paragraph */}
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Contact us today for competitive wholesale pricing and
              bulk order discounts.
            </p>

            {/* Button */}
            <a
              href="/contact"
              className="inline-block bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              Get a Quote
            </a>

          </motion.div>
        </div>
      </section>
    </>
  );
}