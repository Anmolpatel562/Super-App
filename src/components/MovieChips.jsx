import React from 'react';
import './MovieChips.css';
export default function MovieChips({data,selected,setSelected}) {
  function ClickHandler(){
    setSelected((prev)=>prev.filter((item)=>item !== data))
  }  
  return (
    <>
       <div className='chip' >{data}&nbsp; &nbsp; &nbsp;<span className='x' onClick={ClickHandler}>X</span></div>
    </>
  )
}
