import React from "react";
import Content from "./Content";
import Image from "./Image";

const Cardbody = ({ list }) => {
  const { image, name, price, km, stay, rating } = list;
  return (
    <div>
      <div className="w-9 shadow-xl m-auto text-xs p-2 my-8 rounded-2xl">
        <Image src={image} className="m-auto mb-3" />
        <div className="flex justify-between py-1">
          <Content children={name} />
          <Content children={price} className="bd" />
        </div>
        <div className="flex justify-between selection py-1 ">
          <Content children={km} />
          <Content children={stay} />
        </div>
        <Image src={rating.rate} className="py-1" />
      </div>
    </div>
  );
};

export default Cardbody;
