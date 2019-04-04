//MainContainer essentially is our main display
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import Animated from './Animated'
//import Animated2 from './Animated2'

export default function MainContainer(){
	const [navPos, setNavPos] = useState('0%')
	const [toggleAbout, setToggleAbout] = useState(true)
	const [toggleWork, setToggleWork] = useState(true)
	const [button, setButton] = useState('>')
	const [navAbout, setNavAbout] = useState('about')
	const [navWork, setNavWork] = useState('work')

	const slide = useSpring({
	    zIndex:'1', 
	    from: { transform: 'translate(0%,0)' }, 
	    transform:`translate: (${toggleWork ? '0%' : navPos },0)`, 
	    config: { ease: 5000 } 
  	})
	// function toggleButton(){
	// 	setButton(button === 'x' ? '>' : 'x')
	// }
	function showAbout(){
		setNavAbout(navAbout === 'about' ? 'home' : 'about')
		setToggleAbout(!toggleAbout)
	}
	function show(view){
		if(view === 'about' ){
			setToggleWork(!toggleWork)
			setNavPos('25%')
			setNavWork(navWork === 'work' ? '': 'work')
			setNavAbout(navAbout === 'about' ? 'home': 'about')
			console.log('we are viewing', view)
		}
		else if(view === 'work'){
			setToggleWork(!toggleWork)
			setNavPos('-25%')
			setNavWork(navWork === 'work' ? 'home': 'work')
			setNavAbout(navAbout === 'about' ? '': 'about')
			console.log('we are viewing', view)
		}
		else{
			//in the nav bar set text to home or work
			setToggleWork(!toggleWork)
		}
	}
	return(
		<div>
			<nav className="nav">
				<a href="#" onClick={()=>show('about')}>{navAbout}</a>
				<a href="#" onClick={()=>show('work')}>{navWork}</a>
			</nav>
		<animated.div style={slide} className="mainContainer" id="mainCon">
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
