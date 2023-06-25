import React, { ReactElement } from "react";

interface SectionProps {
  children: ReactElement | Array<ReactElement>;
  title?: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = (props) => {
  return (
    <section id={props.title} className={`relative ${props.className}`}>
      {props.children}
    </section>
  );
};

export default Section;
