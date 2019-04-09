//MainContainer essentially is our main display
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import images from './images'
import scrollLogic from './scrollLogic'

export default function MainContainer(props){
	//Adjusts the sliding of the innerMainContainer
	const [containerPos, setContainerPos] = useState('0%')

	//Toggles what About says in the navigation 
	const [toggleAbout, setToggleAbout] = useState(true)

	//Toggles what About says in the navigation
	const [toggleWork, setToggleWork] = useState(true)

	//Toggles what the button looks like on the right side of screen	
	const [button, setButton] = useState('>')

	//Changes About to say home
	const [navAbout, setNavAbout] = useState('about')

	//Changes work to say home
	const [navWork, setNavWork] = useState('work')

	//Set the height of psuedo scroll bar in center of screen
	const [height, setHeight] = useState(0)


	//Animation used to move the innerMainContainer element left or right
	const slide = useSpring({
	    from: { transform: 'translate(0%,0)' }, 
	    transform:`translate: (${toggleWork ? '0%' : containerPos },0)`, 
	    config: { ease: 5000 } 
  	})
  	const heightInc = useSpring({
  		background:'red', 
	    height: `${height}%`
  	})
	function show(view){
		if(view === 'about' ){
			setToggleWork(!toggleWork)
			setContainerPos('50')
			setNavWork(navWork === 'work' ? '': 'work')
			setNavAbout(navAbout === 'about' ? 'home': 'about')
		}
		else if(view === 'work'){
			setToggleWork(!toggleWork)
			setContainerPos('-50%')
			setButton(button === '>' ? 'x': '>')
			setNavWork(navWork === 'work' ? 'home': 'work')
		}
		else{
			//in the nav bar set text to home or work
			setToggleWork(!toggleWork)
		}
	}
	window.onscroll = function(){

		let scrollTop = document.documentElement.scrollTop
		let scrollBottom = document.documentElement.scrollHeight - document.documentElement.clientHeight
		let scrollPercent = scrollTop / scrollBottom * 100
		setHeight(scrollPercent)
		}
	return(
		<div className="mainContainer">
			<animated.div style={slide} className="innerMainContainer">
				<div className="leftContainer">
					<div className="wrapL">
					<animated.div style={heightInc}  className="scrollFill">
					</animated.div>
						<nav className="nav">
							<a href="#about" onClick={()=>show('about')}>{navAbout}</a>
						</nav>
					</div>
					<div className="about"></div>
				</div>

				<div className="rightContainer">

				<div className="wrapR">
				<img src={images.img1} alt="placeHold"/>
				<img src={images.img2} alt="placeHold"/>
					<button onClick={()=>show('work')} className="toggleSlide">{button}</button>
				</div>
				<div className="portfolio" id="home"></div>
				</div>
			</animated.div>

		</div>
	)
}
