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
        <span className="line">f</span>
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
              <Link
                to="/"
                style={{
                  cursor: "pointer",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "11px",
                }}
              >
                <span>00</span> <p>HOME</p>
              </Link>
            </li>
            <li>
              <Link
                to="/destination"
                style={{
                  cursor: "pointer",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "11px",
                }}
              >
                <span>01</span> <p>DESTINATION</p>
              </Link>
            </li>
            <li>
              <Link
                to="/crew"
                style={{
                  cursor: "pointer",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "11px",
                }}
              >
                <span>02</span> <p>CREW</p>
              </Link>
            </li>
            <li>
              <Link
                to="/technology"
                style={{
                  cursor: "pointer",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "11px",
                }}
              >
                <span>03</span> <p>TECHNOLOGY</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
