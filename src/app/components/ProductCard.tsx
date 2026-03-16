import { motion } from 'motion/react';
import { Heart, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  image: string;
  name: string;
  category: string;
  price: number;
  index: number;
}

export function ProductCard({ image, name, category, price, index }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-neutral-50 aspect-[3/4] mb-6">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Overlay with Actions */}
        <motion.div
          className="absolute inset-0 bg-black/20 flex items-end justify-center pb-8 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="bg-white text-black px-8 py-3 text-sm tracking-wider hover:bg-black hover:text-white transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingBag size={16} />
            ADD TO BAG
          </motion.button>
          <motion.button
            className="bg-white p-3 hover:bg-black hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart size={16} />
          </motion.button>
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="text-center">
        <p className="text-xs tracking-widest text-neutral-500 mb-2">{category}</p>
        <h3 className="text-base tracking-wide mb-3">{name}</h3>
        <p className="text-lg font-light">${price.toFixed(2)}</p>
      </div>
    </motion.div>
  );
}
