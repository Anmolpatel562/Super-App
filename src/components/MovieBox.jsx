import React from 'react'
import "./MovieBox.css"
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
function MovieBox({data,selected,setSelected}){

  const isSelected = selected.includes(data.id);

  function clickHandler(){
    if(selected.includes(data.id)){
       setSelected((prev)=>prev.filter((item)=>item !== data.id))
    }else{
      setSelected((prev)=>{
        return [...prev,data.id]
      })
    }
  }

  return (
    <>
       <div className='box' style={{background:data.color, border:isSelected?"5px solid green":""}} onClick={clickHandler}>
         <p className='title'>{data.id}</p>
         {data.image}
       </div>   
    </>
  )
}

export default MovieBox;