import React, { useState } from "react";
import "./../App.css";
import { Link, NavLink } from "react-router-dom";
import Modal from "./Modal";

const Sidebar = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      {openModal && <Modal closeModal={setOpenModal} />}

      <div className="navigation absolute p-4 w-full left-0 top-20 footer h-auto block">
        <div className="flex flex-col gap-3 w-auto text-white">
          <NavLink to="/metabnb">Home</NavLink>
          <NavLink to="/place">Place to stay</NavLink>
          <NavLink to="#">NFTs</NavLink>
          <NavLink to="#">Community</NavLink>
        </div>
        <div>
          <button
            className="w-3/4 md:w-1/3 nav-btn mt-2 rounded-xl px-5 py-3 text-white"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <Link>Connect Wallet</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
