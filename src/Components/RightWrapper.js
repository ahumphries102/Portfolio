import React from 'react'
import { animated } from 'react-spring'
import Portfolio from './Portfolio'
import Images from './Images'
export default function RightWrapper(props){

	return(
		<animated.section style={props.slideY} className="rightContainer">

			<section style={props.wrapRFilter} className="wrapR">
				<div className="wrapRImg">
					<img src={Images.capStoneCover} alt="placeholder"/>
				</div>
				<div className="wrapRImg">
					<img src={Images.deliverunto} alt="placeholder"/>
				</div>
				<div className="wrapRImg">
					<img src={Images.tomaCover} alt="placeholder"/>
				</div>
				<div className="wrapRImg">
					<img src={Images.gameJqueryCover} alt="placeholder"/>
				</div>
				<div className="wrapRImg">
					<img src={Images.porscheCover} alt="placeholder"/>
				</div>
				<div className="wrapRImg">
					<img src={Images.potad} alt="placeholder"/>
				</div>
				<div className="wrapRImg">
					<img src={Images.lclogo} alt="placeholder"/>
				</div>
				<div className="wrapRImg">
					<img src={Images.mediakit} alt="placeholder"/>
				</div>
				<div className="wrapRImg">
					<img src={Images.pamphF} alt="placeholder"/>
				</div>
				<div className="wrapRImg">
					<img src={Images.strawberry} alt="placeholder"/>
				</div>
			</section>

			<Portfolio />
		</animated.section>

	)
}