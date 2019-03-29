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
      <animated.div style={slide} className=""> <img src="https://s.abcnews.com/images/US/gale3-ht-ml-190326_hpMain_16x9_992.jpg" alt="dog"/><img src="https://s.abcnews.com/images/US/gale3-ht-ml-190326_hpMain_16x9_992.jpg" alt="dog"/>
      </animated.div>
    </section>
  )
}