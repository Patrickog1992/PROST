'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { QuizStepLayout } from '@/components/quiz/QuizStepLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { QuizOptionCard } from '@/components/quiz/QuizOptionCard';
import { findImage } from '@/lib/utils';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';

const quizSteps = [
  {
    id: 'idade',
    title: 'Qual a sua faixa etária?',
    component: 'IdadeStep',
  },
  {
    id: 'reportagem',
    title: '"Fórmula da Roça" Apelidada de "Levanta Velho" Vira Febre Entre Homens 50+ e Esvazia Clínicas!',
    component: 'ReportagemStep',
  },
  {
    id: 'melhorar',
    title: 'Marque todas as opções que deseja melhorar',
    component: 'ChecklistStep',
    options: [
      { id: 'comfort', label: 'Urinar com mais conforto' },
      { id: 'sleep', label: 'Dormir sem acordar de madrugada' },
      { id: 'potency', label: 'Melhorar minha potência sexual' },
      { id: 'swelling', label: 'Reduzir o inchaço da próstata' },
    ],
  },
  {
    id: 'frequencia',
    title: 'Você sente vontade de urinar com muita frequência?',
    component: 'OptionsStep',
    options: [
      { label: 'Sim, várias vezes ao dia' },
      { label: 'Principalmente à noite' },
      { label: 'Às vezes, mas não sempre' },
      { label: 'Não, está sob controle' },
    ],
  },
  {
    id: 'esvaziar',
    title: 'Você sente dificuldade para esvaziar totalmente a bexiga?',
    component: 'ImageOptionsStep',
    imageId: 'bladder-flow',
    options: [
      { label: 'Sim, frequentemente' },
      { label: 'Principalmente à noite' },
      { label: 'Às vezes sim' },
      { label: 'Não tenho esse problema' },
    ],
  },
  {
    id: 'sintomas',
    title: 'Você já sentiu algum desses sintomas abaixo?',
    description: 'Marque todas opções que está sentindo ou já sentiu.',
    component: 'ChecklistStep',
    options: [
      { id: 'pressure', label: 'Pressão ou queimação ao urinar' },
      { id: 'weak_stream', label: 'Interrupção ou jato fraco de urina' },
      { id: 'full_bladder', label: 'Sensação de bexiga cheia mesmo após urinar' },
      { id: 'pain', label: 'Dor na região pélvica, lombar ou testicular' },
      { id: 'night_waking', label: 'Levantar 1 ou mais vezes à noite para urinar' },
    ],
  },
  {
    id: 'esforco',
    title: 'Você sente que precisa fazer esforço para conseguir começar a urinar, como se a urina demorasse a sair mesmo com vontade?',
    component: 'OptionsStep',
    options: [
      { label: 'Sempre' },
      { label: 'As Vezes' },
      { label: 'Raramente' },
      { label: 'Nunca' },
    ],
  },
  {
    id: 'sono',
    title: 'Como está sua qualidade do sono?',
    component: 'OptionsStep',
     options: [
      { label: '😞 Durmo mal e acordo várias vezes pra ir ao banheiro' },
      { label: '🥹 Durmo bem, mas acordo cansado' },
      { label: '😴 Durmo tranquilo, sem interrupções' },
      { label: '😵 Tenho insônia constante' },
    ],
  },
  {
    id: 'desempenho',
    title: 'Você sente que seu desempenho sexual mudou nos últimos anos?',
    component: 'ImageOptionsStep',
    imageId: 'sexual-performance',
    options: [
      { label: 'Sim, perdi potência e desejo sexual' },
      { label: 'Às vezes tenho dificuldade de ereção' },
      { label: 'Não sinto desejo, mesmo com estímulo' },
      { label: 'Está tudo normal' },
    ],
  },
  {
    id: 'duracao',
    title: 'Faz quanto tempo que você sente esses sintomas relacionados à próstata?',
    component: 'OptionsStep',
    options: [
      { label: 'Menos de 6 Meses' },
      { label: '6 meses a 1 ano' },
      { label: 'Mais de 1 ano' },
      { label: 'Ainda não sinto' },
    ],
  },
  {
    id: 'remedios',
    title: 'Você sabia que 95% dos remédios de farmácia só mascaram os sintomas, causam efeitos colaterais e ainda acabam com sua libido?',
    component: 'OptionsStep',
     options: [
      { label: 'Sim, e estou pagando o preço por isso' },
      { label: 'Não sabia, mas agora faz sentido' },
      { label: 'Ainda uso, mas quero uma alternativa natural' },
      { label: 'Nunca usei esses remédios' },
    ],
  },
  {
    id: 'tratamento-natural',
    title: 'Você acredita que um tratamento natural pode ajudar?',
    component: 'OptionsStep',
    options: [
      { label: 'Sim, prefiro evitar medicamentos fortes' },
      { label: 'Estou disposto a testar algo natural' },
      { label: 'Tenho dúvidas, mas estou curioso' },
      { label: 'Não acredito' },
    ],
  },
];

