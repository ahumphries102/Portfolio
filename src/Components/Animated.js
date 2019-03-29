import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

export default function Animated(){
  const [state, toggle] = useState(true)
  const opacity = useSpring({
    position:'relative',
    zIndex:'1', 
    from: { right: '0%' }, 
    right: state ? '0%' : '50%', 
    config: { duration: 1000 } 
  })


  function handleClick(){
    return toggle(!state) 
  }  
  return (
    <section >
    <div onClick={handleClick} className="toggleSlide">Slide Time</div>
      <animated.div style={opacity} className=""> <img src="https://s.abcnews.com/images/US/gale3-ht-ml-190326_hpMain_16x9_992.jpg" alt="dog"/><img src="https://s.abcnews.com/images/US/gale3-ht-ml-190326_hpMain_16x9_992.jpg" alt="dog"/>
</animated.div>
    </section>
  )
}