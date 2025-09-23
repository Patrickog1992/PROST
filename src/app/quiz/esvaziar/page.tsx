import { QuizStepLayout } from '@/components/quiz/QuizStepLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { findImage } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const options = [
  { label: 'Sim, frequentemente', href: '/quiz/sintomas' },
  { label: 'Principalmente à noite', href: '/quiz/sintomas' },
  { label: 'Às vezes sim', href: '/quiz/sintomas' },
  { label: 'Não tenho esse problema', href: '/quiz/sintomas' },
];

export default function EsvaziarPage() {
  const image = findImage('bladder-flow');
  return (
    <QuizStepLayout title="Você sente dificuldade para esvaziar totalmente a bexiga?">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {image && (
          <div className="w-full md:w-1/2">
            <Card>
              <CardContent className="p-2">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={400}
                  height={400}
                  className="rounded-md w-full"
                  data-ai-hint={image.imageHint}
                />
              </CardContent>
            </Card>
          </div>
        )}
        <div className="w-full md:w-1/2 flex flex-col space-y-4">
          {options.map((option, index) => (
            <Link key={index} href={option.href} passHref>
              <Button variant="outline" size="lg" className="w-full text-lg justify-start p-6 hover:bg-primary/10">
                {option.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </QuizStepLayout>
  );
}
