import { motion } from 'motion/react';
import { ShoppingBag, Search, User, Heart, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="text-2xl font-light tracking-[0.2em]"
            whileHover={{ scale: 1.02 }}
          >
            LUXE
          </motion.div>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {['NEW ARRIVALS', 'WOMEN', 'MEN', 'ACCESSORIES', 'SALE'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-sm tracking-wider hover:opacity-60 transition-opacity"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-6">
            <motion.button
              className="hover:opacity-60 transition-opacity"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search size={20} />
            </motion.button>
            <motion.button
              className="hover:opacity-60 transition-opacity"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <User size={20} />
            </motion.button>
            <motion.button
              className="hover:opacity-60 transition-opacity"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart size={20} />
            </motion.button>
            <motion.button
              className="hover:opacity-60 transition-opacity relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </motion.button>
            <button className="md:hidden">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
