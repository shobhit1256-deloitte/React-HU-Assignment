import React from 'react'
import Navbar from "./Navbar"
import "./styles/home.scss"
import Bg1 from "../assets/images/home.png"

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="hero container grid grid--1x2" id="home_page">
        <div id="hero__tagline">
          <h2 className="hero__heading">
            <span style={{ color: "#EF629F" }}>WE</span> put our people first.
          </h2>
         <hr className="hero__heading"/>
        <p className="hero__text">Building and Sustaining a high trust culture</p>
        </div>

        <div>
          <img src={Bg1} alt="Error" className="hero__image" />
        </div>
      </div>
    </div>
  )
}
