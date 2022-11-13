import React from "react";
import Cardbody from "./Cardbody";
import CardList from "./CardList";

const Card = () => {
  const display = CardList.map((list) => {
    console.log(list);
    return <Cardbody key={list.id} list={list} />;
  });
  return <div className="flex flex-wrap justify-center">{display}</div>;
};

export default Card;
