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
			setNavPos('25%')
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
	function increaseHeight(){
		
		const scrolling = document.getElementById('wrapR').scrollTop.toFixed()

		if( scrolling < currentInc){
			setHeight(height - .5)
		}
		else{
			setHeight(height + .5)
		}

		const scrolled = document.getElementById('wrapR').scrollTop.toFixed()

		setCurrentInc(scrolled)
		console.log((scrolled / 100) * 10)
	}
	return(
		<animated.div style={slide} className="mainContainer" id="mainCon">
				<div className="about" id="about">
				</div>
				<div className="wrapL" id="">
				<animated.div style={heightInc}  className="scrollFill"></animated.div>
					<ul className='scrollList'>
						<li>
						</li>
						<li>
						</li>
						<li>
						</li>
						<li>
						</li>
						<li>
						</li>
						<li>
						</li>
						<li>
						</li>
						<li>
						</li>
						<li>
						</li>
						<li>
						</li>
					</ul>
					<nav className="nav">
						<a href="#about" onClick={()=>show('about')}>{navAbout}</a>
					</nav>
				</div>
				<div onClick={()=>show('work')} onScroll={()=>increaseHeight()} className="wrapR" id="wrapR" >
				<img src={images.img1}/>
				<img src={images.img2}/>
					<button className="toggleSlide">{button}</button>
				}
				}
				</div>
				<div className="port" id="home"></div>
		</animated.div>
	)
}
