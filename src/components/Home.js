import React from "react";
import "boxicons";
import Button from "./Button";
import Content from "./Content";
import "./../App.css";
import Image from "./Image";
import firstImage from "./../images/Group 4028.png";
import brand1 from "../images/Group 59537.png";
import brand2 from "../images/Group 4040.png";
import brand3 from "../images/Frame 4041.png";
import Card from "./Card";
import mftlogo from "../images/Frame 59546.png";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className=" bg-white">
        <header className="px-20 py-8 flex navbar items-center gap-10">
          <div className="w-full">
            <p className="text-5xl leading-11">
              Rent a <span className="span ">Place</span> away from{" "}
              <span className="span ">Home</span> in the{" "}
              <span className="span ">Metaverse</span>
            </p>
            <Content
              className="mt-5 text-xl leading-8"
              children="We provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone"
            />
            <div className="flex mt-5 pr-6">
              <input
                type="text"
                placeholder="Search for location"
                className="w-full border-2 indent-3 border-r-0 rounded-tl-lg rounded-bl-lg"
              />
              <Button
                children="Search"
                type="submit"
                className="w-2/4 text-white text-center nav-btn rounded-tr-lg rounded-br-lg px-5 py-2"
              />
            </div>
          </div>
          <div className="w-full">
            <Image src={firstImage} alt="picture frame" className="m-auto" />
          </div>
        </header>
        <main>
          <section className="nav-btn px-14 py-2 flex justify-between items-center my-10">
            <div>
              <Image src={brand1} />
            </div>
            <div>
              <Image src={brand2} />
            </div>
            <div>
              <Image src={brand3} />
            </div>
          </section>

          <section className="px-20 py-8">
            <Content
              children="Inspiration for your next adventure"
              className="text-center text-5xl bold"
            />
            <Card />
          </section>

          <section className="nav-btn text-white px-20 py-8 md:flex items-center">
            <div className="w-full">
              <Content children="Metabnb NFTs" className="text-4xl my-6" />
              <Content
                children="Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services."
                className="w-8/12 leading-8 my-6"
              />
              <Button
                children="Learn More"
                className="w-1/4 span text-center bg-white rounded-lg px-5 py-2"
              />
            </div>
            <div className="w-full my-6">
              <Image src={mftlogo} />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
