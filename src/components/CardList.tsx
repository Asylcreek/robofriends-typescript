import * as React from "react";
import Card from "./Card";

import { IRobot } from "../containers/App";

interface ICardList {
  robots: Array<IRobot>;
}

const CardList = ({ robots }: ICardList): React.ReactElement => {
  return (
    <div>
      {robots.map((el, i: number) => {
        return <Card key={i} id={el.id} name={el.name} email={el.email} />;
      })}
    </div>
  );
};

export default CardList;
