import React from 'react'
import { useSpring, animated } from 'react-spring'
import ScrollLogic from './ScrollLogic'
import HomeContent from './HomeContent'
import About from './About'
import Index from './Projects'
export default function LeftWrapper(props){
  	//Animation to adjust scrollFill's height
  	const heightInc = useSpring({
  		background:'red',
	    height: `${props.height}%`,
	    width:`${props.width}%`
  	})
	return(
		<section className="leftContainer">
			<button onClick={()=>props.show('work')} className="toggleSlide">{props.button}</button>
			<section className="wrapL">
			<animated.div style={heightInc}  className="scrollFill">
			</animated.div>
			<ul className="scrollList">
				<ScrollLogic />
			</ul>
			<HomeContent/>
			<nav className="nav">
				<button className="navButton" onClick={()=>props.show('about')}><span>{props.navAbout}</span></button>
				<button className="navButton" onClick={props.openCloseIndex}><span>Index</span></button>
			</nav>
			</section>
			<Index  indexXPos={props.indexXPos} openCloseIndex = {props.openCloseIndex}/>
			<About/>
		</section>
	)
}