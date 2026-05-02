import { Spinner } from '@heroui/react';

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <Spinner size="lg" color="primary" />
        <p className="text-slate-500 animate-pulse">Loading Animals...</p>
      </div>
    </div>
  );
};

export default Loading;
