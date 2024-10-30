'use client';

// Hooks
import { useLastVisitedTabHandler } from '@/lib/lastVisitedTabHandler';

export const ContinueReading: React.FC = () => {
  const { lastVisitedTab } = useLastVisitedTabHandler();

  if (lastVisitedTab === null) return null;

  return (
    <div className="mt-5 flex w-full cursor-pointer justify-center duration-150 hover:scale-95">
      <section className="w-fit rounded-lg bg-[#ecd2bf] px-4 py-3 text-center">
        <p className="text-sm font-semibold">continue reading</p>
      </section>
    </div>
  );
};
