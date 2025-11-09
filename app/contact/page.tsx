"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12 bg-sandy-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-ocean-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for wholesale inquiries, bulk orders, or any questions about our products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-ocean-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-ocean-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ocean-800 mb-2">Phone</h3>
                  <p className="text-gray-700 mb-1">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500">Mon-Fri: 8AM - 6PM EST</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-ocean-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-ocean-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ocean-800 mb-2">Email</h3>
                  <p className="text-gray-700 mb-1">info@oceancatch.com</p>
                  <p className="text-sm text-gray-500">We respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-ocean-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-ocean-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ocean-800 mb-2">Address</h3>
                  <p className="text-gray-700">
                    123 Harbor Street<br />
                    Coastal City, CC 12345<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Chat with us on WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Google Map Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184132576894!2d-73.98811768459418!3d40.75889597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ocean Catch Location"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

