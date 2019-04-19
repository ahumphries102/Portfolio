import React from 'react'
import { useSpring, animated } from 'react-spring'
import ScrollLogic from './ScrollLogic'
import HomeContent from './HomeContent'
import About from './About'

export default function LeftWrapper(props){
  	//Animation to adjust scrollFill's height
  	const heightInc = useSpring({
  		background:'red',
	    height: `${props.height}%`,
	    width:`${props.width}%`
  	})

  	const indexSlide = useSpring({
  		
	    from: { transform: 'translate(0%,0%)' },
	    //Use a ternary to set innerMainContainers translation to whatever the state
	    //of toggleWork is or the containerPos 
	    transform:`translate(${props.indexXPos},0)`, 
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

			<animated.section style={indexSlide} className="index">
				<ul>
					<li>
						<a href="#pro1" onClick={props.openCloseIndex} className="indexButton">Magic the Gathering Tutorial</a>
					</li>/
					<li>
						<a href="#pro2" onClick={props.openCloseIndex} className="indexButton">Magic the Gathering Deck Builder</a>
					</li>/
					<li>
						<a href="#pro3" onClick={props.openCloseIndex} className="indexButton">Tomogatchi Game</a>
					</li>/
					<li>
						<a href="#pro4" onClick={props.openCloseIndex} className="indexButton">Typography Quiz</a>
					</li>
				</ul>
			</animated.section>
			<About/>
		</section>
	)
}