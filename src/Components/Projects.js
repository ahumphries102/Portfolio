import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function Projects(props){
  	const projectsSlide = useSpring({
  		
	    from: { transform: 'translate(0%,0%)' },
	    //Use a ternary to set innerMainContainers translation to whatever the state
	    //of toggleWork is or the containerPos 
	    transform:`translate(${props.projectsXPos},0)`, 
  	})
	return(
		<animated.section style={projectsSlide} className="projects">
				<ul>
					<li>
						<a href="#pro1" onClick={props.openCloseProjects} className="projectsButton">Magic the Gathering Tutorial</a>
					</li>/
					<li>
						<a href="#pro2" onClick={props.openCloseProjects} className="projectsButton">Magic the Gathering Deck Builder</a>
					</li>/
					<li>
						<a href="#pro3" onClick={props.openCloseProjects} className="projectsButton">Tomogatchi Game</a>
					</li>/
					<li>
						<a href="#pro4" onClick={props.openCloseProjects} className="projectsButton">Typography Quiz</a>
					</li>
				</ul>
			</animated.section>
	)
}