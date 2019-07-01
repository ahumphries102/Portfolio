//MainContainer essentially is our main display
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import RightWrapper from './RightWrapper'
import LeftWrapper from './LeftWrapper'

export default function MainContainer(){
	//ru stands for round up
	let ru = Math.ceil
	//Determine how much in percent we have to scroll to reach the next project
	let projectHeight = 10
	let scrollBarW = 1
	//Adjusts the X and Y translation sliding of the innerMainContainer
	const [containerXPos, setContainerXPos] = useState('0%')

	const [projectsXPos, setProjectsXPos] = useState('0')

	//Toggles what About says in the navigation
	const [toggleWork, setToggleWork] = useState(true)

	//Toggles what the button looks like on the right side of screen	
	const [button, setButton] = useState('>')

	//Changes About to say home
	const [navAbout, setNavAbout] = useState('About')

	const [navProjects, setNavProjects] = useState('Projects')

	//Changes work to say home
	const [navWork, setNavWork] = useState('Work')

	//Set the height of psuedo scroll bar in center of screen
	const [height, setHeight] = useState(0)

	const [width, setWidth] = useState(scrollBarW)

	const [homeState, setHomeState] = useState(true)
	const [containerYPos, setContainerYPos] = useState('0%')

	//Adjust the color of the background-image in the wrapR class on click
	const [grayScale, setGrayScale] = useState('grayscale(1)')
	//Set the color of wrapR class to be gray
	const wrapRFilter = {
  		'filter': grayScale ? 'grayScale(1)' : 'grayScale(0)'
  	}

	//Animation used to move the innerMainContainer element left or right
	const slideX = useSpring({
	    from: { transform: 'translate(0%,0)' },
	    //Use a ternary to set innerMainContainers translation to whatever the state
	    //of toggleWork is or the containerPos 
	    transform:`translate: (${toggleWork ? '0%' : containerXPos },0)`, 
	    config: { ease: 5000 } 
  	})

	const slideY = useSpring({
	    from: { transform: 'translate(0%,0%)' },
	    //Use a ternary to set innerMainContainers translation to whatever the state
	    //of toggleWork is or the containerPos 
	    transform:`translate(0%,${containerYPos})`, 
	    config: { ease: 5000 } 
  	})


  	//Show is called when the About link or the button element is clicked
	function show(view){
		if(view === 'about' ){
			setHomeState(false)
			setToggleWork(!toggleWork)
			setContainerXPos('50')
			setNavProjects(navWork === 'Work' ? '' : 'Projects')
			setNavWork(navWork === 'Work' ? '': 'Work')
			setNavAbout(navAbout === 'About' ? 'Home': 'About')
		}
		else{
			
	  		setGrayScale(!grayScale) 
			setHomeState(false)
			setToggleWork(!toggleWork)
			setContainerXPos('-50%')
			setButton(button === '>' ? 'x': '>')
			setNavWork(navWork === 'Work' ? 'Home': 'Work')
		}
	
		//We disable the html from scrolling when we are not on the home page
		!toggleWork ? document.querySelector('body').classList.remove('bodyNoScroll') : document.querySelector('body').classList.add('bodyNoScroll');


		//disable the ability to scroll if you're not on the Home section
		!toggleWork ? setHomeState(true) : setHomeState(false)
		!toggleWork ? setWidth(scrollBarW) : setWidth(0)

	
	}

	//this function handles the index page's logic
	function openCloseProjects(){
		projectsXPos === '0'? setProjectsXPos('100%') : setProjectsXPos('0')
	}
	//*************************************************************************
	//* A unverisal function that is called whenever the user scrolls
	//When it's called scrollTop finds the amount of pixels from the top of the page to wherever the client currently is scrolled to.
	//scrollBottom gets the total height of the app then it subtracts the inner height
	//scrollPercent then divides the top from the bottom and multiples it by 100 to give us
	//a value in percentages which is then used to set the height of the scrollFill to be equal
	//to the amount the user has scrolled from the top.
	window.addEventListener('scroll', function(){
		if(homeState){
			/***** *This logic defines the scrollFill element *****/
			const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)

			let scrollBottom = document.documentElement.scrollHeight - document.documentElement.clientHeight
			let scrollPercent = scrollTop / scrollBottom * 100
			setHeight(scrollPercent)

		  	/*** Getting wrapR to scroll, the values are in percentages ***/
		  	if(ru(scrollPercent) >= 0 && ru(scrollPercent <= 9.9)){
		  		setContainerYPos('0%')
		  	}
			else if(ru(scrollPercent) >= projectHeight && ru(scrollPercent) <= 19.9){
				setContainerYPos('-100%')
			}
			else if(ru(scrollPercent) >= projectHeight * 2 && ru(scrollPercent) <= 29.9){
				setContainerYPos('-200%')
			}
			else if(ru(scrollPercent) >= projectHeight * 3 && ru(scrollPercent) <= 39.9){
				setContainerYPos('-300%')
			}
			else if(ru(scrollPercent) >= projectHeight * 4 && ru(scrollPercent) <= 49.9){
				setContainerYPos('-400%')
			}
			else if(ru(scrollPercent) >= projectHeight * 5 && ru(scrollPercent) <= 59.9){
				setContainerYPos('-500%')
			}
			else if(ru(scrollPercent) >= projectHeight * 6 && ru(scrollPercent) <= 69.9){
				setContainerYPos('-600%')
			}
			else if(ru(scrollPercent) >= projectHeight * 7 && ru(scrollPercent) <= 79.9){
				setContainerYPos('-700%')
			}
			else if(ru(scrollPercent) >= projectHeight * 8 && ru(scrollPercent) <= 89.9){
				setContainerYPos('-800%')
			}
			else{
				setContainerYPos('-900%')
			}
			console.log(scrollPercent)
		}
	})

	// useEffect(()=> {
 //    fetch("http://localhost:8080/")
 //      .then(response => response.json())
 //      .then(data =>
 //        console.log("We served")
 //      )
 //      .catch(error=>console.log(error))
 //  })

 //The height of the main container is equal to the amount of objects within the
 //mainConHeightArray. This let's us dynamically increase the height over our app
 //based on the amount of projects we include.
 	let mainConHeightArr =  [{
 			href:"#pro1",
 			project:'Magic the Gathering'},

 		{
 			href:"#pro2",
 			project:'Magic the Gathering Tutorial',
 		},
 		{
 			href:"#pro3",
 			project:'Tamagotchi Game'
 		},
 		{
 			href:"#pro4",
 			project:"Typography Game"
 		},
 		{
 			href:"#pro5",
 			project:"Porsche"
 		},
 		{
 			href:"#pro6",
 			project:"PRC Cannabis"
 		},
 		{
 			href:"#pro7",
 			project:"Little Caesers"
 		},
 		{
 			href:"#pro8",
 			project:"Marketing Material"
 		},
 		{
 			href:"#pro9",
 			project:"Outdoor Media Web App"
 		},
 		{
 			href:"#pro10",
 			project:"River Rock Smoke Shop"
 		}
 	]

 	//Adds a number of list items to the Projects section based on the
 	//the number of elements in themainConHeightArr array
 	let newProjectArr = mainConHeightArr.map((element, index)=>{
 		const hrefId = `${element.href}`
		return <li key={index}><a href={hrefId} onClick={openCloseProjects} className="projectsButton">{element.project}</a></li>
 	})
 	//Adds a number of Articles to the html based on the number of elements
 	//in the mainConHeightArr array.
	let newMainConHeightArr = mainConHeightArr.map((element, index)=>{
		const articleName = `pro${index+1}`
		return <article key={index} id={articleName}/>
	})
	return(
		<section className="mainContainer">
			<animated.section style={slideX} className="innerMainContainer">
				
				<LeftWrapper projects={newProjectArr} navProjects = {navProjects}  button={button} show={show} height={height} width={width} projectsXPos={projectsXPos} navAbout={navAbout} openCloseProjects = {openCloseProjects}/>
				
				<RightWrapper wrapRFilter={wrapRFilter}slideY={slideY}/>
			</animated.section>
		{/* these divs set how tall our body is. Currently it is 400vh tall*/}
			{newMainConHeightArr}
		</section>
	)
}
