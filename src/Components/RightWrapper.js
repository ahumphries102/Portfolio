import React from 'react'
import { animated } from 'react-spring'
import Portfolio from './Portfolio'
import Images from './Images'
export default function RightWrapper(props){

	return(
		<animated.section style={props.slideY} className="rightContainer">

			<section style={props.wrapRFilter} className="wrapR">
				<div className="wrapRImg">
					<img src={Images.capStoneCover}/>
				</div>
				<div className="wrapRImg">
					<img src={Images.deckBuildCover}/>
				</div>
				<div className="wrapRImg">
					<img src={Images.tomaCover}/>
				</div>
				<div className="wrapRImg">
					<img src={Images.gameJqueryCover}/>
				</div>
				<div className="wrapRImg">
					<img src={Images.porscheCover}/>
				</div>
			</section>

			<Portfolio />
		</animated.section>

	)
}