import { motion } from 'framer-motion';

export default function LoadingState() {
  return (
    <motion.div
      animate={{
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
      }}
      className='text-center mt-10'
    >
      <h2 className='text-xl font-semibold'>Generating Research Report...</h2>

      <p className='text-slate-400 mt-2'>
        Search Agent → Reader Agent → Writer Agent
      </p>
    </motion.div>
  );
}
