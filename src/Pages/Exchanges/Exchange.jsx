import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { invokeAPI } from '../../utility/invokeAPI/invokeAPI'

const Exchange = (setloading,loading) => {


    const [exchanges, setExchanges] = useState();

    useEffect(() => {
        
    const res = async ()=>{
        const data = await invokeAPI('exchanges','get','',{accept: 'application/json'},{per_page:250})
        console.log(data);
        setExchanges(data);
        setloading(false)

    }
    res()
      
    }, []);



  return (
    <div class="row m-5">
     {exchanges?.map((item)=>{
        
        return  <Link to={`${item.id}`} class="col-1">
        <div class="card">
          <div class="card-body">
          <img src={item.image} alt={item.name}></img>
            <h3 class="card-title">{item.name}</h3>
           
          </div>
        </div>
      </Link>
     })}
     
    </div>
  )
}

export default Exchange