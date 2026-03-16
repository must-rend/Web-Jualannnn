import { motion } from 'motion/react';

interface Category {
  name: string;
  image: string;
  count: number;
}

interface CategorySectionProps {
  categories: Category[];
}

export function CategorySection({ categories }: CategorySectionProps) {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-4">
          SHOP BY CATEGORY
        </h2>
        <p className="text-neutral-500 tracking-wide">
          Curated collections for the discerning individual
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            className="group relative overflow-hidden cursor-pointer aspect-[4/5]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <motion.img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-3xl font-light tracking-wider mb-2">
                {category.name}
              </h3>
              <p className="text-sm tracking-wide text-white/80">
                {category.count} Items
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
