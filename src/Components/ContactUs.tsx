import React from "react";
import Navbar from "./Navbar";
import contactImg from "../assets/images/contactus.svg";
import ContactUsForm from "./ContactUsForm";
import "./styles/contactus.scss"
export default function ContactUs() {
  return (
    <div>
      <Navbar />
      <section id="contact" className="contact">
        <div className="container">
            <div className="col-lg-6 video-box">
              <img src={contactImg} className="imgcontactUs" alt="image" />
            </div>
            <div className="form">
              <ContactUsForm />
            </div>
        </div>
      </section>
    </div>
  );
}
