import React from 'react'
import loginImage from '../assets/images/login.svg'
import signupImage from '../assets/images/signup.svg'
import classes from '../styles/Illustration.module.css'

export default function Illustration({page}) {
    return (
        <div className={classes.illustration}>
            <img src={(page==='login') ? loginImage : signupImage} alt="Signup" />
          </div>
    )
}
