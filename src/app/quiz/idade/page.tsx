import { QuizOptionCard } from '@/components/quiz/QuizOptionCard';
import { QuizStepLayout } from '@/components/quiz/QuizStepLayout';
import { findImage } from '@/lib/utils';
import Image from 'next/image';

const ageRanges = [
  { id: 'age-40-49', label: '40 a 49 anos' },
  { id: 'age-50-59', label: '50 a 59 anos' },
  { id: 'age-60-69', label: '60 a 69 anos' },
  { id: 'age-65-plus', label: '65+ anos' },
];

export default function IdadePage() {
  return (
    <QuizStepLayout title="Qual a sua faixa etária?">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {ageRanges.map((range) => {
          const img = findImage(range.id);
          return (
            <QuizOptionCard key={range.id} href="/quiz/reportagem">
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
          );
        })}
      </div>
    </QuizStepLayout>
  );
}
