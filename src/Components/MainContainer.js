//MainContainer essentially is our main display
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import images from './images'
import scrollLogic from './scrollLogic'

export default function MainContainer(props){
	const [navPos, setNavPos] = useState('0%')
	const [toggleAbout, setToggleAbout] = useState(true)
	const [toggleWork, setToggleWork] = useState(true)
	const [button, setButton] = useState('>')
	const [navAbout, setNavAbout] = useState('about')
	const [navWork, setNavWork] = useState('work')
	const [inc, setInc] = useState(0)
	const [currentInc, setCurrentInc] = useState(0)
	// set the height of psuedo scroll bar in center of screen
	const [height, setHeight] = useState(0)



	const slide = useSpring({
	    zIndex:'1', 
	    from: { transform: 'translate(0%,0)' }, 
	    transform:`translate: (${toggleWork ? '0%' : navPos },0)`, 
	    config: { ease: 5000 } 
  	})
  	const heightInc = useSpring({
  		background:'red', 
	    height: `${height}%`
  	})
	function show(view){
		if(view === 'about' ){
			setToggleWork(!toggleWork)
			setNavPos('50')
			setNavWork(navWork === 'work' ? '': 'work')
			setNavAbout(navAbout === 'about' ? 'home': 'about')
		}
		else if(view === 'work'){
			setToggleWork(!toggleWork)
			setNavPos('-25%')
			setButton(button === '>' ? 'x': '>')
			setNavWork(navWork === 'work' ? 'home': 'work')
			setNavAbout(navAbout === 'about' ? '': 'about')
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

				<animated.div style={slide} className="leftContainer">
					<div className="wrapL">
					<animated.div style={heightInc}  className="scrollFill">
					</animated.div>
						<nav className="nav">
							<a href="#about" onClick={()=>show('about')}>{navAbout}</a>
						</nav>
					</div>
					<div className="about"></div>
				</animated.div>
				<div className="rightContainer">

				<div className="wrapR">
				<img src={images.img1} alt="placeHold"/>
				<img src={images.img2} alt="placeHold"/>
					<button onClick={()=>show('work')} className="toggleSlide">{button}</button>
				</div>
				<div className="port" id="home"></div>
				</div>
		</div>
	)
}
