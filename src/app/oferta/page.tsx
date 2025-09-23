import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { findImage } from "@/lib/utils";
import { BadgeCheck, Dumbbell, Leaf, Lock, Utensils, Zap, Sprout } from "lucide-react";
import Image from "next/image";

const bonuses = [
    { icon: Leaf, title: "GARRAFADA PODEROSA PARA PROSTATA", text: "Receita Completa em Vídeo passo a passo da Garrafada Poderosa. Uma fórmula tradicional e natural, preparada para ajudar a desinflamar a próstata, melhorar o fluxo urinário e devolver o bem estar." },
    { icon: Sprout, title: "10 Chás para Blindar a Próstata", text: "Receitas simples, eficazes e com ingredientes que você encontra em qualquer mercado." },
    { icon: Dumbbell, title: "Exercícios para Fortalecer o Fluxo Urinário", text: "Práticos e fáceis, ideais para fazer em casa e melhorar o controle da bexiga." },
    { icon: Zap, title: "Guia para Controlar a Ereção Acima dos 50 Anos", text: "Dicas naturais para recuperar seu desempenho sem depender de remédios." },
    { icon: Utensils, title: "Lista de Alimentos que Prejudicam a Próstata", text: "Saiba o que evitar para não continuar alimentando a inflamação sem saber." },
    { icon: BadgeCheck, title: "Guia de Qualidade de Vida", text: "Alimentação, sono, energia e disposição – tudo em um só lugar." },
];

const testimonials = [
  { id: 'testimonial-4', name: 'Marcos Rocha, 55', text: 'Achava que era normal da idade, mas estava enganado. Essa receita me deu mais disposição do que eu tinha aos 40. Incrível!' },
  { id: 'testimonial-5', name: 'Paulo Mendes, 69', text: 'Meu médico ficou surpreso com meus exames depois que comecei a tomar. A próstata diminuiu e os sintomas sumiram. Sou a prova viva de que funciona.' },
  { id: 'testimonial-6', name: 'Geraldo Lima, 72', text: 'Eu já tinha tentado de tudo. A Garrafada foi minha última esperança e a melhor decisão que tomei. Voltei a ter uma vida normal e sem dores.' },
];

const faqItems = [
    { q: "Como vou receber o acesso?", a: "O acesso à receita em vídeo e a todos os bônus é imediato após a confirmação do pagamento. Você receberá um e-mail com todas as instruções para acessar a área de membros." },
    { q: "É seguro comprar?", a: "Sim, 100% seguro. A transação é processada por uma das maiores plataformas de pagamentos online do Brasil, com criptografia de ponta para proteger seus dados." },
    { q: "A receita é fácil de preparar?", a: "Sim! O vídeo mostra o passo a passo de forma simples e direta. Os ingredientes são fáceis de encontrar em qualquer supermercado ou feira perto de você." },
    { q: "E se não funcionar para mim?", a: "Você tem uma garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito, basta nos enviar um e-mail e devolveremos 100% do seu dinheiro, sem perguntas." },
    { q: "Quais são as formas de pagamento?", a: "Aceitamos cartão de crédito, PIX e boleto bancário. Pagamentos com cartão e PIX liberam o acesso imediatamente." },
]


