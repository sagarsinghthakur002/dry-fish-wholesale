"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Fish, DollarSign } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  unit: string;
  image: string;
  description: string;
}

export default function ProductCard({
  id,
  name,
  price,
  unit,
  image,
  description,
}: ProductCardProps) {
  const handleRequestQuote = () => {
    // WhatsApp phone number (update this with your actual WhatsApp business number)
    const phoneNumber = "+977 9823407226"; // Format: country code + number without + or spaces
    
    // Create the message with product details
    const message = encodeURIComponent(
      `Hello! I'm interested in getting a quote for:\n\n` +
      `Product: ${name}\n` +
      `Price: $${price.toFixed(2)}/${unit}\n\n` +
      `Please provide more information about bulk pricing and availability.`
    );
    
    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-2 right-2 bg-ocean-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
          Wholesale
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <Fish className="w-5 h-5 text-ocean-600" />
          <h3 className="text-xl font-bold text-ocean-800">{name}</h3>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <DollarSign className="w-5 h-5 text-coral-600" />
            <span className="text-2xl font-bold text-ocean-800">
              ${price.toFixed(2)}
            </span>
            <span className="text-gray-500 text-sm">/{unit}</span>
          </div>
        </div>
        <button
          onClick={handleRequestQuote}
          className="w-full bg-ocean-600 hover:bg-ocean-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Request Quote
        </button>
      </div>
    </motion.div>
  );
}

