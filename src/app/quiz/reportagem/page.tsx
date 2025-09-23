import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { findImage } from '@/lib/utils';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ReportagemPage() {
  const reportImage = findImage('report-ratinho');

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="overflow-hidden shadow-2xl">
        <CardHeader className="bg-destructive text-destructive-foreground p-4">
          <h3 className="text-lg font-bold text-center uppercase">EXCLUSIVO: Programa do Ratinho</h3>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <CardTitle className="font-headline text-2xl md:text-4xl font-bold text-center">
            "Fórmula da Roça" Apelidada de "Levanta Velho" Vira Febre Entre Homens 50+ e Esvazia Clínicas!
          </CardTitle>
          
          {reportImage && (
            <div className="w-full overflow-hidden rounded-lg">
              <Image
                src={reportImage.imageUrl}
                alt={reportImage.description}
                width={800}
                height={450}
                className="w-full object-cover"
                data-ai-hint={reportImage.imageHint}
              />
            </div>
          )}
          
          <div className="prose prose-lg max-w-none text-foreground/90">
            <p>
              Uma antiga receita, conhecida em pequenas comunidades rurais como a "Garrafada Poderosa", está causando um verdadeiro alvoroço. O que antes era um segredo passado de pai para filho, agora está se espalhando e promete ser a solução natural para os problemas de próstata que assombram homens mais velhos.
            </p>
            <p className="font-semibold">
              Especialistas estão chocados com os relatos: homens que acordavam várias vezes à noite para urinar agora dormem como uma pedra. O jato fraco e a sensação de bexiga cheia? Coisa do passado. Até mesmo a potência sexual, que muitos acreditavam ter perdido para sempre, está voltando com força total.
            </p>
            <p>
              "É quase um milagre", comentou um urologista que pediu para não ser identificado. "Os remédios de farmácia tratam os sintomas, mas essa garrafada parece ir na raiz do problema, desinflamando a próstata de forma natural e segura."
            </p>
          </div>
          <div className="text-center pt-6">
            <Link href="/quiz/melhorar" passHref>
              <Button size="lg" className="text-lg animate-bounce">
                Quero Saber Mais
                <MoveRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
