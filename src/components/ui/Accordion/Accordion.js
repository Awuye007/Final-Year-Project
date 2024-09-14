import React, { useEffect, useState } from "react";

const AccordionContext = React.createContext();

export const Accordion = React.memo(
  ({ children, value, onChange, ...props }) => {
    const [selected, setSelected] = useState(value);
    useEffect(() => {
      onChange?.(selected);
    }, [selected, onChange]);

    return (
      <ul {...props}>
        <AccordionContext.Provider value={{ selected, setSelected }}>
          {children}
        </AccordionContext.Provider>
      </ul>
    );
  }
);

export const AccordionItem = ({ children, value, trigger, ...props }) => {
  const { selected, setSelected } = React.useContext(AccordionContext);
  const open = selected === value;

  const ref = React.useRef();

  return (
    <li {...props}>
      <button
        type="button"
        onClick={() => setSelected(open ? null : value)}
        aria-expanded={open}
        className="flex justify-between items-center p-4 font-medium bg-slate-800 text-slate-400 rounded-2xl w-full"
      >
        {trigger}
        <i
          className={`fa-solid fa-chevron-down transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="p-2 pb-4" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
};
