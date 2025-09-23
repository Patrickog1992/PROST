import type { Metadata } from 'next';
import Script from 'next/script';
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
        <noscript>
          <img height="1" width="1" style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=1288620463275667&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1288620463275667');
            fbq('track', 'PageView');
          `}
        </Script>
        <header className="flex justify-center">
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
