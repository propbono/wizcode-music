import React from "react";

interface ContainerProps {
  children: React.ReactElement | Array<React.ReactElement>;
  className?: string;
}

export const Container: React.FC<ContainerProps> = (props) => {
  return (
    <div
      className={`container relative z-auto px-4 mx-auto ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Container;
