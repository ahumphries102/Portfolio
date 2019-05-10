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
					{props.projects}
				</ul>
			</animated.section>
	)
}