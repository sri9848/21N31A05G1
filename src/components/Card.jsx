import React, { useState } from 'react'


const Card = ({image,description}) => {

    const [show, setShow] = useState(true)
    const cardShow = () => setShow(!show)
  return (
    <div>
        <div  className='img-card'>
        {show ?  <img src={image} alt="" /> 
        : <div className='text'><p>{description}polo</p>
        <img src={image} alt=""  /> </div>}
        <button className='info'onClick={cardShow}>rating 4.2</button>     
        </div>
        
    </div>
  )
}

export default Card;