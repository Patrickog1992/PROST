import ChecklistStep from '@/components/quiz/ChecklistStep';

const options = [
  { id: 'pressure', label: 'Pressão ou queimação ao urinar' },
  { id: 'weak_stream', label: 'Interrupção ou jato fraco de urina' },
  { id: 'full_bladder', label: 'Sensação de bexiga cheia mesmo após urinar' },
  { id: 'pain', label: 'Dor na região pélvica, lombar ou testicular' },
  { id: 'night_waking', label: 'Levantar 1 ou mais vezes à noite para urinar' },
];

export default function SintomasPage() {
  return (
    <ChecklistStep
      title="Você já sentiu algum desses sintomas abaixo?"
      description="Marque todas opções que está sentindo ou já sentiu."
      options={options}
      nextStepUrl="/quiz/esforco"
      buttonText="Continuar"
    />
  );
}
