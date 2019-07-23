import React from 'react'

export default function About(){
	return(
		<section className="about">
			<div className="aboutText">
				<h2>I'm a Graphic Designer and Software Engineer. I'm passionate about both fields because I view them as similar mediums to bring ideas into reality.</h2>
				<p>I've had an exciting time learning everything I can about software development and design beginning when I was in college. From there I joined a company and built their entire web application. Since that first app I decided to get certified as a Software Engineer in order to round out my skills as a developer and designer so I can be the best I can.</p>
				<p>Learn More About me</p> <a href = "mailto: ahumphries102@gmail.com?subject=Portfolio"><span id="email">Ahumphries102@gmail.com</span></a>
			</div>
			<section className="socialMedia">
			<a href="https://www.linkedin.com/in/ahumphriesprofile/"><img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/56-linkedin-512.png" alt="linkedin icon"/></a>
			<a href="https://github.com/ahumphries102?tab=repositories"><img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/71-github-512.png" alt="github icon"/></a>

			</section>
		</section>
	)
}