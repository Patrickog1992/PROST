import { QuizStepLayout } from '@/components/quiz/QuizStepLayout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const options = [
  { label: 'Sempre', href: '/quiz/sono' },
  { label: 'As Vezes', href: '/quiz/sono' },
  { label: 'Raramente', href: '/quiz/sono' },
  { label: 'Nunca', href: '/quiz/sono' },
];

export default function EsforcoPage() {
  return (
    <QuizStepLayout title="Você sente que precisa fazer esforço para conseguir começar a urinar, como se a urina demorasse a sair mesmo com vontade?">
      <div className="flex flex-col space-y-4 max-w-md mx-auto">
        {options.map((option, index) => (
          <Link key={index} href={option.href} passHref>
            <Button variant="outline" size="lg" className="w-full text-lg justify-center p-6 hover:bg-primary/10">
              {option.label}
            </Button>
          </Link>
        ))}
      </div>
    </QuizStepLayout>
  );
}
