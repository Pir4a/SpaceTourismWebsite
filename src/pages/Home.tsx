import backgroundmobile from "../assets/home/background-home-mobile.jpg"
import "./Home.css"

function Home() {
  return (
    <div className="homecontainer">
      <img src={backgroundmobile} />
      <div className="hero">
        <h2>SO, YOU WANT TO TRAVEL TO</h2>
        <h1>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="circle">
        <p>EXPLORE</p>
      </div>
    </div>
  )
}

export default Home
