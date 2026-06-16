import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResearchForm from './components/ResearchForm';
import LoadingState from './components/LoadingState';
import ReportViewer from './components/ReportViewer';

import { generateReport } from './services/api';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState(null);

  const handleGenerate = async (topic) => {
    try {
      setLoading(true);

      const data = await generateReport(topic);

      setReport(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster />

      <Navbar />

      <Hero />

      <main className='max-w-6xl mx-auto px-6 pb-20'>
        <ResearchForm onGenerate={handleGenerate} loading={loading} />

        {loading && <LoadingState />}

        {report && !loading && <ReportViewer report={report} />}
      </main>
    </>
  );
}
