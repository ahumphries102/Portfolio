import React from 'react'
import Images from './Images'
export default function Portfolio() {
    return (

	<section className="portfolio">
    	<div className="portInfo">
            <div className="portText">
    		  <h2>Magic the Gathering Tutorial</h2>
    		  <p>High lights of this application include fetching an API to display all of the images and
    		  using Python's back end tool Flask and a PIP package Flask Mail to send 
    		  emails using the form. Material UI was used to create the slideout sidebar</p>
    		  
              <a href="https://github.com/ahumphries102/Capstone">Github</a>
            </div>
    		<img src={Images.img2} alt="placeholder"/>
            <figcaption>Overall view of my capstone which uses Material.ui</figcaption>
            <img src={Images.img3} alt="placeholder"/>
    		<figcaption>Backend code using Flask fetching an API using Async/Await</figcaption>
    		<img src={Images.img4} alt="placeholder"/>
            <figcaption>A database I created to hold all the relevant information</figcaption>
    	</div>
    	
    	<div className="portInfo">
            <div className="portText">
        		<h2>Magic the Gathering Deck Builder</h2>
                <p>Users can select cards to build their deck. The bar on the right reflects the users choice. They may delete unwanted cards and once they're satisfied with their deck they can click save to save their deck to an SQL database.</p>
                <a href="https://github.com/ahumphries102/database_project">Github</a>
            </div>
            <img src={Images.img5} alt="placeholder"/>
            <figcaption>Node.js is used along with an SQL script to save all the users chosen cards to a database</figcaption>
            <img src={Images.img6} alt="placeholder"/>
            <figcaption>All choices a user makes will be displayed on the right handside</figcaption>
        </div>
        
    	<div className="portInfo">
        <div className="portText">
    		<h2>Tamagotchi Game</h2>
            <p>A simple game developed using HTML, CSS and Jquery.</p>
            <a href="https://github.com/ahumphries102/Tomagatchi">Github</a>
        </div>
    		<img src={Images.img7} alt="placeholder"/>
            <figcaption>Tomagatchi is a game where you simply assign it a name and monitor it's stats</figcaption>
    	</div>

    	<div className="portInfo">
            <div className="portText">
        		<h2>Typography Game of Doom</h2>
                <p>A typography quiz game developed using HTML, CSS and Jquery.</p>
                <a href="https://github.com/ahumphries102/Game-Project">Github</a>
            </div>
            <img src={Images.img8} alt="placeholder"/>
            <figcaption>Users select an answer and earn points for</figcaption>
    		<img src={Images.img9} alt="placeholder"/>

           <figcaption>each correct answer. Each replay randomizes the order of the questions.</figcaption>

    	</div>
        
        <div className="portInfo">
            <div className="portText">
                <h2>Porsche</h2>
                <p>I designed these ads for Porsche of Bellingham as part of their ad campaign that ran for over 2 years.</p>
            </div>
            <img src={Images.img10} alt="placeholder"/>
            <figcaption>Photos were supplied by Porsche, I then designed the final look and layout of the ad.</figcaption>
            <img src={Images.img11} alt="placeholder"/>
            <figcaption>The LED billboard this ad ran on was so bright this black ad was created to alleviate eye strain on drivers.</figcaption>

            <img src={Images.img12} alt="placeholder"/>
            <figcaption>The white ad ran during the day. Porsche corporate said it was clean and simple which caught drivers eyes</figcaption>
        </div>

        <div className="portInfo">
            <div className="portText">
                <h2>PRC Cannabis</h2>
                <p>I designed these ads for Porsche of Bellingham as part of their ad campaign that ran for over 2 years.</p>
            </div>
            <img src={Images.prc} alt="placeholder"/>
            <figcaption>PRC Cannabis rebranded and tasked me with coming up with a goverment compliant ad that was easy for drivers to understand.</figcaption>
            <img src={Images.prcred} alt="placeholder"/>
            <figcaption>I chose a dark red and placed the color over a wood texture to give it a barn feel because the store they were advertising was located in a red barn.</figcaption>
        </div>

        <div className="portInfo">
            <div className="portText">
                <h2>Little Caesers</h2>
                <p>This campaign was designed to show people that Little Caesers was in their neighborhood and easily accessible.</p>
            </div>
            <img src={Images.lcsmall} alt="placeholder"/>
            <figcaption>$6 was the main focus because this branch was the only one in 20 miles offering this deal.</figcaption>

            <img src={Images.lcaddress} alt="placeholder"/>
            <figcaption>Adding an address is tricky on a highway billboard so in order to make it more obvious I simply used the image associated with location.</figcaption>
            </div>

            <div className="portInfo">
                <div className="portText">
                    <h2>Stillaguamish Outdoor Media Marketing Material</h2>
                    <p>Under Construction</p>
                </div>
            </div>

            <div className="portInfo">
                <div className="portText">
                    <h2>Stillaguamish Outdoor Media Kit</h2>
                    <p>Under Construction</p>
                </div>
            </div>

            <div className="portInfo">
                <div className="portText">
                    <h2>River Rock Smoke Shop</h2>
                    <p>Under Construction</p>
                </div>
            </div>
    </section>
    )
}