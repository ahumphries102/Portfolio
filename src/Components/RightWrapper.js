import React from 'react'
import { animated } from 'react-spring'
import Images from './Images'
import Portfolio from './Portfolio'

export default function RightWrapper(props){

	return(
		<animated.div style={props.slideY} className="rightContainer">
			<div className="wrapR">
				<img src={Images.img1} alt="placeHold"/>
				<img src={Images.img2} alt="placeHold"/>
				<img src={Images.img3} alt="placeHold"/>
				<img src={Images.img4} alt="placeHold"/>
			</div>
			<Portfolio />
		</animated.div>

	)
}