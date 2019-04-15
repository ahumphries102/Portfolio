import React from 'react'
import Images from './Images'
export default function Portfolio() {
    return (

	<section className="portfolio">
    	<div className="portInfo">
    		<h1>Magic the Gathering Tutorial</h1>
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
    		<p>Magic the Gathering Tutorial</p>
    		<img src={Images.img2}/><p>Magic the Gathering Tutorial</p>
    		<img src={Images.img2}/>
    	</div>
    	<div className="portInfo">
    		<p>Magic the Gathering Tutorial</p>
    		<img src={Images.img2}/><p>Magic the Gathering Tutorial</p>
    		<img src={Images.img2}/>
    	</div>
    	<div className="portInfo">
    		<p>Magic the Gathering Tutorial</p>
    		<img src={Images.img2}/><p>Magic the Gathering Tutorial</p>
    		<img src={Images.img2}/>
    	</div>
    </section>
    )
}