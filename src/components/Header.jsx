import React, { useEffect, useState } from 'react'

const Header = ({setShop, news }) => {

    const [buttons, setButtons] = useState([])

    useEffect(() => {

        fetch("https://fakestoreapi.com/products/categories")
        .then((res)=>res.json())
        .then((data)=>setButtons(data))
        
      },[])
          
    const btnFilter = (list) => { setShop(news.filter((item,i)=>(item.category===list)))}
  
  return (

    <div>
        <h1>Products List</h1>
        <div className="btns">
            <button className='focus' onClick={()=>setShop(news)}>All</button>
            {buttons.map((item,i)=>(
                 <button key={i} className='focus' onClick={()=>btnFilter(item)}>{item}</button>
            ))}
        </div>
        
    </div>
  )
}

export default Header