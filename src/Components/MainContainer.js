//MainContainer essentially is our main display
import React, { Component } from 'react'
//import ReactDOM from 'react-dom'
//import FetchDisplay from './FetchDisplay'
//import Navigation from "./Navigation"
import Animated from './Animated'
import Animated2 from './Animated2'
import Animated3 from './Animated3'
import { Transition, animated } from 'react-spring/renderprops'

export default class MainContainer extends Component{
	state = {
		isVisible:false
	}
	toggle = e => {
		this.setState({
			isVisible: !this.state.isVisible
		})
	}
 	render(){
		return(
			<section className="mainContainer" onWheel={this.durp}>
				<section className = "imgCon">
					<section className="imgWrapper">
						<section className = "placeHoldL">
						</section>
						<section className = "wrapL">
							<section className="introText">
								<h1>My name is Gorps</h1>
								<Button>Button</Button>
							</section>
						</section>
					</section>
					<section className = "wrapR">
						<h1>Helpo2</h1>
					</section>
					<section className = "wrapRO">
						<h1>Helpo3</h1>
					</section>
				</section>
			</section>
		)
	}
}