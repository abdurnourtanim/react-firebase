import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Error = () => {
  return (
    <>
      <Navbar />
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>WE ARE SORRY, PAGE NOT FOUND!</h2>
          <p>
            THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME
            CHANGED OR IS TEMPORARILY UNAVAILABLE.
          </p>
          <NavLink to="/">back to homepage</NavLink>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Error;
