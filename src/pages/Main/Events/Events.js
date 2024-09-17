import React from "react";
import {
  Accordion,
  AccordionItem,
} from "../../../components/ui/Accordion/Accordion";

const Events = () => {
  return (
    <div className="w-full overflow-y-auto">
      <Accordion className="flex flex-wrap gap-5">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <AccordionItem
              value={index + 1}
              trigger={`Event ${index + 1}`}
              className="md:max-w-[30%] mb-5"
              key={index}
            >
              <p className="text-slate-400 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                maximus nibh at dolor vehicula faucibus. Praesent mattis rutrum
                auctor. Cras nec sodales risus, ac porttitor metus. Pellentesque
                interdum nisi neque, id tempus ex aliquam sit amet. Integer
                laoreet, dolor in tempus blandit, nibh urna scelerisque nisl,
                sed tristique enim ipsum et nibh.
              </p>
            </AccordionItem>
          ))}
      </Accordion>
    </div>
  );
};

export default Events;
