import React from "react";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar fixed top-0 h-15 w-full bg-gray-800 text-white p-4">
        <ul className="navbar-list flex justify-between">
          <li className="">
            <a href="#about">About</a>
          </li>
          <li className="">
            <a href="#products">Products</a>
          </li>
          <li className="">
            <a href="#reviews">Reviews</a>
          </li>
        </ul>
      </nav>
      <div className="mb-15"></div>
    </>
  );
};
