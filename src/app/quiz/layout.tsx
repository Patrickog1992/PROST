import React from 'react';

export default function QuizPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex w-full flex-col items-center justify-center bg-background px-4 sm:px-8">
      <div className="w-full max-w-4xl">{children}</div>
    </main>
  );
}
