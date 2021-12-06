import React from "react";
import workApi from "../API/workApi";

const HowItWorks = () => {
  return (
    <section>
      <div className="work-container container">
        <h1 className="main-heading text-center">How does it Work</h1>
        <div className="row">
          {workApi.map((curElem) => {
            const { id, logo, title, info } = curElem;

            return (
              <div
                key={id}
                className="col-12 col-lg-4 text-center work-container-subdiv"
              >
                <i className={`fontawesome-style ${logo}`}></i>
                <h2 className="sub-heading">{title}</h2>
                <p className="main-hero-para w-100">{info}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
