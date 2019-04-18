import React from 'react'
import Images from './Images'
export default function Portfolio() {
    return (

	<section className="portfolio">
    	<div className="portInfo">
    		<h2>Magic the Gathering Tutorial</h2>
    		<h3>A web application designed to teach users how to play</h3>
    		<p>High lights of this application include fetching an API to display all of the images and
    		using Python's back end tool Flask and a PIP package Flask Mail to send 
    		emails using the form. Material UI was used to create the slideout sidebar</p>
    		<hr/>
    		<img src={Images.img2}/>
    		<img src={Images.img3}/>
    		<figcaption>Backend code using Flask</figcaption>
    		<img src={Images.img4}/>
    		<figcaption>Fetching an API using Async/Await</figcaption>
    	</div>
    	
    	<div className="portInfo">
    		<h2>Magic the Gathering Deck Builder</h2>
            <p>Users can select cards to build their deck. The bar on the right reflects the users choice. They may delete unwanted cards and once they're satisfied with their deck they can click save to save their deck to an SQL database.</p>
    		<hr/>
            <img src={Images.img5}/>
    		<img src={Images.img6}/>
            <figcaption>Node.js is used along with an SQL script to save all the users chosen cards to a database</figcaption>
    	</div>
    	<div className="portInfo">
    		<h2>Tamagotchi Game</h2>
            <p>A simple game developed using HTML, CSS and Jquery.</p>
            <hr/>
    		<img src={Images.img7}/>
    		<img src={Images.img8}/>
    	</div>
    	<div className="portInfo">
    		<h2>Typography Game of Doom</h2>
            <p>A typography quiz game developed using HTML, CSS and Jquery.</p>
            <hr/>
    		<img src={Images.img9}/>
            <figcaption>Users select an answer and earn points for each correct answer. Each replay randomizes the order of the questions.</figcaption>
    		<img src={Images.img10}/>
            <img src={Images.img11}/>
    	</div>
    </section>
    )
}