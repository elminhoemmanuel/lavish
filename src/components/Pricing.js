import React from 'react'
import { FaFire } from 'react-icons/fa'
import { BsXDiamondFill } from 'react-icons/bs'
import { GiCrystalize } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import { IconContext } from 'react-icons/lib'
import './Pricing.css'

const Pricing = () => {
    return (
        <IconContext.Provider value={{color:'#fff', size:64}}>
        <div>
            <div className="pricing__section">
                <div className="pricing__wrapper">
                    <h1 className='pricing__heading'>Pricing</h1>
                    <div className="pricing__container">
                        <Link to='/sign-up' className='pricing__container-card'>
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <FaFire />
                                </div>
                                <h3>Starter</h3>
                                <h4>NGN 5000</h4>
                                <p>per month</p>
                                <ul className='pricing__container-features'>
                                    <li>50 edits</li>
                                    <li>50 saves</li>
                                    <li>Content support</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Choose Plan
                                </Button>
                            </div>
                        </Link>
                        <Link to='/sign-up' className='pricing__container-card'>
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <BsXDiamondFill />
                                </div>
                                <h3>Standard</h3>
                                <h4>NGN 10000</h4>
                                <p>per month</p>
                                <ul className='pricing__container-features'>
                                    <li>100 edits</li>
                                    <li>100 saves</li>
                                    <li>Content support</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='blue'>
                                    Choose Plan
                                </Button>
                            </div>
                        </Link>
                        <Link to='/sign-up' className='pricing__container-card'>
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <GiCrystalize />
                                </div>
                                <h3>Premium</h3>
                                <h4>NGN 20000</h4>
                                <p>per month</p>
                                <ul className='pricing__container-features'>
                                    <li>Unlimited edits</li>
                                    <li>Unlimited saves</li>
                                    <li>Content support</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Choose Plan
                                </Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </IconContext.Provider>
    )
}

export default Pricing
