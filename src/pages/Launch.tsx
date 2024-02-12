import "./Launch.css"
import launchbgmobile from "../assets/technology/background-technology-mobile.jpg"
import launch from "../assets/technology/image-launch-vehicle-landscape.jpg"
import spaceport from "../assets/technology/image-spaceport-landscape.jpg"
import spacecapsule from "../assets/technology/image-space-capsule-landscape.jpg"
import { useState } from "react"
import data from "../data.json"

function Launch() {
  const [technology, setTechnology] = useState(0)
  return (
    <div className="launchcontainer">
      <img className="background" src={launchbgmobile} />
      <div className="step">
        <h3>03</h3>
        <h2>SPACE LAUNCH 101</h2>
      </div>
      <div className="launchimgcontainer">
        <img
          src={
            technology == 0
              ? launch
              : technology == 1
              ? spaceport
              : spacecapsule
          }
        />
      </div>
      <div className="navcircles">
        <ul>
          <li className="navcircle" onClick={() => setTechnology(0)}>
            1
          </li>
          <li className="navcircle" onClick={() => setTechnology(1)}>
            2
          </li>
          <li className="navcircle" onClick={() => setTechnology(2)}>
            3
          </li>
        </ul>
      </div>
      <div className="commandername tech">
        <h4>THE TERMINOLOGY</h4>
        <h3>{data.technology[technology].name.toUpperCase()}</h3>
      </div>
      <div className="commanderdescription techdescription">
        <p>{data.technology[technology].description}</p>
      </div>
    </div>
  )
}

export default Launch
