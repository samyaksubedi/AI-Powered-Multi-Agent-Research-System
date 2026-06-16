import { useState } from 'react';

export default function ResearchForm({ onGenerate, loading }) {
  const [topic, setTopic] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!topic.trim()) return;

    onGenerate(topic);
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-3xl mx-auto flex gap-3'>
      <input
        type='text'
        placeholder='Enter research topic...'
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className='flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3'
      />

      <button
        disabled={loading}
        className='bg-indigo-600 px-6 rounded-xl hover:bg-indigo-700 disabled:opacity-50'
      >
        Generate
      </button>
    </form>
  );
}
