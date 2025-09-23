import { QuizStepLayout } from '@/components/quiz/QuizStepLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { findImage } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const options = [
  { label: 'Sim, perdi potência e desejo sexual', href: '/quiz/duracao' },
  { label: 'Às vezes tenho dificuldade de ereção', href: '/quiz/duracao' },
  { label: 'Não sinto desejo, mesmo com estímulo', href: '/quiz/duracao' },
  { label: 'Está tudo normal', href: '/quiz/duracao' },
];

export default function DesempenhoPage() {
  const image = findImage('sexual-performance');
  return (
    <QuizStepLayout title="Você sente que seu desempenho sexual mudou nos últimos anos?">
      <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
        {image && (
          <div className="w-full md:w-1/2">
            <Card>
              <CardContent className="p-2">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={400}
                  height={300}
                  className="rounded-md w-full object-cover aspect-video"
                  data-ai-hint={image.imageHint}
                />
              </CardContent>
            </Card>
          </div>
        )}
        <div className="w-full md:w-1/2 flex flex-col space-y-4">
          {options.map((option, index) => (
            <Link key={index} href={option.href} passHref>
              <Button variant="outline" size="lg" className="w-full text-lg justify-start p-6 h-auto whitespace-normal hover:bg-primary/10">
                {option.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </QuizStepLayout>
  );
}
