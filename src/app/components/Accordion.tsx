'use client';

import React, { useState, ReactNode, ReactElement } from 'react';

// Types pour les props
interface AccordionProps {
  children: ReactNode;
}

interface AccordionItemProps {
  children: ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

interface AccordionHeaderProps {
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
}

interface AccordionPanelProps {
  isOpen: boolean;
  children: ReactNode;
}

// Composant principal Accordion
const Accordion: React.FC<AccordionProps> = ({ children }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child)
          ? React.cloneElement(child as ReactElement<AccordionItemProps>, {
              isOpen: openIndex === index,
              onToggle: () => handleToggle(index),
            })
          : child
      )}
    </div>
  );
};

// AccordionItem : Propage les props vers Header et Panel
export const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  isOpen = false,
  onToggle,
}) => (
  <div className="border border-gray-300 rounded-md shadow-sm">
    {React.Children.map(children, (child) =>
      React.isValidElement(child) && child.type === AccordionHeader
        ? React.cloneElement(child as ReactElement<AccordionHeaderProps>, {
            isOpen,
            onToggle,
          })
        : React.isValidElement(child) && child.type === AccordionPanel
        ? React.cloneElement(child as ReactElement<AccordionPanelProps>, {
            isOpen,
          })
        : child
    )}
  </div>
);

// Header : Bouton avec gestion d'ouverture
export const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  isOpen,
  onToggle,
  children,
}) => (
  <button
    onClick={onToggle}
    aria-expanded={isOpen}
    className={`w-full text-left px-4 py-2 font-medium ${
      isOpen ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
    }`}
  >
    {children} <span>{isOpen ? '▲' : '▼'}</span>
  </button>
);

// Panel : Affichage conditionnel
export const AccordionPanel: React.FC<AccordionPanelProps> = ({
  isOpen,
  children,
}) => (
  <div
    role="region"
    className={`px-4 py-2 transition-all duration-200 ${
      isOpen ? 'block' : 'hidden'
    }`}
  >
    {children}
  </div>
);

export default Accordion;
