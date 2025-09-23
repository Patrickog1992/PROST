'use client';

import { Progress } from '@/components/ui/progress';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AnalisePage() {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        router.push('/resultados');
      }, 500);
    }
  }, [progress, router]);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 text-center">
      <div className="w-full max-w-2xl space-y-8">
        <h1 className="text-4xl font-bold font-headline text-primary animate-pulse">
          Analisando...
        </h1>
        <p className="text-lg text-foreground/80">
          ESTAMOS ANALISANDO SUAS RESPOSTAS PRA SABER SE A GARRAFADA REALMENTE
          VAI TE AJUDAR.
        </p>
        <Progress value={progress} className="h-4" />
        <p className="text-xl font-semibold">{Math.round(progress)}%</p>
        <p className="text-lg font-bold uppercase tracking-widest text-foreground/70">
          Aguarde...
        </p>
      </div>
    </main>
  );
}
