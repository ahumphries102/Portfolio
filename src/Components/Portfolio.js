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
                <p>Porsche asked me to design ads they felt captured their brand, sleek, high-end, and professional. They provided the photos and I provided the designs.</p>
            </div>
            <img src={Images.img10} alt="placeholder"/>
            <figcaption>The photos are very elegant so the text needed to be readable, but not obscure the the photo.</figcaption>
            <img src={Images.img11} alt="placeholder"/>
            <figcaption>The LED billboard this ad ran on was so bright this black ad was created to alleviate eye strain on drivers.</figcaption>

            <img src={Images.img12} alt="placeholder"/>
            <figcaption>The white ad ran during the day. Porsche corporate said it was clean and simple which caught drivers eyes</figcaption>
        </div>

        <div className="portInfo">
            <div className="portText">
                <h2>PRC Cannabis</h2>
                <p>PRC came to me when they first began advertising and wanted something creative and would drive business. They told me I delivered on my promise.</p>
            </div>
            <img src={Images.prc} alt="placeholder"/>
            <figcaption>PRC Cannabis rebranded and tasked me with coming up with a goverment compliant ad that was easy for drivers to understand.</figcaption>
            <img src={Images.prcred} alt="placeholder"/>
            <figcaption>A dark red was chosen and placed over a wood texture to give it a barn feel because the store they were operating out of was located at a 'Red Barn' gas station.</figcaption>
        </div>

        <div className="portInfo">
            <div className="portText">
                <h2>Little caesars</h2>
                <p>This campaign was designed to show people that Little caesars was in their neighborhood and easily accessible.</p>
            </div>
            <img src={Images.lcsmall} alt="placeholder"/>
            <figcaption>$6 was the main focus because this branch was the only one in 20 miles offering this deal.</figcaption>

            <img src={Images.lcaddress} alt="placeholder"/>
            <figcaption>Adding an address is tricky to place on a highway billboard. In order to make it easier to digest, I simply used the image associated with locations which helped connect the dots in peoples mind.</figcaption>
            </div>

            <div className="portInfo">
                <div className="portText">
                    <h2>Outdoor Media Marketing Material</h2>
                    <p>There were no marketing materials for the sales team to give clients. So I took it upon my self to design all materials needed to help capture client interest.</p>
                </div>
                    <img src={Images.mediakit} alt="placeholder"/>
                    <figcaption>The attention of larger corportations was needed and in order to reach them a Mediakit was designed. It was sent to agencies that handled where to advertise their clients.</figcaption>
                    <img src={Images.mediakit2} alt="placeholder"/>
                    <figcaption>Red was the strongest color used at Outdoor Media so I made the decision to take advantage of that and go all in on it. The white soothes the red so it's not so obnoxious.</figcaption>
                    <img src={Images.mediakit3} alt="placeholder"/>
                    <figcaption>To really drive home where the billboards were located I took a screenshot of where they were on Google Maps and made a psuedo magnify glass to show clients what they looked like.</figcaption>
            </div>

            <div className="portInfo">
                <div className="portText">
                    <h2>Outdoor Media Web App</h2>
                    <p>My very first web app. I had no prior experience building apps, but never one to back down from a challenge I quickly learned how to develop and bring this companies app to life. The UI was built using HTML5, CSS3, and Jquery</p>
                </div>
                    <img src={Images.nw1} alt="placeholder"/>
                    <figcaption>The image is actually a video filmed with a drone to capture how large the billboard is.</figcaption>
                    <img src={Images.nw2} alt="placeholder"/>
                    <figcaption>Custom images were created for this project to highlight the companies Pacific Northwest roots.</figcaption>
                    <img src={Images.nw3} alt="placeholder"/>
                    <figcaption>Here is a form developed using PHP that sent an email to the sales lead.</figcaption>
            </div>

            <div className="portInfo">
                <div className="portText">
                    <h2>River Rock Smoke Shop</h2>
                    <p>I was asked to reinvent the coupon ads and I decided to design some fun illustrations that conveyed nature in a playful way and really capture viewers eyes.</p>
                </div>
                <img src={Images.seaAd} alt="placeholder"/>
                    <figcaption>Summer time was upon us and so I wanted a fun under the sea theme which triggers happy thoughts of the beach.</figcaption>
                    <img src={Images.campAd} alt="placeholder"/>
                    <figcaption>July was always camping month for me as a child. So I opted to bring my memories to life in this adl</figcaption>
                    <img src={Images.bearAd} alt="placeholder"/>
                    <figcaption>River Rock Smoke Shop has a connection to nature and I wanted to put that connection in the spotlight.</figcaption>
            </div>
    </section>
    )
}