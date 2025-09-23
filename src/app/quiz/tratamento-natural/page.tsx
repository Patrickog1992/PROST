import { QuizStepLayout } from '@/components/quiz/QuizStepLayout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const options = [
  { label: 'Sim, prefiro evitar medicamentos fortes', href: '/analise' },
  { label: 'Estou disposto a testar algo natural', href: '/analise' },
  { label: 'Tenho dúvidas, mas estou curioso', href: '/analise' },
  { label: 'Não acredito', href: '/analise' },
];

export default function TratamentoNaturalPage() {
  return (
    <QuizStepLayout title="Você acredita que um tratamento natural pode ajudar?">
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
