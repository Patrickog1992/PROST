import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

export default function StartPage() {
  return (
    <main className="flex w-full flex-col items-center justify-center bg-background p-4 sm:p-8">
      <Card className="w-full max-w-2xl text-center shadow-2xl">
        <CardHeader>
          <CardTitle className="font-headline text-4xl font-bold text-primary md:text-5xl">
            Próstata Zero Dor
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <p className="text-xl text-foreground/80 md:text-2xl">
            Veja se a Garrafada vai te servir
          </p>
          <h2 className="text-2xl font-semibold md:text-3xl">
            Responda e descubra em menos de 1 minuto!
          </h2>
          <Link href="/quiz/idade" passHref>
            <Button size="lg" className="w-full max-w-sm animate-pulse text-lg">
              Começar o Quiz
              <MoveRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </main>
  );
}
