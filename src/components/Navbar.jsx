import React from 'react'
import { Link } from "react-router-dom"
import {BiCameraMovie,BiSearchAlt2} from "react-icons/bi"


const Navbar = () => {
  return (
    <nav id="nav">
          <h2>
            <Link to={"/"}>
            <BiCameraMovie/>
                Ver Filmes
            </Link>
          </h2>
          <form>
              <input type="text" placeholder='Pesquisar filmes' />
              <button type='submit'>
                  <BiSearchAlt2/>
              </button>
          </form>
      </nav>
  )
}

export default Navbar