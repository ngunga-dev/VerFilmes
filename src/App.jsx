import {Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  return(
    <div className="App">
      <h2>Movies lib</h2>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
