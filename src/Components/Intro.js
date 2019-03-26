import React, { Component } from 'react'
import Form from './Form'
export default class FrontPage extends Component {
	state = {
		lands: ["https://deckmaster.info/images/cards/AVR/269639-hr.jpg", 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=410058&type=card', "http://i50.tinypic.com/2cwomq1.jpg",'https://deckmaster.info/images/cards/LRW/143630-hr.jpg','https://deckmaster.info/images/cards/AVR/269636-hr.jpg'],
		imageToView : 0 
	}
	clickHandler = (indexParam)=>{
		// eslint-disable-next-line
		if(indexParam === indexParam){
			this.setState({
				imageToView: indexParam
			})
		}
	}
    render(){
    	let manaSymbols = this.state.lands.map((card, index)=>{
    		return <button onClick={()=>{this.clickHandler(index)}} key={index}>Button</button>
    	})
        return (
            <section className="infoContainer">
				<div className="introText" id="navIntro">
					<div className="introChildren">
						<article>
						<div>
							<h2>INTRO</h2>
							<p>Magic: The Gathering, also Magic or MTG, is a strategy card game created by Richard Garfield in 1993, and published by Wizards of the Coast. Magic holds the title of "Most Played Trading Card Game," and is currently published in English, Simplified Chinese, Traditional Chinese, French, German, Italian, Korean, Japanese, Portuguese, Russian and Spanish. Digitally, the game can be played in Magic Online and MTG Arena.
							</p>
						</div>
						<div>
						<h2>How to Play!</h2>
							<p>
								Magic is a battle of wits between you and your opponent. The game is fairly to simple grasp, but as you continue to play you will begin to notice the the complexity and depth of the game. For now though let's take a look at the anatomy of a card and understand what the heck is going!
							</p>
						</div>
						<div className="imgText">
							<img src = {this.state.lands[this.state.imageToView]} alt="land"/>
						<div>
							<h2>Foundation of Magic: Lands</h2>
							<p>Here we have a land</p>
						</div>
							{/*<img src="https://i.pinimg.com/originals/ba/06/75/ba0675a338bfd02b61bfa8a329cd1960.png" alt="manasymbols" />*/}
						</div>
						<div>
							{manaSymbols}
						</div>
						</article>
						<Form email={this.props.email}/>
					</div>
				</div>
			</section>
        )
    }
}