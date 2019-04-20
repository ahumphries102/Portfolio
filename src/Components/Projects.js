import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function Index(props){
  	const indexSlide = useSpring({
  		
	    from: { transform: 'translate(0%,0%)' },
	    //Use a ternary to set innerMainContainers translation to whatever the state
	    //of toggleWork is or the containerPos 
	    transform:`translate(${props.indexXPos},0)`, 
  	})
	return(
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
	)
}