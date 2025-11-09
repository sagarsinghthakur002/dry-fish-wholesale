"use client";

import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { Fish, Award, Users, Truck } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-ocean-800 mb-4">
              Why Choose Ocean Catch?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver excellence in every batch, ensuring your business gets the best quality products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Premium Quality",
                description: "Hand-selected, premium grade dry fish from trusted sources",
              },
              {
                icon: Fish,
                title: "Wide Variety",
                description: "Extensive range of dried seafood products to meet all needs",
              },
              {
                icon: Truck,
                title: "Fast Delivery",
                description: "Reliable wholesale delivery service across the country",
              },
              {
                icon: Users,
                title: "Trusted Partner",
                description: "Serving businesses for over 20 years with excellence",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-sandy-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-ocean-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-ocean-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-ocean-600 to-ocean-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Start Your Wholesale Order?
            </h2>
            <p className="text-xl text-ocean-100 mb-8 max-w-2xl mx-auto">
              Contact us today for competitive wholesale pricing and bulk order discounts.
            </p>
            <a
              href="/contact"
              className="inline-block bg-coral-600 hover:bg-coral-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
            >
              Get a Quote
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

