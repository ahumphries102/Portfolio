import React, { Component }  from 'react'
import { Spring } from 'react-spring/renderprops'

export default class Animated2 extends Component{
	state = {
		show: false
	}
	render(){
		return(
			<Spring
				from={{ opacity: 0}}
				to={{ opacity: 1}}
				config={{delay:1000, duration:1000}}
		 	>
		      {props=>(
		        <div style={props}>
		          <div style={c2Style}>
		            <h1>dur</h1>
		            <button onClick={this.props.toggle}>Toggle</button>
		          </div>
		        </div>
		      )}
		    </Spring>
		) 
	}
}

const c2Style={
	background:'green',
	color:'white',
	padding:'1.5rem'
}