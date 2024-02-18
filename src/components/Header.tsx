import "./Header.css"
import logo from "../assets/shared/logo.svg"
import openmenu from "../assets/shared/icon-hamburger.svg"
import closemenu from "../assets/shared/icon-close.svg"
import { useRef, useState } from "react"
import { Link } from "react-router-dom"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [underline, setUnderline] = useState("home")

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
        <span className="line"></span>
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
            <li
              id="home"
              onClick={() => {
                setUnderline("home"), setIsMenuOpen(false)
              }}
            >
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
              <span className={underline == "home" ? "underlined" : ""}></span>
            </li>
            <li
              id="destination"
              onClick={() => {
                setUnderline("destination"), setIsMenuOpen(false)
              }}
            >
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
              <span
                className={underline == "destination" ? "underlined" : ""}
              ></span>
            </li>
            <li
              id="crew"
              onClick={() => {
                setUnderline("crew"), setIsMenuOpen(false)
              }}
            >
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
              <span className={underline == "crew" ? "underlined" : ""}></span>
            </li>
            <li
              id="technology"
              onClick={() => {
                setUnderline("technology"), setIsMenuOpen(false)
              }}
            >
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
              <span
                className={underline == "technology" ? "underlined" : ""}
              ></span>
            </li>
          </ul>
        </nav>
      </div>
      {console.log(4)}
    </>
  )
}

export default Header
