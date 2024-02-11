import { Route, Routes } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Home from "./pages/Home"
import Destination from "./pages/Destination"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
      </Routes>
    </>
  )
}

export default App
