import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import './TypeWriter.css';
function TypeWriter() {
  return (
    <>
    <div className="fontsize">
          <Typewriter 
            words={['Front End Developer','React JS Developer']}
            loop={true}
          
            cursor
            
            cursorColor='#7045a6'

            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          
          />
          </div>
    </>
  )
}

export default TypeWriter
