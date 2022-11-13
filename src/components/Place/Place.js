import React from "react";
import Placelist from "./Placelist";
import Cardbody from "../Cardbody";
import Footer from "../Footer";
import Subnav from "./Subnav";
import Navbar from "../Navbar";

const Place = () => {
  const display = Placelist.map((list) => {
    console.log(list);
    return <Cardbody key={list.id} list={list} />;
  });
  return (
    <>
      <Navbar />
      <Subnav />
      <div className="px-8 py-6 lg:px-20 lg:py-8 flex flex-wrap justify-center">
        {display}
      </div>
      ;
      <Footer />
    </>
  );
};

export default Place;
