import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { CategorySection } from './components/CategorySection';
import { LimitedOffer } from './components/LimitedOffer';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';
import { motion } from 'motion/react';

function App() {
  // Product data
  const featuredProducts = [
    {
      image: 'https://images.unsplash.com/photo-1766229967495-001ff77d750b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMGJsYWNrJTIwbWluaW1hbGlzdHxlbnwxfHx8fDE3NzM2NzIxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Classic Timepiece',
      category: 'WATCHES',
      price: 2499.00
    },
    {
      image: 'https://images.unsplash.com/photo-1763579292184-d13e3b3be416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGhhbmRiYWclMjBlbGVnYW50JTIwd2hpdGV8ZW58MXx8fHwxNzczNjcyMTAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Signature Handbag',
      category: 'BAGS',
      price: 1899.00
    },
    {
      image: 'https://images.unsplash.com/photo-1768025719875-48ed072f3084?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwcGVyZnVtZSUyMGJvdHRsZSUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzczNjcyMTAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Essence Noir',
      category: 'FRAGRANCE',
      price: 350.00
    },
    {
      image: 'https://images.unsplash.com/photo-1642439048934-27a82f89b866?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdW5nbGFzc2VzJTIwYmxhY2slMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3MzY3MjEwMnww&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Aviator Elite',
      category: 'EYEWEAR',
      price: 599.00
    },
    {
      image: 'https://images.unsplash.com/photo-1761522001173-407848107951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHNob2VzJTIwZWxlZ2FudCUyMG1pbmltYWx8ZW58MXx8fHwxNzczNjcyMTAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Metropolitan Loafers',
      category: 'FOOTWEAR',
      price: 899.00
    },
    {
      image: 'https://images.unsplash.com/photo-1738800076744-c37b80b37d31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5JTIwZGlhbW9uZCUyMG1pbmltYWx8ZW58MXx8fHwxNzczNjI2NTcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Diamond Elegance',
      category: 'JEWELRY',
      price: 4999.00
    }
  ];

  const categories = [
    {
      name: 'WOMEN',
      image: 'https://images.unsplash.com/photo-1732965757891-368c1f235e7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM2NzIxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      count: 248
    },
    {
      name: 'MEN',
      image: 'https://images.unsplash.com/photo-1765446904833-6431fecb1706?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwbGVhdGhlciUyMHdhbGxldCUyMGJsYWNrfGVufDF8fHx8MTc3MzY3MjEwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      count: 184
    },
    {
      name: 'ACCESSORIES',
      image: 'https://images.unsplash.com/photo-1768025719875-48ed072f3084?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwcGVyZnVtZSUyMGJvdHRsZSUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzczNjcyMTAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      count: 312
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <Hero heroImage="https://images.unsplash.com/photo-1732965757891-368c1f235e7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM2NzIxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080" />
      
      {/* Featured Products Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-4">
            FEATURED COLLECTION
          </h2>
          <p className="text-neutral-500 tracking-wide">
            Handpicked pieces that define sophistication
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {featuredProducts.map((product, index) => (
            <ProductCard key={index} {...product} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="border-2 border-black px-12 py-4 text-sm tracking-widest hover:bg-black hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            VIEW ALL PRODUCTS
          </motion.button>
        </motion.div>
      </section>

      <CategorySection categories={categories} />
      
      <LimitedOffer image="https://images.unsplash.com/photo-1766229967495-001ff77d750b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMGJsYWNrJTIwbWluaW1hbGlzdHxlbnwxfHx8fDE3NzM2NzIxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080" />
      
      <Reviews />
      
      {/* Value Proposition */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { title: 'FREE SHIPPING', desc: 'On orders over $500' },
            { title: 'SECURE PAYMENT', desc: 'Protected transactions' },
            { title: 'EASY RETURNS', desc: '30-day return policy' }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-lg tracking-widest mb-3">{item.title}</h3>
              <p className="text-neutral-500 tracking-wide">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
