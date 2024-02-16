import crewbgmobile from "../assets/crew/background-crew-mobile.jpg"
import crewbgdesktop from "../assets/crew/background-crew-desktop.jpg"
import victor from "../assets/crew/image-victor-glover.png"
import mark from "../assets/crew/image-mark-shuttleworth.png"
import douglas from "../assets/crew/image-douglas-hurley.png"
import anousheh from "../assets/crew/image-anousheh-ansari.png"
import { useState } from "react"
import data from "../data.json"
import "./Crew.css"

function Crew() {
  const [commander, setCommander] = useState(0)

  return (
    <div className="crewcontainer">
      <img className="background" src={crewbgmobile} />
      <img className="background bgdesktop" src={crewbgdesktop} />
      <div className="step">
        <h3>02</h3>
        <h2>MEET YOUR CREW</h2>
      </div>
      <div className="commanderimgcontainer">
        <img
          className="commanderimg"
          src={
            commander == 0
              ? douglas
              : commander == 1
              ? mark
              : commander == 2
              ? victor
              : anousheh
          }
        />
      </div>
      <div className="crewrightcontainer">
        <div className="slider">
          <ul>
            <li className="oval" onClick={() => setCommander(0)}></li>
            <li className="oval" onClick={() => setCommander(1)}></li>
            <li className="oval" onClick={() => setCommander(2)}></li>
            <li className="oval" onClick={() => setCommander(3)}></li>
          </ul>
        </div>
        <div className="commandername">
          <h4>{data.crew[commander].role.toUpperCase()}</h4>
          <h3>{data.crew[commander].name.toUpperCase()}</h3>
        </div>
        <div className="commanderdescription">
          <p>{data.crew[commander].bio}</p>
        </div>
      </div>
    </div>
  )
}

export default Crew
