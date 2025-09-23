import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Próstata Zero Dor Quiz',
  description: 'Responda o quiz e descubra como melhorar a saúde da sua próstata.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
       <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <header className="flex justify-center py-4">
            <Image 
                src="https://i.imgur.com/bOFZ4Fz.png" 
                alt="Logo Próstata Zero Dor" 
                width={100} 
                height={100} 
            />
        </header>
        <div className="flex-grow">
            {children}
        </div>
        <Toaster />
        <footer className="text-center py-8 text-muted-foreground">
            <p>PRÓSTATA ZERO DOR Todos os direitos reservados 2025</p>
        </footer>
      </body>
    </html>
  );
}
