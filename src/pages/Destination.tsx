import "./Destination.css"
import destinationbg from "../assets/destination/background-destination-mobile.jpg"
import moon from "../assets/destination/image-moon.png"
import europa from "../assets/destination/image-europa.png"
import titan from "../assets/destination/image-titan.png"
import mars from "../assets/destination/image-mars.webp"
import data from "../data.json"
import { useState } from "react"

function Destination() {
  const [planet, setPlanet] = useState(0)
  return (
    <div className="destinationcontainer">
      <img className="background" src={destinationbg} />
      <div className="step">
        <h3>01</h3>
        <h2>PICK YOUR DESTINATION</h2>
      </div>
      <div className="planetcontainer">
        <img
          className="planetimage"
          src={
            planet == 0
              ? moon
              : planet == 1
              ? mars
              : planet == 2
              ? europa
              : titan
          }
        />
      </div>
      <div className="planets">
        <ul>
          <li onClick={() => setPlanet(0)}>MOON</li>
          <li onClick={() => setPlanet(1)}>MARS</li>
          <li onClick={() => setPlanet(2)}>EUROPA</li>
          <li onClick={() => setPlanet(3)}>TITAN</li>
        </ul>
      </div>
    </div>
  )
}

export default Destination
