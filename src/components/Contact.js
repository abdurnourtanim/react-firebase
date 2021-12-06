import React, { useState } from "react";
import Button from "./Button";
import InputText from "./InputText";

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const postUserData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;

    console.log(firstName, lastName, phone, email, address, message);

    const res = fetch(
      "https://react-firebase-3a2ce-default-rtdb.asia-southeast1.firebasedatabase.app/userDataRecord.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          email,
          address,
          message,
        }),
      }
    );

    if (res) {
      setUserData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        message: "",
      });
      alert("Data Stored");
    } else {
      alert("Please fill-up form");
    }
  };

  return (
    <section className="contactus-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 mx-auto">
            <div className="row">
              <div className="contact-leftside col-12 col-lg-5">
                <h1 className="main-heading fw-bold">
                  Connect With Our <br /> Sales Team.
                </h1>
                <p className="main-hero-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt eaque alias similique.
                </p>
                <figure>
                  <img
                    src="./images/hero1.jpg"
                    alt="contatUsImg"
                    className="img-fluid"
                  />
                </figure>
              </div>

              {/* right side contact form  */}
              <div className="contact-rightside col-12 col-lg-7">
                <form method="POST">
                  <div className="row">
                    <InputText
                      styled="col-12 col-lg-6 contact-input-feild"
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={userData.firstName}
                      onChange={postUserData}
                    />
                    <InputText
                      styled="col-12 col-lg-6 contact-input-feild"
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={userData.lastName}
                      onChange={postUserData}
                    />
                  </div>
                  <div className="row">
                    <InputText
                      styled="col-12 col-lg-6 contact-input-feild"
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      value={userData.phone}
                      onChange={postUserData}
                    />
                    <InputText
                      styled="col-12 col-lg-6 contact-input-feild"
                      type="text"
                      name="email"
                      placeholder="Email ID"
                      value={userData.email}
                      onChange={postUserData}
                    />
                  </div>
                  <div className="row">
                    <InputText
                      styled="col-12 contact-input-feild"
                      type="text"
                      name="address"
                      placeholder="Add Address"
                      value={userData.address}
                      onChange={postUserData}
                    />
                  </div>

                  <div className="row">
                    <InputText
                      styled="col-12"
                      type="text"
                      name="massage"
                      placeholder="Enter Your Massage"
                      value={userData.massage}
                      onChange={postUserData}
                    />
                  </div>
                  <div className="form-check form-checkbox-style">
                    <input
                      className="form-check-input test"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label main-hero-para">
                      I agree that the thapatechnicalpay may contact me at the
                      email address or phone number above
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="btn btn-style w-100"
                    text="Submit"
                    onClick={submitData}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