export default function OfertaPage() {
    const productImage = findImage('product-bottle');

    return (
    <main className="flex flex-col items-center bg-background py-12 px-4">
      <div className="w-full max-w-4xl space-y-12 text-center">
        
        <div className="space-y-4">
            <h1 className="text-2xl md:text-4xl font-bold flex items-center justify-center gap-2">
                <BadgeCheck className="w-10 h-10 text-green-600" />
                <span>Pronto! Analisamos suas respostas...</span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-primary">E temos uma ótima notícia. A GARRAFADA PODEROSA. É TUDO QUE VOCÊ PRECISA!</p>
        </div>

        {productImage && (
            <div className="max-w-md mx-auto">
                <Image src={productImage.imageUrl} alt={productImage.description} width={500} height={500} data-ai-hint={productImage.imageHint} />
            </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <Card className="border-red-500 border-2">
                <CardHeader>
                    <CardTitle className="text-red-500">ANTES</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Cansado, com a bexiga sempre cheia, baixa libido, sono picado e medo de problemas mais graves como hiperplasia ou câncer de próstata.</p>
                </CardContent>
            </Card>
            <Card className="border-green-600 border-2">
                <CardHeader>
                    <CardTitle className="text-green-600">DEPOIS</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Dormindo a noite inteira sem interrupções, urinando com força e controle, potência sexual renovada, energia em alta e saúde masculina blindada.</p>
                </CardContent>
            </Card>
        </div>

        <a href="#" target="_blank" className="block w-full max-w-lg mx-auto">
             <Button size="lg" className="w-full text-xl h-14 bg-green-600 hover:bg-green-700 text-white shadow-lg animate-pulse">PEGUE AGORA SUA RECEITA COMPLETA</Button>
        </a>

        <Card className="bg-primary/5 shadow-2xl text-left">
            <CardHeader className="text-center">
                <CardTitle className="text-3xl font-headline">OFERTA ESPECIAL POR TEMPO LIMITADO</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="text-center space-y-2">
                    <p className="text-2xl text-muted-foreground line-through">De <span className="font-bold">R$97,00</span> por apenas:</p>
                    <p className="text-6xl font-extrabold text-primary">R$19,90</p>
                    <p className="text-lg">ou 2x de R$10,38</p>
                </div>
                <a href="#" target="_blank" className="block w-full">
                    <Button size="lg" className="w-full text-2xl h-16 bg-green-600 hover:bg-green-700 text-white shadow-lg">
                        QUERO AGORA
                    </Button>
                </a>
                <p className="text-center text-sm text-muted-foreground">Como Funciona? Com base no que você respondeu, montamos um protocolo ideal para iniciar sua recuperação de forma natural, segura e eficaz. Esse tratamento é indicado para homens com os mesmos sintomas e desafios que você relatou e os resultados têm sido surpreendentes!</p>
            </CardContent>
        </Card>

        <div className="text-left space-y-4">
            <h2 className="text-3xl font-bold font-headline text-center">Além da Receita completa passo a passo da Garrafada, veja tudo que você vai receber: 👇🏻👇🏻👇🏻</h2>
            {bonuses.map((bonus, index) => (
                 <Card key={index} className="flex flex-col sm:flex-row items-start gap-4 p-4">
                    <bonus.icon className="w-12 h-12 text-primary flex-shrink-0 mx-auto sm:mx-0" />
                    <div>
                        <h3 className="font-bold text-lg">{bonus.title}</h3>
                        <p className="text-muted-foreground">{bonus.text}</p>
                    </div>
                </Card>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => {
                const img = findImage(testimonial.id);
                return (
                    <Card key={testimonial.id} className="text-center shadow-md">
                        <CardHeader className="items-center">
                            {img && <Image src={img.imageUrl} alt={testimonial.name} width={80} height={80} className="rounded-full border-4 border-primary" data-ai-hint={img.imageHint} />}
                            <CardTitle className="pt-2">{testimonial.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="italic">"{testimonial.text}"</p>
                        </CardContent>
                    </Card>
                )
            })}
        </div>

        <Card className="bg-muted/50 p-6 flex flex-col md:flex-row items-center gap-6 text-left">
            <Lock className="w-24 h-24 text-primary flex-shrink-0"/>
            <div>
                <CardTitle className="text-2xl">Garantia de 7 Dias</CardTitle>
                <CardDescription className="text-base mt-2">
                    Seu risco é zero. Se em até 7 dias você não notar uma melhora significativa nos seus sintomas, ou simplesmente não gostar da receita, basta enviar um único e-mail para nosso suporte e nós devolveremos 100% do valor investido. Sem burocracia e sem ressentimentos.
                </CardDescription>
            </div>
        </Card>

        <div className="w-full max-w-3xl mx-auto text-left">
            <h2 className="text-3xl font-bold font-headline text-center mb-6">Perguntas Frequentes</h2>
            <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-lg font-semibold">{item.q}</AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
                            {item.a}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </div>
    </main>
  );
}
