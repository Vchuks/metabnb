import React, { useState } from "react";
import "./../App.css";
import { Link, NavLink } from "react-router-dom";
import logo1 from "../images/Group (2).png";
import Modal from "./Modal";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      {openModal && <Modal closeModal={setOpenModal} />}
      <nav className="w-full flex items-center gap-3 justify-between px-20 py-8 text-lg bg-white">
        <div>
          <img src={logo1} alt="metabnb" />
        </div>
        <div className="navigation w-3/5 flex justify-between items-center gap-3">
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
      </nav>
    </>
  );
};

export default Navbar;
