import React, { useState } from "react";
import "./../App.css";
import { Link, NavLink } from "react-router-dom";
import logo1 from "../images/Group (2).png";
import Modal from "./Modal";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      {openModal && <Modal closeModal={setOpenModal} />}
      <nav className="w-full flex items-center gap-3 justify-between px-8 py-6 lg:px-20 lg:py-8 text-lg bg-white">
        <div>
          <img src={logo1} alt="metabnb" />
        </div>
        <div className="navigation w-3/5 hidden lg:flex justify-between items-center gap-3">
          <div className="navbar w-3/5 flex justify-between">
            <NavLink to="/metabnb">Home</NavLink>
            <NavLink to="/place">Place to stay</NavLink>
            <NavLink to="#">NFTs</NavLink>
            <NavLink to="#">Community</NavLink>
          </div>
          <div>
            <button
              className="w-full nav-btn rounded-xl px-5 py-3 text-white"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              <Link>Connect Wallet</Link>
            </button>
          </div>
        </div>
        <div className="block lg:hidden space-y-2 ham" onClick={handleNav}>
          <span className="block w-8 h-1 nav-btn"></span>
          <span className="block w-8 h-1 nav-btn"></span>
          <span className="block w-8 h-1 nav-btn"></span>
        </div>
        {nav ? <Sidebar /> : null}
      </nav>
    </>
  );
};

export default Navbar;
