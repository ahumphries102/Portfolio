import React from 'react'

export default function ScrollLogic(){
  let scrollList = []

  for(let i = 0; i <= 4; i++){
    scrollList.push(null)
  }

  let newList = scrollList.map((element, key)=>{
    return <li key={key}></li>
  })
  return newList
}