import "./Launch.css"
import launchbgmobile from "../assets/technology/background-technology-mobile.jpg"
import launchbgdesktop from "../assets/technology/background-technology-desktop.jpg"
import launch from "../assets/technology/image-launch-vehicle-landscape.jpg"
import spaceport from "../assets/technology/image-spaceport-landscape.jpg"
import spacecapsule from "../assets/technology/image-space-capsule-landscape.jpg"
import launchdesktop from "../assets/technology/image-launch-vehicle-portrait.jpg"
import spaceportdesktop from "../assets/technology/image-spaceport-portrait.jpg"
import spacecapsuledesktop from "../assets/technology/image-space-capsule-portrait.jpg"
import { useState } from "react"
import data from "../data.json"
import { useSwipeable } from "react-swipeable"

function Launch() {
  const [technology, setTechnology] = useState(0)

  const handlers = useSwipeable({
    onSwipedRight: () =>
      technology == 0 ? setTechnology(0) : setTechnology(technology - 1),
    onSwipedLeft: () =>
      technology == 2 ? setTechnology(2) : setTechnology(technology + 1),
    delta: 10,
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  })

  return (
    <div {...handlers} className="launchcontainer">
      <img className="background" src={launchbgmobile} />
      <img className="background bgdesktop" src={launchbgdesktop} />
      <div className="step launch">
        <h3>03</h3>
        <h2>SPACE LAUNCH 101</h2>
      </div>
      <div className="launchimgcontainer mobile">
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
      <div className="launchimgcontainer desktop">
        <img
          src={
            technology == 0
              ? launchdesktop
              : technology == 1
              ? spaceportdesktop
              : spacecapsuledesktop
          }
        />
      </div>
      <div className="leftcontainertechnology">
        <div className="navcircles">
          <ul>
            <li
              className={technology == 0 ? "navcircle on" : "navcircle"}
              onClick={() => setTechnology(0)}
            >
              1
            </li>
            <li
              className={technology == 1 ? "navcircle on" : "navcircle"}
              onClick={() => setTechnology(1)}
            >
              2
            </li>
            <li
              className={technology == 2 ? "navcircle on" : "navcircle"}
              onClick={() => setTechnology(2)}
            >
              3
            </li>
          </ul>
        </div>
        <div className="textcontainer">
          <div className="commandername tech">
            <h4>THE TERMINOLOGY...</h4>
            <h3>{data.technology[technology].name.toUpperCase()}</h3>
          </div>
          <div className="commanderdescription techdescription">
            <p>{data.technology[technology].description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Launch
