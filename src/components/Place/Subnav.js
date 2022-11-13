import React from "react";
import Button from "../Button";
import Image from "../Image";
import im from "../../images/setting-5.png";

const Subnav = () => {
  return (
    <div className="w-full px-8 lg:px-20 pt-8 text-lg justify-between items-center flex flex-wrap">
      <Button href="#" children="Restaurant" />
      <Button href="#" children="Cottage" />
      <Button href="#" children="Castle" />
      <Button href="#" children="Fantast city" />
      <Button href="#" children="beach" />
      <Button href="#" children="Carbins" />
      <Button href="#" children="Off-grid" />
      <Button href="#" children="Farm" />
      <div className="border-2 py-2 px-4 rounded-lg flex justify-between gap-2">
        <Button href="#" children="Location" className="text-base" />
        <Image src={im} />
      </div>
    </div>
  );
};

export default Subnav;
