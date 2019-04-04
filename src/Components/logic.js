import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import MainContainer from './MainContainer'

export default function siteLogic(){ 
  const [navPos, setNavPos] = useState('0%')
  const [toggleAbout, setToggleAbout] = useState(true)
  const [toggleWork, setToggleWork] = useState(true)
  const [button, setButton] = useState('>')
  const [navAbout, setNavAbout] = useState('about')
  const [navWork, setNavWork] = useState('work')
  const [height, setHeight] = useState('50%')

  const slide = useSpring({
      zIndex:'1', 
      from: { transform: 'translate(0%,0)' }, 
      transform:`translate: (${toggleWork ? '0%' : navPos },0)`, 
      config: { ease: 5000 } 
    })
    const heightInc = useSpring({
      background:'red',
      from: { height:'50%' }, 
      height: '100%'
    })
  function showAbout(){
    setNavAbout(navAbout === 'about' ? 'home' : 'about')
    setToggleAbout(!toggleAbout)
  }
  function show(view){
    if(view === 'about' ){
      setToggleWork(!toggleWork)
      setNavPos('25%')
      setNavWork(navWork === 'work' ? '': 'work')
      setNavAbout(navAbout === 'about' ? 'home': 'about')
      console.log('we are viewing', view)
    }
    else if(view === 'work'){
      setToggleWork(!toggleWork)
      setNavPos('-25%')
      setButton(button === '>' ? 'x': '>')
      setNavWork(navWork === 'work' ? 'home': 'work')
      setNavAbout(navAbout === 'about' ? '': 'about')
      console.log('we are viewing', view)
    }
    else{
      //in the nav bar set text to home or work
      setToggleWork(!toggleWork)
    }
  }
  return <MainContainer slide={slide}/>
}