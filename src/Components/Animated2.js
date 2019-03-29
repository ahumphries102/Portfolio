import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

export default function Animated(props){
  const slide = useSpring({
    position:'relative',
    zIndex:'1', 
    from: { right: '0%' }, 
    right: props.toggle ? '0%' : '50%', 
    config: { duration: 1000 } 
  })
  return (
    <section >
      <animated.div style={slide} className=""> <img src="https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg" alt="dog"/><img src="https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg" alt="dog"/>
      </animated.div>
    </section>
  )
}