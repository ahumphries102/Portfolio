import React from 'react'
import { animated } from 'react-spring'
import Portfolio from './Portfolio'
import Images from './Images'
export default function RightWrapper(props){

	return(
		<animated.section style={props.slideY} className="rightContainer">

			<section style={props.wrapRFilter} className="wrapR">
				<div className="wrapRImg">
					<img src={Images.quizImg} alt="quiz"/>
				</div>
				<div className="wrapRImg">
					<img src={Images.exerciseCover} alt="Exercise"/>
				</div>
				<div className="wrapRImg">
					<img src={Images.deliverunto} alt="Magic"/>
				</div>
				<div className="wrapRImg">
					<img src={Images.tomaCover} alt="Tomagotchi"/>
				</div>
				<div className="wrapRImg">
					<img src={Images.gameJqueryCover} alt="TypographyGame"/>
				</div>
				<div className="wrapRImg">
					<img src={Images.porscheCover} alt="Porsche"/>
				</div>
				{/* <div className="wrapRImg">
					<img src={Images.potad} alt="Cannabis"/>
				</div> */}
				<div className="wrapRImg">
					<img src={Images.lclogo} alt="LCLogo"/>
				</div>
				<div className="wrapRImg">
					<img src={Images.mediakit} alt="MediaKit"/>
				</div>
				<div className="wrapRImg">
					<img src={Images.pamphF} alt="Pamphlet"/>
				</div>
				<div className="wrapRImg">
					<img src={Images.strawberry} alt="strawberry"/>
				</div>
			</section>

			<Portfolio />
		</animated.section>

	)
}