import "./Header.css"
import logo from "../assets/shared/logo.svg"
import openmenu from "../assets/shared/icon-hamburger.svg"
import closemenu from "../assets/shared/icon-close.svg"
import { useState } from "react"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <div className="header">
        <img src={logo} className="logo" />
        <img
          src={openmenu}
          className="burgermenuicon"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen)
          }}
        />
      </div>
      <div
        className={isMenuOpen ? "navbarcontainer" : "navbarcontainer hidden"}
      >
        <img
          src={closemenu}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen)
          }}
        />
        <nav className="navbar">
          <ul>
            <li>
              <span>00</span> HOME
            </li>
            <li>
              <span>01</span> DESTINATION
            </li>
            <li>
              <span>02</span> CREW
            </li>
            <li>
              <span>03</span> TECHNOLOGY
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
