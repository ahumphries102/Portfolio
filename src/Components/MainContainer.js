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
	const [height, setHeight] = useState('50%')

	const slide = useSpring({
	    zIndex:'1', 
	    from: { transform: 'translate(0%,0)' }, 
	    transform:`translate: (${toggleWork ? '0%' : navPos },0)`, 
	    config: { ease: 5000 } 
  	})
  	const heightInc = useSpring({
  		background:'red', 
	    height: height
  	})
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
			setButton(button === '>' ? 'x': '>')
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
		<animated.div style={slide} className="mainContainer" id="mainCon">
				<div className="about" id="about">
				</div>
				<div className="wrapL" id="">
				<animated.div style={heightInc} onScroll={console.log('hey')} className="scrollFill"></animated.div>
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
				<div onClick={()=>show('work')} className="wrapR">
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
