import React from 'react';

type QuizStepLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export function QuizStepLayout({ title, children }: QuizStepLayoutProps) {
  return (
    <div className="w-full space-y-8 text-center">
      <h1 className="font-headline text-3xl font-bold text-primary md:text-4xl">
        {title}
      </h1>
      <div className="mx-auto w-full max-w-4xl">
        {children}
      </div>
    </div>
  );
}
