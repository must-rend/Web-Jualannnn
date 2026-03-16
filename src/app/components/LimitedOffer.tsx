import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface LimitedOfferProps {
  image: string;
}

export function LimitedOffer({ image }: LimitedOfferProps) {
  return (
    <section className="relative h-[600px] my-24 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <img
          src={image}
          alt="Limited Offer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
        <div className="max-w-2xl">
          <motion.div
            className="inline-block border border-white/50 px-6 py-2 text-xs tracking-widest mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            EXCLUSIVE OFFER
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-light tracking-wider mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            SPRING
            <br />
            COLLECTION 2026
          </motion.h2>

          <motion.p
            className="text-lg font-light tracking-wide mb-8 text-white/90"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Enjoy 30% off on selected items. Limited time only.
          </motion.p>

          <motion.button
            className="group bg-white text-black px-10 py-4 text-sm tracking-widest hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300 flex items-center gap-3 mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            SHOP NOW
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
