import React from "react"

export default function About() {
  return (
    <section className="about">
      <div className="aboutText">
        <h2>
          I am Andrew Humphries, a Front-End / Full-Stack Software Engineer who
          leverages a foundation in Graphic Design to build high-quality,
          performant, and intuitive applications.
        </h2>
        <p>
          I view software engineering and design as similar mediums for bringing
          ideas into reality, and I am passionate about the intersection of
          elegant UI/UX and robust engineering.
        </p>
        <p>
          My career has been focused on modernizing and engineering
          mission-critical enterprise applications for major firms like Wolters
          Kluwer, Capco, and Citigroup. I have successfully led large-scale
          front-end migrations, moving legacy systems to modern Vue 3/TypeScript
          Single Page Application (SPA) architectures, significantly improving
          maintainability and performance.
        </p>
        <p>
          I specialize in technologies like Vue.js (Vue 3), React, and NextJS ,
          and enforce development best practices, including comprehensive unit
          testing, peer code reviews, and Git workflows to ensure reliable,
          high-quality feature delivery for systems handling real-time data for
          over 100,000 users.
        </p>
        <p>Learn More About me</p>{" "}
        <a href="mailto: ahumphries102@gmail.com?subject=Portfolio">
          <span id="email">Ahumphries102@gmail.com</span>
        </a>
      </div>
      <section className="socialMedia">
        <a href="https://www.linkedin.com/in/ahumphriesprofile/">
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/56-linkedin-512.png"
            alt="linkedin icon"
          />
        </a>
        <a href="https://github.com/ahumphries102?tab=repositories">
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/71-github-512.png"
            alt="github icon"
          />
        </a>
      </section>
    </section>
  )
}
