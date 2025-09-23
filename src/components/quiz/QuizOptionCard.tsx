import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

type QuizOptionCardProps = {
  href: string;
  children: React.ReactNode;
};

export function QuizOptionCard({ href, children }: QuizOptionCardProps) {
  return (
    <Link href={href} passHref className="block">
      <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl active:scale-95">
        <CardContent className="flex flex-col items-center justify-center p-4 text-center">
          {children}
        </CardContent>
      </Card>
    </Link>
  );
}
