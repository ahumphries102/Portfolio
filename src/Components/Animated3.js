import React, { useState } from 'react'
import MainContainer from './MainContainer'

export default function CssManip(){
	const [shiftCon, setShiftCon] = useState(true)

	function addClass(){
			if(shiftCon === true){
			document.getElementById('mainCon').className += ' moveL'
			document.getElementById('mainCon').classList.remove('moveR')
			setShiftCon(false)
		}
		else{
			document.getElementById('mainCon').classList.remove('moveL')
			document.getElementById('mainCon').className += ' moveR'
			setShiftCon(true)
		}
	}
	return(
		<MainContainer addClass={addClass}/>
	)
}