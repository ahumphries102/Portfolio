//MainContainer essentially is our main display
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import RightWrapper from './RightWrapper'
import LeftWrapper from './LeftWrapper'
export default function MainContainer(){
	let ru = Math.ceil
	//Adjusts the X and Y translation sliding of the innerMainContainer
	const [containerXPos, setContainerXPos] = useState('0%')


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
	const [width, setWidth] = useState(1)

	const [homeState, setHomeState] = useState(true)
	const [containerYPos, setContainerYPos] = useState('0%')
	
	//Animation used to move the innerMainContainer element left or right
	const slideX = useSpring({
	    from: { transform: 'translate(0%,0)' },
	    //Use a ternary to set innerMainContainers translation to whatever the state
	    //of toggleWork is or the containerPos 
	    transform:`translate: (${toggleWork ? '0%' : containerXPos },0)`, 
	    config: { ease: 5000 } 
  	})

	const slideY = useSpring({
	    from: { transform: 'translate(0%,0%)' },
	    //Use a ternary to set innerMainContainers translation to whatever the state
	    //of toggleWork is or the containerPos 
	    transform:`translate(0%,${containerYPos})`, 
	    config: { ease: 5000 } 
  	})

  	//Show is called when the About link or the button element is clicked
	function show(view){
		if(view === 'about' ){
			setHomeState(false)
			setToggleWork(!toggleWork)
			setContainerXPos('50')
			setNavWork(navWork === 'work' ? '': 'work')
			setNavAbout(navAbout === 'about' ? 'home': 'about')
		}
		else{
			setHomeState(false)
			setToggleWork(!toggleWork)
			setContainerXPos('-50%')
			setButton(button === '>' ? 'x': '>')
			setNavWork(navWork === 'work' ? 'home': 'work')
		}
		//disable the ability to scroll if you're not on the Home section
		!toggleWork ? setHomeState(true) : setHomeState(false)
		!toggleWork ? setWidth(1) : setWidth(0)
	}

	//* A unverisal function that is called whenever the user scrolls
	//When it's called scrollTop finds the amount of pixels from the top of the page to wherever the client currently is scrolled to.
	//scrollBottom gets the total height of the app then it subtracts the inner height
	//scrollPercent then divides the top from the bottom and multiples it by 100 to give us
	//a value in percentages which is then used to set the height of the scrollFill to be equal
	//to the amount the user has scrolled from the top.
	
	window.onscroll = function(){
		if(homeState){
			/***** *This logic defines the scrollFill element *****/
			let scrollTop = document.documentElement.scrollTop
			let scrollBottom = document.documentElement.scrollHeight - document.documentElement.clientHeight
			let scrollPercent = scrollTop / scrollBottom * 100
			setHeight(scrollPercent)

		  	/*** Getting wrapR to scroll, the values are in percentages ***/
			if(ru(scrollPercent) >= 20 && ru(scrollPercent) <= 39.9){
				setContainerYPos('-100%')
			}
			else if(ru(scrollPercent) >= 40 && ru(scrollPercent) <= 59.9){
				setContainerYPos('-200%')
			}
			else if(ru(scrollPercent) >= 60 && ru(scrollPercent) <= 100){
				setContainerYPos('-300%')
			}
			else{
				setContainerYPos('0%')
			}
		console.log(ru(scrollPercent))
		}
	}
	return(
		<section className="mainContainer">
			<animated.section style={slideX} className="innerMainContainer">
				
				<LeftWrapper show={show} button={button} height={height} width={width} navAbout={navAbout}/>
				<RightWrapper slideY={slideY}/>
			</animated.section>
		</section>
	)
}
