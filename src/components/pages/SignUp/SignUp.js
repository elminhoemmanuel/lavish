import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import { homeObjFour, homeObjThree} from './Data'

const SignUp = () => {
    return (
        <>
            
            <HeroSection {...homeObjFour}/>
            <Pricing />
            <HeroSection {...homeObjThree}/>
        </>
    )
}

export default SignUp
