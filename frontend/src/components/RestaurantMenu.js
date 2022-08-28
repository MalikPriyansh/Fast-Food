import React, {useEffect,useState} from 'react'
import axios from 'axios';
import MenuCard from './MenuCard';
import Cart from './footer';
//import {itemContext} from '../App';
var store =require('store');

function RestaurantMenu() {
  
  

  const [items,setitems]=useState([]);
  const getUsers = async()=>{
      
        const response = await fetch('http://localhost:4000');
        setitems(await response.json());
        console.log(items);
      
    
  }
    useEffect(()=>{
      getUsers();
    },[])
  


    return (
        <div className="container-fluid menuLayout" id="menuItem">
        {items.map((item) =>
        (<div  className="container d-flex flex-column">
        <div className="h3 tt" id={item.categories}>{item.categories}</div>     
        <div className="menuCardWrapper d-flex flex-wrap" >
          
        {item.items.map(i=>
          <MenuCard data={i}/>  
          )}    
        </div>
        </div> )
        )}
        <Cart></Cart>
</div>
    )
        }
export default RestaurantMenu;
