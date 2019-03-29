//MainContainer essentially is our main display
import React, { Component } from 'react'
import Animated from './Animated'

export default class MainContainer extends Component{
	state = {
		isVisible:true
	}
 	render(){
		return(
			<section className="mainContainer">
				<div className="imgWrapper">
					<div className="placeHoldL">
						<div className="wrapL">
							<div className="introText">
								wop
							</div>
						</div>
					</div>
					<div className="wrapR">
						<div className="imgCon">
							<Animated />
						</div>
					</div>
				</div>
			</section>
		)
	}
}