import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Example() {
  return (
    <Accordion className="max-w-96">
      <AccordionItem>
        <AccordionTrigger>What is this?</AccordionTrigger>
        <AccordionPanel>
          This is an accordion component that helps organize content.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>How does it work?</AccordionTrigger>
        <AccordionPanel>
          Click on any question to expand and see the answer.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>Is it customizable?</AccordionTrigger>
        <AccordionPanel>
          Yes, you can easily change its appearance to match your design.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
