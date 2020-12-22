import React , {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'

function Navbar() {
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to="/" className="navbar-logo">
                        <FaBars className="navbar-icon"></FaBars>
                        VID
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/services' className='nav-links'>Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/product' className='nav-links'>Product</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
