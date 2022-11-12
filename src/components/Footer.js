import React from "react";
import logo2 from "../images/Group (3).png";
import Image from "./Image";
import Content from "./Content";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="footer w-full px-20 pt-12 pb-8 md:flex text-white gap-8">
      <div className="w-full mr-10 flex flex-col gap-y-10 justify-between">
        <Image src={logo2} />
        <div className="mt-10 w-1/3 flex justify-between">
          <box-icon type="logo" color="white" name="facebook"></box-icon>
          <box-icon type="logo" color="white" name="instagram"></box-icon>
          <box-icon type="logo" color="white" name="twitter"></box-icon>
        </div>
        <Content children="&copy; 2022 Metabnb" />
      </div>
      <div className="w-4/5 flex flex-col gap-4 text-sm foot-link">
        <Content children="Community" className="text-lg text-white" />
        <Button href="#" children="NFT" />
        <Button href="#" children="Tokens" />
        <Button href="#" children="Landlords" />
        <Button href="#" children="Discord" />
      </div>
      <div className="w-4/5 flex flex-col gap-4 text-sm foot-link">
        <Content children="Places" className="text-lg text-white" />
        <Button href="#" children="Castle" />
        <Button href="#" children="Farms" />
        <Button href="#" children="Beach" />
        <Button href="#" children="Learn more" />
      </div>
      <div className="w-4/5 flex flex-col gap-4 text-sm foot-link">
        <Content children="About us" className="text-lg text-white" />
        <Button href="#" children="Road map" />
        <Button href="#" children="Creators" />
        <Button href="#" children="Carrer" />
        <Button href="#" children="Contact us" />
      </div>
    </footer>
  );
};

export default Footer;
