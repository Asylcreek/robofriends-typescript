import * as React from "react";

interface IScroll {
  children: React.ReactElement;
}

const Scroll = ({ children }: IScroll) => {
  return (
    <div
      style={{ overflow: "scroll", border: "5px solid black", height: "800px" }}
    >
      {children}
    </div>
  );
};

export default Scroll;
