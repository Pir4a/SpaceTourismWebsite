import "./Launch.css"
import launchbgmobile from "../assets/technology/background-technology-mobile.jpg"
import launch from "../assets/technology/image-launch-vehicle-landscape.jpg"
import spaceport from "../assets/technology/image-spaceport-landscape.jpg"
import spacecapsule from "../assets/technology/image-space-capsule-landscape.jpg"
import { useState } from "react"

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
    </div>
  )
}

export default Launch
