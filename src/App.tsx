import { Route, Routes } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Home from "./pages/Home"
import Destination from "./pages/Destination"
import Crew from "./pages/Crew"
import Launch from "./pages/Launch"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Launch />} />
      </Routes>
    </>
  )
}

export default App
