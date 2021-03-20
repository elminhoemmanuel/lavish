import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'
import './MobileMenu.css'
import './Button.css'
import { Button } from './Button'
import { IconContext } from 'react-icons/lib'


const Navbar = () => {

    const [click, setClick] = useState(false);
    const [mobileopen, setMobileOpen] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () =>{
        setClick(!click)
        setMobileOpen(!mobileopen)
        
    }

    const closeMobileMenu = () =>{
        setMobileOpen(!mobileopen)
        setClick(!click)
    }

    const showButton = () =>{
        if (window.innerWidth <= 769){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    window.addEventListener('resize',showButton);

    useEffect(() =>{
        showButton();
    },[])

    return (
        <>
            <IconContext.Provider value={{color:'#fff'}}>
                {/* mobile screens menu */}
                <div className={mobileopen?'mobile-div open-menu':'mobile-div close-menu'}>
                    <div className='close' onClick={closeMobileMenu}>
                        <FaTimes/>
                    </div>
                    <div className='mobile-links'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu} >
                            Home
                        </Link>
                    </div>
                    <div className='mobile-links'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu} >
                            Services
                            
                        </Link>
                        
                    </div>
                    <div className='mobile-links'>
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu} >
                            Products
                        </Link>
                        
                    </div>
                    <div className='btn-lg nav-btn'>
                        {button ? (
                            <Link className="btn-link" to='sign-up'>
                                <Button buttonStyle='btn--outline'>Sign Up</Button>
                            </Link>
                        ) : (
                                <Link to='sign-up' className="btn-link" onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>Sign Up</Button>
                                </Link>
                        )}
                                
                    </div>
                    
                </div>

                <nav className="navbar">
                    {/* navbar for mobile */}
                    <div className="navbar-container container nav-mobile">
                        <div>
                            <Link to='/' className="navbar-logo">
                                <MdFingerprint className='navbar-icon'/>
                                Lavish
                            </Link>
                        </div>
                        <div className='menu-icon' onClick={handleClick}>
                            {click ? <FaTimes/> : <FaBars/> }
                        </div>
                    </div>

                    <div className='nav-lg navbar-container container'>
                        <div>
                            <Link to='/' className="navbar-logo">
                                <MdFingerprint className='navbar-icon'/>
                                Lavish
                            </Link>
                        </div>
                        <div className='nav-lg-right'>
                            <div className='nav-lg-div nav-item'>
                                <Link to='/' className='nav-links' >
                                    Home
                                </Link>
                            </div>
                            <div className='nav-lg-div nav-item'>
                                <Link to='/services' className='nav-links' >
                                    Services
                                </Link>
                            </div>
                            <div className='nav-lg-div nav-item'>
                                <Link to='/products' className='nav-links' >
                                    Products
                                </Link>
                            </div>
                            <div className='btn-lg nav-btn'>
                                {button ? (
                                    <Link to='sign-up' className="btn-link">
                                        <Button buttonStyle='btn--outline'>Sign Up</Button>
                                    </Link>
                                ) : (
                                    <Link to='sign-up' className="btn-link">
                                        <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>Sign Up</Button>
                                    </Link>
                                )}
                                
                            </div>
                        </div>

                    </div>

                </nav>
            </IconContext.Provider>    
        </>
    )
}

export default Navbar
