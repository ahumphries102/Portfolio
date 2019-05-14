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

        </div>
        
    	<div className="portInfo">
        <div className="portText">
    		<h2>Tamagotchi Game</h2>
            <p>A simple game developed using HTML, CSS and Jquery.</p>
            <a href="https://github.com/ahumphries102/Tomagatchi">Github</a>
        </div>
    		<img src={Images.img7} alt="placeholder"/>
    		    	</div>
    	<div className="portInfo">
        <div className="portText">
    		<h2>Typography Game of Doom</h2>
            <p>A typography quiz game developed using HTML, CSS and Jquery.</p>
            <a href="https://github.com/ahumphries102/Game-Project">Github</a>
        </div>
    		<img src={Images.img9} alt="placeholder"/>
           <figcaption>Users select an answer and earn points for</figcaption>
           <figcaption>each correct answer. Each replay randomizes the order of the questions.</figcaption>
    		

            
    	</div>
    </section>
    )
}