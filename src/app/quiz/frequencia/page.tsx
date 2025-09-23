import { QuizStepLayout } from '@/components/quiz/QuizStepLayout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const options = [
  { label: 'Sim, várias vezes ao dia', href: '/quiz/esvaziar' },
  { label: 'Principalmente à noite', href: '/quiz/esvaziar' },
  { label: 'Às vezes, mas não sempre', href: '/quiz/esvaziar' },
  { label: 'Não, está sob controle', href: '/quiz/esvaziar' },
];

export default function FrequenciaPage() {
  return (
    <QuizStepLayout title="Você sente vontade de urinar com muita frequência?">
      <div className="flex flex-col space-y-4 max-w-md mx-auto">
        {options.map((option, index) => (
          <Link key={index} href={option.href} passHref>
            <Button variant="outline" size="lg" className="w-full text-lg justify-start p-6 hover:bg-primary/10">
              {option.label}
            </Button>
          </Link>
        ))}
      </div>
    </QuizStepLayout>
  );
}
