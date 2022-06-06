/* 
    Este archivo servira como machote de nuestro Sitio Web
*/

import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

const Layout = () => {
    return (
        <div className="container">
            <div className='container__navbar'>
                <h2 className='container__navbar-title'>Book Shop</h2>
                <nav className='navbar'>
                    <Link to="/books" className='navbar__link'>Books</Link>
                    <Link to="/books/register" className='navbar__link'>Register</Link>
                </nav>
            </div>

            <div className='container__main'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout