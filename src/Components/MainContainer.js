//MainContainer essentially is our main display
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import images from './images'
import scrollLogic from './scrollLogic'

export default function MainContainer(props){
	//Adjusts the sliding of the innerMainContainer
	const [containerXPos, setContainerXPos] = useState('0%')


	const [containerYPos, setContainerYPos] = useState('0%')

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
	    //Use a ternary to set innerMainContainers translation to whatever the state
	    //of toggleWork is or the containerPos 
	    transform:`translate: (${toggleWork ? '0%' : containerXPos },0)`, 
	    config: { ease: 5000 } 
  	})

	const slideUp = useSpring({
	    from: { transform: 'translate(0%,0%)' },
	    //Use a ternary to set innerMainContainers translation to whatever the state
	    //of toggleWork is or the containerPos 
	    transform:`translate(0%,${containerYPos})`, 
	    config: { ease: 5000 } 
  	})

  	//Animation to adjust scrollFill's height
  	const heightInc = useSpring({
  		background:'red', 
	    height: `${height}%`
  	})

  	//Show is called when the About link or the button element is clicked
	function show(view){
		if(view === 'about' ){
			setToggleWork(!toggleWork)
			setContainerXPos('50')
			setNavWork(navWork === 'work' ? '': 'work')
			setNavAbout(navAbout === 'about' ? 'home': 'about')
		}
		else if(view === 'work'){
			setToggleWork(!toggleWork)
			setContainerXPos('-50%')
			setButton(button === '>' ? 'x': '>')
			setNavWork(navWork === 'work' ? 'home': 'work')
		}
		else{
			//in the nav bar set text to home or work
			setToggleWork(!toggleWork)
		}
	}

	//A unverisal function that is called whenever the user scrolls
	//When it's called scrollTop finds the amount of pixels from the top of the page to wherever the client currently is scrolled to.
	//scrollBottom gets the total height of the app then it subtracts the inner height
	//scrollPercent then divides the top from the bottom and multiples it by 100 to give us
	//a value in percentages which is then used to set the height of the scrollFill to be equal
	//to the amount the user has scrolled from the top.
	window.onscroll = function(){
		let scrollTop = document.documentElement.scrollTop
		let scrollBottom = document.documentElement.scrollHeight - document.documentElement.clientHeight
		let scrollPercent = scrollTop / scrollBottom * 100
		setHeight(scrollPercent)
			if(height >= 20 && height <= 29){
				setContainerYPos('-100%')
				if(height < 21){
					setContainerYPos('0')
				}
			}
			else if(height >= 50){
				setContainerYPos('-200%')
			}
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

				<animated.div style={slideUp} className="wrapR">
					<img src={images.img1} alt="placeHold"/>
					<img src={images.img2} alt="placeHold"/>
						<button onClick={()=>show('work')} className="toggleSlide">{button}</button>
				</animated.div>
				<div className="portfolio" id="home"></div>
				</div>
			</animated.div>

		</div>
	)
}
