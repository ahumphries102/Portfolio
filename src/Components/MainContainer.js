//MainContainer essentially is our main display
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import Animated from './Animated'
import Animated2 from './Animated2'

export default function MainContainer(){
	

  const [toggle, setToggle] = useState(true)
  const [button, setButton] = useState('>')
  
  function toggleImg(){
  	return setToggle(!toggle)
  }

  function toggleButton(){
  	setButton(button === 'x' ? '>' : 'x')
  }

  function callTwoFunctions(){
  	toggleImg() 
  	toggleButton()
  	console.log(button)
  }
	return(
		<section className="mainContainer">
			<div className="about" id="about"></div>
			<div className="wrapL" id="">
				<nav className="nav">
					<a href="#about">about</a>
					<a href="#home">work</a>
				</nav>
			</div>
			<div className="wrapR" id="home">
			</div>
			<div className="port"></div>
		</section>
	)
}
