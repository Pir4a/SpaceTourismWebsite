import "./Destination.css"
import destinationbg from "../assets/destination/background-destination-mobile.jpg"
import destinationbgdesktop from "../assets/destination/background-destination-desktop.jpg"
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
      <img className="background bgdesktop" src={destinationbgdesktop} />

      <div className="step">
        <h3>01</h3>
        <h2>PICK YOUR DESTINATION</h2>
      </div>
      <div className="leftcontainer">
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
      </div>
      <div className="rightcontainer">
        <div className="planets">
          <ul>
            <li
              className={planet == 0 ? "target" : "hovered"}
              onClick={() => setPlanet(0)}
            >
              MOON
            </li>
            <li
              className={planet == 1 ? "target" : "hovered"}
              onClick={() => setPlanet(1)}
            >
              MARS
            </li>
            <li
              className={planet == 2 ? "target" : "hovered"}
              onClick={() => setPlanet(2)}
            >
              EUROPA
            </li>
            <li
              className={planet == 3 ? "target" : "hovered"}
              onClick={() => setPlanet(3)}
            >
              TITAN
            </li>
          </ul>
        </div>
        <div className="destination">
          <h1>{data.destinations[planet].name}</h1>
          <p>{data.destinations[planet].description}</p>
        </div>
        <div className="metrics">
          <div className="destination-distance">
            <h3>AVG. DISTANCE</h3>
            <h2>{data.destinations[planet].distance.toUpperCase()}</h2>
          </div>
          <div className="destination-traveltime">
            <h3>EST. TRAVEL TIME</h3>
            <h2>{data.destinations[planet].travel.toUpperCase()}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination
