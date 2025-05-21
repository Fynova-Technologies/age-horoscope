import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 relative bg-gradient-cosmic text-white">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')] bg-cover bg-center"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-accent text-3xl md:text-4xl font-bold mb-6">
            Unlock Your Complete Cosmic Profile
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Sign up for a free account to save your birth details, track your personalized horoscopes, and receive cosmic insights tailored to your unique astrological makeup.
          </p>
          <Button
            size="lg"
            className="px-8 py-6 font-heading font-medium text-primary bg-white rounded-full shadow-md hover:shadow-lg transform transition hover:-translate-y-1"
          >
            Create Free Account
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
