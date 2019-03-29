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
  	return setButton(button === 'x' ? '>' : 'x')
  }

  function callTwoFunctions(){
  	toggleImg() 
  	toggleButton()
  }
	return(
		<section className="mainContainer">
			<div className="imgWrapper">
				<div className="placeHoldL">
					<div className="wrapL">
						<div className="introText">
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
						</div>
					</div>
				</div>
				<div className="wrapR">
					<button onClick={callTwoFunctions} className="toggleSlide">{button}</button>
					<div className="imgCon">
						<Animated toggle={toggle}/>
						<Animated2 toggle={toggle}/>
					</div>
				</div>
			</div>
		</section>
	)
}
