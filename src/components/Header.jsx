import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='mt-5'>
        <h1 className='mx-3 text-center'>REGISTRO DE MILANESAS - DON PICO</h1>
        <nav className='navbar'>
            <ul className='navbar-nav d-flex flex-row fs-5 px-4'>
                <li className='nav-item mx-2'><Link to="/" className='nav-link'>HOME</Link></li>
                <li className='nav-item mx-2'><Link to="/bandejas" className='nav-link'>BANDEJAS</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header