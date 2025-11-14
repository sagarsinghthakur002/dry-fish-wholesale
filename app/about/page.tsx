"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Fish, Target, Heart, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-ocean-800 mb-4">About Miksani Supplier</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in premium dry fish wholesale for over two decades
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-ocean-800 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Founded in 2003, Ocean Catch began as a small family business with a simple mission: 
                to provide the highest quality dried seafood products to restaurants and retailers 
                across the country.
              </p>
              <p>
                What started as a local supplier has grown into one of the most trusted wholesale 
                distributors in the industry. Our commitment to quality, reliability, and customer 
                service has earned us partnerships with hundreds of businesses nationwide.
              </p>
              <p>
                Today, we source our products directly from sustainable fisheries, ensuring every 
                batch meets our strict quality standards. Our state-of-the-art processing facilities 
                maintain the natural flavors and nutritional value of our products.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop"
              alt="Our team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <Target className="w-12 h-12 text-ocean-600 mb-4" />
            <h3 className="text-2xl font-bold text-ocean-800 mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To provide premium quality dry fish products while maintaining sustainable practices 
              and building lasting partnerships with our clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <Heart className="w-12 h-12 text-coral-600 mb-4" />
            <h3 className="text-2xl font-bold text-ocean-800 mb-4">Our Values</h3>
            <p className="text-gray-700">
              Quality, integrity, and customer satisfaction are at the heart of everything we do. 
              We believe in fair trade and sustainable sourcing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <Award className="w-12 h-12 text-sandy-600 mb-4" />
            <h3 className="text-2xl font-bold text-ocean-800 mb-4">Our Promise</h3>
            <p className="text-gray-700">
              Consistent quality, competitive pricing, and reliable service. Your success is our 
              success, and we&apos;re committed to your business growth.
            </p>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-ocean-600 to-ocean-800 text-white p-12 rounded-lg text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-xl text-ocean-100 max-w-3xl mx-auto">
            Our experienced team of seafood specialists, quality control experts, and customer 
            service professionals work together to ensure you receive the best products and service. 
            With decades of combined experience in the industry, we understand your needs and are 
            here to help your business thrive.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

