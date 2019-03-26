import React  from 'react'
import { Spring } from 'react-spring/renderprops'

export default function Animated2 (){
	return(
		<Spring
		from={{ opacity: 0}}
		to={{ opacity: 1}}
		config={{delay:1000, duration:1000}}
	 	>
	      {props=>(
	        <div style={props}>
	          <div style={c3Style}>
	            <h1>dur</h1>
	          </div>
	        </div>
	      )}
	    </Spring>
	)
}

const c3Style={
	background:'pink',
	padding:'1.5rem'
}