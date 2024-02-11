import "./Header.css"
import logo from "../assets/shared/logo.svg"
import openmenu from "../assets/shared/icon-hamburger.svg"
import closemenu from "../assets/shared/icon-close.svg"
import { useState } from "react"
import { Link } from "react-router-dom"

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
              <Link to="/">
                <span>00</span> HOME
              </Link>
            </li>
            <li>
              <Link to="/destination">
                <span>01</span> DESTINATION
              </Link>
            </li>
            <li>
              <Link to="/crew">
                <span>02</span> CREW
              </Link>
            </li>
            <li>
              <Link to="/technology">
                <span>03</span> TECHNOLOGY
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
