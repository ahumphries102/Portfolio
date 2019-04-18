import React, { useState } from 'react'
import { animated } from 'react-spring'
import Images from './Images'
import Portfolio from './Portfolio'
export default function RightWrapper(props){
	
	return(
		<animated.section style={props.slideY} className="rightContainer">

			<section style={props.wrapRFilter} className="wrapR">
				<div/>
				<div/>
				<div/>
				<div/>
			</section>
			<Portfolio />
		</animated.section>

	)
}