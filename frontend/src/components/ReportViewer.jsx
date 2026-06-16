import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import toast from 'react-hot-toast';

export default function ReportViewer({ report }) {
  const downloadMarkdown = () => {
    const blob = new Blob([report.report], {
      type: 'text/markdown',
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');

    a.href = url;
    a.download = `${report.topic}.md`;

    a.click();

    URL.revokeObjectURL(url);

    toast.success('Downloaded');
  };

  const copyReport = async () => {
    await navigator.clipboard.writeText(report.report);

    toast.success('Copied');
  };

  return (
    <div className='mt-12'>
      <div className='flex gap-4 mb-6'>
        <button
          onClick={copyReport}
          className='bg-slate-800 px-4 py-2 rounded-lg'
        >
          Copy
        </button>

        <button
          onClick={downloadMarkdown}
          className='bg-indigo-600 px-4 py-2 rounded-lg'
        >
          Download MD
        </button>
      </div>

      <div className='bg-slate-900 border border-slate-800 rounded-xl p-8'>
        <article className='prose prose-invert max-w-none'>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {report.report}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
