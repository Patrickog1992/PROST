import { QuizStepLayout } from '@/components/quiz/QuizStepLayout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const options = [
  { label: 'Menos de 6 Meses', href: '/quiz/remedios' },
  { label: '6 meses a 1 ano', href: '/quiz/remedios' },
  { label: 'Mais de 1 ano', href: '/quiz/remedios' },
  { label: 'Ainda não sinto', href: '/quiz/remedios' },
];

export default function DuracaoPage() {
  return (
    <QuizStepLayout title="Faz quanto tempo que você sente esses sintomas relacionados à próstata?">
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
