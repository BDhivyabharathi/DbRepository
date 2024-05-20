import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='header-nav'>
            <img src='https://th.bing.com/th/id/R.1e1b4876912114650bd45f57a6aba378?rik=dva95ASvm%2bTj6w&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ftravel-clipart-transparent%2ftravel-clipart-transparent-13.png&ehk=pInwdvArYjNesB5SWU1dG4sND4DeTkWRYcCYaZJmRak%3d&risl=&pid=ImgRaw&r=0' height={'60px'} width={'60px'} padding-top={'20px'} />
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/services'>Services</NavLink>
            <NavLink to='/pricing'>Pricing</NavLink>
            <NavLink to='/about'>AboutUs</NavLink>
            <NavLink to='/contact'>ContactUs</NavLink>
        </nav>
    )
}
