'use client';

import Accordion, {
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from '@/app/components/Accordion';

export default function Home() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Accessible Accordion</h1>
      <Accordion>
        <AccordionItem>
          {}
          <AccordionHeader>Introduction</AccordionHeader>
          <AccordionPanel>
            Ce composant est construit pour démontrer l'accessibilité dans une
            interface moderne.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>Fonctionnalités</AccordionHeader>
          <AccordionPanel>
            Navigation clavier, compatibilité lecteur d'écran, et une belle
            interface utilisateur.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>Conclusion</AccordionHeader>
          <AccordionPanel>
            Cet accordéon est un exemple parfait d'accessibilité et de design
            moderne.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
