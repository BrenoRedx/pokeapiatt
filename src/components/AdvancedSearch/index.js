import React from "react";
import { Accordion, AccordionItem, AccordionHeader } from "reactstrap";

export function AdvancedSearch() {
  return (
    <>
      {" "}
      <Accordion flush toggle={function noRefCheck() {}}>
        <AccordionItem>
          <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
          <AccordionItem accordionId="1">
            <strong>This is the first item's accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go
            within the <code>.accordion-body</code>, though the transition does
            limit overflow.
          </AccordionItem>
        </AccordionItem>
      </Accordion>
    </>
  );
}
