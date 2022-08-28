import React, { useEffect, useState } from 'react'
import RestaurantMenu from './RestaurantMenu';

function CategoryBar() {
      const [category , setCategory] = useState([]);
     const getUsers = async()=>{
      const response = await fetch('http://localhost:4000/category');
      setCategory(await response.json());
      console.log(category);
     }   
  useEffect(()=>{
    getUsers();
  },[])
  // console.log("CategoryBar rendered");
    return (
        <div className="catContainer" id="categoryBar" >

        <div className="scrollmenu">
          {
              category.map((cat)=>{
                console.log("Entered");
                return (<a className="nav-link" href="#">{cat.c_name}</a>)
              })
          
          }
          {/* <a className="nav-link" href="#Time for Lunch">Time for Lunch</a>
          <a className="nav-link" href="#Can I Have Snacks">Can I Have Snacks</a>
        
          <a className="nav-link" href="#Dinner">Dinner</a>
          <a className="nav-link" href="#Burgers and Beverages">Burgers and Beverages</a> */}
          
          
        
      
  
</div> 
       {/* <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#Break Your Fast">Break Your Fast</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Time for Lunch">Time for Lunch</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Can I Have Snacks">Can I Have Snacks</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Dinner">Dinner</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Burgers and Beverages">Burgers and Beverages</a>
        </li>
        <li className="nav-item dropdown">
          <div className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" role="button">
            More..
          </div>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#Pizzanians">Pizzanians</a></li>
            <li><a className="dropdown-item" href="#Desserts">Desserts</a></li>
            <li><a className="dropdown-item" href="#Chick and Chicken">Chick and Chicken</a></li>
            <li><a className="dropdown-item" href="#Bread and Salad">Bread and Salad</a></li> 
          </ul>
        </li>
      </ul>
    </div>
  </div>
    </nav>*/}
<div className='empty-div'></div> 
</div>
    )
}

export default CategoryBar;
