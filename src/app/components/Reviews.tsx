import { motion } from 'motion/react';
import { Star } from 'lucide-react';

interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const reviews: Review[] = [
  {
    name: 'Sophia Laurent',
    rating: 5,
    comment: 'Exceptional quality and craftsmanship. The attention to detail is remarkable. Truly a luxury experience from start to finish.',
    date: 'March 10, 2026'
  },
  {
    name: 'Alexander Chen',
    rating: 5,
    comment: 'Outstanding service and beautiful products. Every piece feels special and unique. Worth every penny.',
    date: 'March 8, 2026'
  },
  {
    name: 'Isabella Martinez',
    rating: 5,
    comment: 'The elegance and sophistication of these products are unmatched. I\'ve never been more satisfied with a purchase.',
    date: 'March 5, 2026'
  }
];

export function Reviews() {
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
          CLIENT TESTIMONIALS
        </h2>
        <p className="text-neutral-500 tracking-wide">
          What our customers say about us
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <motion.div
            key={review.name}
            className="bg-neutral-50 p-8 hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
          >
            {/* Rating Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>

            {/* Comment */}
            <p className="text-neutral-700 mb-6 leading-relaxed">
              "{review.comment}"
            </p>

            {/* Name and Date */}
            <div className="border-t border-neutral-200 pt-4">
              <p className="font-medium tracking-wide">{review.name}</p>
              <p className="text-sm text-neutral-500 tracking-wide mt-1">
                {review.date}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
