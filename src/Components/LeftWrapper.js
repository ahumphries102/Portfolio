import React from 'react'
import { useSpring, animated } from 'react-spring'
import ScrollLogic from './ScrollLogic'
import HomeContent from './HomeContent'
export default function LeftWrapper(props){
  	//Animation to adjust scrollFill's height
  	const heightInc = useSpring({
  		background:'red',
	    height: `${props.height}%`,
	    width:`${props.width}%`
  	})

	return(
		<div className="leftContainer">
			<button onClick={()=>props.show('work')} className="toggleSlide">{props.button}</button>

			<div className="wrapL">
			<animated.div style={heightInc}  className="scrollFill">
			</animated.div>

			<ul className="scrollList">
				<ScrollLogic />
			</ul>

				<HomeContent />
				<nav className="nav">
					<button onClick={()=>props.show('about')}>{props.navAbout}</button>
				</nav>
			</div>

			<div className="about">
				<h1>I'm a weeb master</h1>
			</div>
		</div>
	)
}