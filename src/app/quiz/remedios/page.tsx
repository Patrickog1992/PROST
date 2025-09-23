import { QuizStepLayout } from '@/components/quiz/QuizStepLayout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const options = [
  { label: 'Sim, e estou pagando o preço por isso', href: '/quiz/tratamento-natural' },
  { label: 'Não sabia, mas agora faz sentido', href: '/quiz/tratamento-natural' },
  { label: 'Ainda uso, mas quero uma alternativa natural', href: '/quiz/tratamento-natural' },
  { label: 'Nunca usei esses remédios', href: '/quiz/tratamento-natural' },
];

export default function RemediosPage() {
  return (
    <QuizStepLayout title="Você sabia que 95% dos remédios de farmácia só mascaram os sintomas, causam efeitos colaterais e ainda acabam com sua libido?">
      <div className="flex flex-col space-y-4 max-w-lg mx-auto">
        {options.map((option, index) => (
          <Link key={index} href={option.href} passHref>
            <Button variant="outline" size="lg" className="w-full text-lg justify-start p-6 h-auto whitespace-normal hover:bg-primary/10">
              {option.label}
            </Button>
          </Link>
        ))}
      </div>
    </QuizStepLayout>
  );
}