const StepRenderer = ({ step, onNext, onMultiNext }: { step: any; onNext: () => void; onMultiNext: () => void; }) => {
  const stepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // We want the view to stay at the top.
    window.scrollTo(0, 0);
  }, [step]);
  
  const renderStep = () => {
    switch (step.component) {
      case 'IdadeStep':
        const ageRanges = [
          { id: 'age-40-49', label: '40 a 49 anos' },
          { id: 'age-50-59', label: '50 a 59 anos' },
          { id: 'age-60-69', label: '60 a 69 anos' },
          { id: 'age-65-plus', label: '65+ anos' },
        ];
        return (
          <QuizStepLayout title={step.title}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {ageRanges.map((range) => {
                const img = findImage(range.id);
                return (
                  <div key={range.id} onClick={onNext}>
                    <QuizOptionCard href="#">
                      {img && (
                        <Image
                          src={img.imageUrl}
                          alt={img.description}
                          width={150}
                          height={150}
                          className="mx-auto"
                          data-ai-hint={img.imageHint}
                        />
                      )}
                      <p className="mt-4 text-lg font-semibold">{range.label}</p>
                    </QuizOptionCard>
                  </div>
                );
              })}
            </div>
          </QuizStepLayout>
        );
      case 'ReportagemStep':
          const reportImage = findImage('report-ratinho');
          return (
            <div className="w-full max-w-4xl mx-auto">
              <Card className="overflow-hidden shadow-2xl">
                <CardHeader className="bg-destructive text-destructive-foreground p-4">
                  <h3 className="text-lg font-bold text-center uppercase">EXCLUSIVO: Programa do Ratinho</h3>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <CardTitle className="font-headline text-2xl md:text-4xl font-bold text-center">
                    {step.title}
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
                    <Button size="lg" className="text-lg animate-bounce" onClick={onNext}>
                      Quero Saber Mais
                      <MoveRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
      case 'ChecklistStep':
        return (
            <Card className="w-full max-w-2xl shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl font-bold md:text-3xl text-center">{step.title}</CardTitle>
                    {step.description && <CardDescription className="text-center">{step.description}</CardDescription>}
                </CardHeader>
                <CardContent className="space-y-4">
                    {step.options.map((option: any) => (
                    <div key={option.id} className="flex items-center space-x-3 rounded-lg border p-4 transition-colors hover:bg-muted/50">
                        <Checkbox id={option.id} className="h-6 w-6" />
                        <Label htmlFor={option.id} className="text-lg cursor-pointer flex-1">
                        {option.label}
                        </Label>
                    </div>
                    ))}
                </CardContent>
                 <CardFooter className="flex justify-center">
                    <Button size="lg" className="w-full max-w-xs text-lg" onClick={onMultiNext}>
                        Continuar
                        <MoveRight className="ml-2 h-5 w-5" />
                    </Button>
                </CardFooter>
            </Card>
        );
      case 'OptionsStep':
        return (
          <QuizStepLayout title={step.title}>
            <div className={`flex flex-col space-y-4 ${step.options.length > 2 ? 'max-w-lg' : 'max-w-md'} mx-auto`}>
              {step.options.map((option: any, index: number) => (
                <Button key={index} variant="outline" size="lg" className="w-full text-lg justify-start p-6 h-auto whitespace-normal text-left hover:bg-primary/10" onClick={onNext}>
                  {option.label}
                </Button>
              ))}
            </div>
          </QuizStepLayout>
        );
      case 'ImageOptionsStep':
        const image = findImage(step.imageId);
        return (
            <QuizStepLayout title={step.title}>
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
                    {step.options.map((option: any, index: number) => (
                        <Button key={index} variant="outline" size="lg" className="w-full text-lg justify-start p-6 h-auto whitespace-normal hover:bg-primary/10" onClick={onNext}>
                            {option.label}
                        </Button>
                    ))}
                    </div>
                </div>
            </QuizStepLayout>
        );
      default:
        return null;
    }
  };

  return <div ref={stepRef} className="flex items-center justify-center py-8">{renderStep()}</div>
};


export default function QuizPage() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    if (currentStepIndex < quizSteps.length - 1) {
      setTimeout(() => {
        setCurrentStepIndex(currentStepIndex + 1);
      }, 300); // Small delay for better UX
    } else {
      router.push('/analise');
    }
  };
  
    const handleMultiNext = () => {
    // This function is for checklists, so it doesn't do anything special yet
    // other than advancing to the next step.
    handleNext();
  };


  return (
    <div className="w-full">
        <StepRenderer
          key={currentStepIndex}
          step={quizSteps[currentStepIndex]}
          onNext={handleNext}
          onMultiNext={handleMultiNext}
        />
    </div>
  );
}
