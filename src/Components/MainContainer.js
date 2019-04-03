//MainContainer essentially is our main display
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import Animated from './Animated'
import Animated2 from './Animated2'

export default function MainContainer(){
	const [toggleAbout, setToggleAbout] = useState(true)
	const [toggleWork, setToggleWork] = useState(true)
	const [button, setButton] = useState('>')
	const [shiftCon, setShiftCon] = useState(true)
	const [navAbout, setNavAbout] = useState('about')
	const [navWork, setNavWork] = useState('work')

	const togWork = useSpring({
	    zIndex:'1', 
	    from: { transform: 'translate(0%,0)' }, 
	    transform:`translate: (${toggleWork ? '0%' : '-25%'},0)`, 
	    config: { ease: 5000 } 
  	})

	const togAbout = useSpring({
	    zIndex:'1', 
	    from: { transform: 'translate(0%,0)' }, 
	    transform:`translate: (${toggleAbout ? '0%' : '25%'},0)`, 
	    config: { ease: 5000 } 
  	})
	function toggleButton(){
		setButton(button === 'x' ? '>' : 'x')
	}
	function showAbout(){
		setNavAbout(navAbout === 'about' ? 'home' : 'about')
		setToggleAbout(!toggleAbout)
		console.log(toggleWork)
	}
	function showWork(){
		setNavWork(navWork === 'work' ? 'home' : 'work')
		setToggleWork(!toggleWork)
	}
	return(
		<div>
			<nav className="nav">
				<a href="#" onClick={showAbout}>{navAbout}</a>
				<a href="#" onClick={showWork}>{navWork}</a>
			</nav>
		<animated.div style={togAbout, togWork} className="mainContainer" id="mainCon">
			<div className="about" id="about"></div>
			<div className="wrapL" id="">
			</div>
			<div className="wrapR">
			</div>
			<div className="port" id="home"></div>
		</animated.div>
		</div>
	)
}
