'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import { type FC } from 'react';

type ChecklistStepProps = {
  title: string;
  description?: string;
  options: { id: string; label: string }[];
  nextStepUrl: string;
  buttonText?: string;
};

const ChecklistStep: FC<ChecklistStepProps> = ({
  title,
  description,
  options,
  nextStepUrl,
  buttonText = 'Continuar',
}) => {
  return (
    <Card className="w-full max-w-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl font-bold md:text-3xl text-center">{title}</CardTitle>
        {description && <CardDescription className="text-center">{description}</CardDescription>}
      </CardHeader>
      <CardContent className="space-y-4">
        {options.map((option) => (
          <div key={option.id} className="flex items-center space-x-3 rounded-lg border p-4 transition-colors hover:bg-muted/50">
            <Checkbox id={option.id} className="h-6 w-6" />
            <Label htmlFor={option.id} className="text-lg cursor-pointer flex-1">
              {option.label}
            </Label>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex justify-center">
        <Link href={nextStepUrl} passHref>
          <Button size="lg" className="w-full max-w-xs text-lg">
            {buttonText}
            <MoveRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ChecklistStep;
