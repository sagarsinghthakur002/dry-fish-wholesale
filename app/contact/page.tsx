"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 bg-[#F8FAFC]">

      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}

          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#0B3C5D] mb-5">
            Contact Us
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with us for wholesale inquiries,
            bulk orders, or product information.
          </p>
        </motion.div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}

            className="space-y-8"
          >

            {/* Phone */}
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-7 border border-gray-100">

              <div className="flex items-start gap-5">

                <div className="bg-cyan-100 p-4 rounded-2xl">
                  <Phone className="w-7 h-7 text-[#0EA5A4]" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#0B3C5D] mb-2">
                    Phone
                  </h3>

                  <p className="text-gray-700 text-lg mb-1">
                    +977 9813773786
                  </p>

                  <p className="text-sm text-gray-500">
                    Mon - Fri : 8AM - 6PM
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-7 border border-gray-100">

              <div className="flex items-start gap-5">

                <div className="bg-cyan-100 p-4 rounded-2xl">
                  <Mail className="w-7 h-7 text-[#0EA5A4]" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#0B3C5D] mb-2">
                    Email
                  </h3>

                  <p className="text-gray-700 text-lg mb-1">
                    info@miksanisupplier.com
                  </p>

                  <p className="text-sm text-gray-500">
                    We respond within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-7 border border-gray-100">

              <div className="flex items-start gap-5">

                <div className="bg-cyan-100 p-4 rounded-2xl">
                  <MapPin className="w-7 h-7 text-[#0EA5A4]" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#0B3C5D] mb-2">
                    Address
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    M7QX+9XW, Kathmandu 44600
                    <br />
                    Balkhu, Kathmandu, Nepal
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/9779813773786"
              target="_blank"
              rel="noopener noreferrer"

              className="group block bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold py-5 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:-translate-y-1"
            >
              <MessageCircle className="w-6 h-6" />

              Chat with us on WhatsApp
            </a>

          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}

          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
        >

          {/* Map Header */}
          <div className="bg-gradient-to-r from-[#0B3C5D] to-[#146C94] px-8 py-5">

            <h2 className="text-2xl font-bold text-white">
              Our Location
            </h2>
          </div>

          {/* Google Map */}
          <div className="w-full h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9391476664673!2d85.300006!3d27.688275599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19000465aee3%3A0xf54b87b230d605fe!2sMiksani%20sidra%20pasal!5e0!3m2!1sen!2snp!4v1763140094344!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Miksani Supplier Location"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}