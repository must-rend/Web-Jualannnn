import { motion } from 'motion/react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <motion.h3
              className="text-3xl font-light tracking-[0.2em] mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              LUXE
            </motion.h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Redefining luxury through timeless elegance and exceptional craftsmanship.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm tracking-widest mb-6">SHOP</h4>
            <ul className="space-y-3 text-neutral-400 text-sm">
              {['New Arrivals', 'Women', 'Men', 'Accessories', 'Sale'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm tracking-widest mb-6">SUPPORT</h4>
            <ul className="space-y-3 text-neutral-400 text-sm">
              {['Contact Us', 'Shipping Info', 'Returns', 'Size Guide', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm tracking-widest mb-6">NEWSLETTER</h4>
            <p className="text-neutral-400 text-sm mb-4">
              Subscribe to receive exclusive offers and updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/10 border border-white/20 px-4 py-2 text-sm focus:outline-none focus:border-white transition-colors"
              />
              <motion.button
                className="bg-white text-black px-6 py-2 text-sm hover:bg-neutral-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={16} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-neutral-400 text-sm">
            © 2026 LUXE. All rights reserved.
          </p>

          <div className="flex gap-6">
            {[Instagram, Facebook, Twitter].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
