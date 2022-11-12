import React from "react";
import Button from "./Button";
import Content from "./Content";
import Image from "./Image";
import wallt1 from "../images/image 66.png";
import wallt2 from "../images/image 69.png";

const Modal = ({ closeModal }) => {
  return (
    <>
      <div className="w-screen h-screen modal fixed flex">
        <div className="w-2/5 border-2 rounded-lg bg-white m-auto">
          <header className="w-full flex justify-between p-4">
            <Content children="Connect Wallet" className="text-lg meta" />
            <Button
              children="X"
              onClick={() => {
                closeModal(false);
              }}
            />
          </header>
          <hr />
          <main className="p-4">
            <Content children="Choose your preferred wallet:" />
            <div className="flex justify-between mt-4 items-center border-2 px-4 py-1 bord rounded-lg">
              <div className="w-1/4 flex justify-between items-center">
                <Image src={wallt1} />
                <Content children="Metamask" className="meta text-lg" />
              </div>
              <box-icon name="chevron-right"></box-icon>
            </div>

            <div className="flex justify-between mt-4 items-center border-2 px-4 py-1 bord rounded-lg">
              <div className="w-1/4 flex justify-between items-center">
                <Image src={wallt2} />
                <Content children="Metamask" className="meta text-lg" />
              </div>
              <box-icon name="chevron-right"></box-icon>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Modal;
