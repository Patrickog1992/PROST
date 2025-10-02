'use client';

import { VturbPlayer } from '@/components/VturbPlayer';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function VSLPage() {
  const [showButton, setShowButton] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 120000); // 2 minutes in milliseconds

    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = () => {
    router.push('/oferta');
  };

  return (
    <main className="flex w-full flex-col items-center justify-center bg-black p-4 text-center">
      <div className="w-full max-w-4xl space-y-8">
        <div className="video-container">
          <VturbPlayer
            playerId="68de903625cb487df92f8f62"
            scriptId="db159b27-2739-477e-a1ae-6458da34c980"
          />
        </div>
        {showButton && (
          <div className="mt-8">
            <Button
              size="lg"
              className="animate-pulse bg-green-600 text-2xl font-bold text-white hover:bg-green-700"
              onClick={handleButtonClick}
            >
              QUERO AGORA !
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
