import React from "react";
import Navbar from "./Navbar";
import aboutImg from "../assets/images/aboutImg.jpeg";
import "./styles/aboutUs.scss";
export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <section id="about" className="about">
        <div className="container">
          <div className="col-lg-6 video-box">
            <img src={aboutImg} className="imgaboutUs" alt="image" />
          </div>
          <div className="aboutText">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam dolor
            aperiam praesentium vel laborum qui atque ab nesciunt quae labore?
            A, repellat delectus optio et libero, architecto eum quaerat error
            quidem, eaque odio saepe. Atque aliquid nihil iure aperiam sed ea
            cumque voluptas, impedit ad iste repellat eius fugiat dignissimos,
            amet commodi facilis voluptatibus, id quod! Asperiores fugiat
            adipisci doloremque? <span style={{color:"black"}}>~Founder</span> 
          </div>
        </div>
      </section>
      <section id="about" className="about">
        <div className="container">
          
          <div className="aboutText">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam dolor
            aperiam praesentium vel laborum qui atque ab nesciunt quae labore?
            A, repellat delectus optio et libero, architecto eum quaerat error
            quidem, eaque odio saepe. Atque aliquid nihil iure aperiam sed ea
            cumque voluptas, impedit ad iste repellat eius fugiat dignissimos,
            amet commodi facilis voluptatibus, id quod! Asperiores fugiat
            adipisci doloremque? <span style={{color:"black"}}>~Co-Founder</span> 
          </div>
          <div className="col-lg-6 video-box">
            <img src={aboutImg} className="imgaboutUs" alt="image" />
          </div>
        </div>
      </section>
    </div>
  );
}
