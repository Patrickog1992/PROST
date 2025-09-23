import ChecklistStep from '@/components/quiz/ChecklistStep';

const options = [
  { id: 'comfort', label: 'Urinar com mais conforto' },
  { id: 'sleep', label: 'Dormir sem acordar de madrugada' },
  { id: 'potency', label: 'Melhorar minha potência sexual' },
  { id: 'swelling', label: 'Reduzir o inchaço da próstata' },
];

export default function MelhorarPage() {
  return (
    <ChecklistStep
      title="Marque todas as opções que deseja melhorar"
      options={options}
      nextStepUrl="/quiz/frequencia"
      buttonText="Continuar"
    />
  );
}
