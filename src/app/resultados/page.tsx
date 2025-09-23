import { VturbPlayer } from '@/components/VturbPlayer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { findImage } from '@/lib/utils';
import { ArrowRight, CheckCircle, MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
  'ACABA COM A INFLAMAÇÃO DA PRÓSTATA',
  'FORTALECE O FLUXO URINÁRIO',
  'ACABA COM AS IDAS FREQUENTES AO BANHEIRO',
  'ELIMINA A DOR E ARDÊNCIA AO URINAR',
  'MELHORA A LIBIDO 🔥',
];

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Carlos Alberto, 62',
    text: 'Eu não aguentava mais levantar 5 vezes por noite. Minha esposa que achou essa receita. Em duas semanas eu já dormia a noite toda. É outra vida!',
    hint: 'man smiling'
  },
  {
    id: 'testimonial-2',
    name: 'José Pereira, 58',
    text: 'O jato de urina estava fraco, parecia que nunca esvaziava a bexiga. Com a Garrafada, tudo voltou ao normal. Sinto a bexiga leve e o jato forte de novo.',
    hint: 'man portrait'
  },
  {
    id: 'testimonial-3',
    name: 'Antônio Silva, 67',
    text: 'Minha vida sexual tinha acabado por causa da próstata. Tinha vergonha. Essa receita natural me devolveu a confiança e o desejo. Recomendo demais!',
    hint: 'man happy'
  },
];

const recoveryTimeline = [
    { days: "3 DIAS", description: "Reduz a Inflamação da Próstata", color: "text-red-500" },
    { days: "7 DIAS", description: "Controla o Fluxo Urinário e as Idas ao Banheiro", color: "text-blue-500" },
    { days: "21 DIAS", description: "Mais disposição, energia, desejo sexual. Jato Forte e Controlado", color: "text-green-600" }
];

const features = [
    "RECEITA PASSO A PASSO EM VÍDEO",
    "INGREDIENTES FÁCEIS DE ENCONTRAR",
    "FÁCIL DE PREPARAR",
    "NATURAL E 100% SEGURO",
    "DIABÉTICOS E HIPERTENSOS PODEM USAR",
]

export default function ResultadosPage() {
  return (
    <main className="flex flex-col items-center bg-background py-12 px-4">
      <div className="w-full max-w-4xl space-y-12 text-center">
        
        <div className="space-y-4">
            <h1 className="text-2xl md:text-4xl font-bold font-headline">A GARRAFADA IDEAL PRA VOCÊ É A:</h1>
            <h2 className="text-4xl md:text-6xl font-extrabold text-primary font-headline animate-pulse">GARRAFADA PODEROSA</h2>
        </div>

        <Card className="bg-primary/10 border-primary border-2 shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl text-primary font-semibold">VEJA ALGUNS BENEFÍCIOS DA GARRAFADA PODEROSA:</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-left">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <p className="text-lg font-medium">{benefit}</p>
                    </div>
                ))}
            </CardContent>
        </Card>

        <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold">VEJA O RELATO DE CARLOS E TAMBÉM DE OUTROS QUE TIVERAM ACESSO À RECEITA DA NOSSA PODEROSA GARRAFADA!</h3>
            <VturbPlayer playerId="68d2a6ce26f02bd27ca78b39" scriptId="b45e4a12-72fd-43f2-a7e4-73d6b242d5d9" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => {
                const img = findImage(testimonial.id);
                return (
                    <Card key={testimonial.id} className="text-center shadow-md">
                        <CardHeader className="items-center">
                            {img && <Image src={img.imageUrl} alt={testimonial.name} width={80} height={80} className="rounded-full border-4 border-primary" data-ai-hint={testimonial.hint} />}
                            <CardTitle className="pt-2">{testimonial.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="italic">"{testimonial.text}"</p>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
        
        <div className="space-y-6">
            <h2 className="text-3xl font-bold font-headline">Veja como será sua Recuperação</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                {recoveryTimeline.map((item, index) => (
                    <Card key={index} className="p-6">
                        <h3 className={`text-2xl font-bold ${item.color}`}>{item.days}</h3>
                        <p className="mt-2 text-lg">{item.description}</p>
                    </Card>
                ))}
            </div>
        </div>
        
        <Card className="bg-card shadow-xl">
            <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">GARRAFADA PODEROSA:</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <ArrowRight className="h-5 w-5 text-primary" />
                        <span className="font-medium">{feature}</span>
                    </div>
                ))}
            </CardContent>
            <CardFooter>
                 <Link href="/oferta" className="w-full">
                    <Button size="lg" className="w-full text-xl h-16 animate-pulse">
                        QUERO MINHA RECEITA AGORA
                        <MoveRight className="ml-2" />
                    </Button>
                </Link>
            </CardFooter>
        </Card>

      </div>
    </main>
  );
}
