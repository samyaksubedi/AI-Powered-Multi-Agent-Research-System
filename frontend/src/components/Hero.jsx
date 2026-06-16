import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className='text-center py-24 px-6'>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='text-6xl font-bold'
      >
        Research Smarter
      </motion.h1>

      <p className='text-slate-400 mt-6 max-w-2xl mx-auto'>
        Generate detailed AI-powered research reports from live web data in
        seconds.
      </p>
    </section>
  );
}
