import { QuizStepLayout } from '@/components/quiz/QuizStepLayout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const options = [
  { label: '😞 Durmo mal e acordo várias vezes pra ir ao banheiro', href: '/quiz/desempenho' },
  { label: '🥹 Durmo bem, mas acordo cansado', href: '/quiz/desempenho' },
  { label: '😴 Durmo tranquilo, sem interrupções', href: '/quiz/desempenho' },
  { label: '😵 Tenho insônia constante', href: '/quiz/desempenho' },
];

export default function SonoPage() {
  return (
    <QuizStepLayout title="Como está sua qualidade do sono?">
      <div className="flex flex-col space-y-4 max-w-lg mx-auto">
        {options.map((option, index) => (
          <Link key={index} href={option.href} passHref>
            <Button variant="outline" size="lg" className="w-full text-lg justify-start p-6 h-auto text-left whitespace-normal hover:bg-primary/10">
              {option.label}
            </Button>
          </Link>
        ))}
      </div>
    </QuizStepLayout>
  );
}
