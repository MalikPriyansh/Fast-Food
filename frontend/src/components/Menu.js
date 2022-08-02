import React,{useContext,useEffect} from 'react'
import CategoryBar from './CategoryBar'
import RestaurantMenu from './RestaurantMenu'
import {itemContext} from '../App';
import Cart from './footer';
// import MenuCard from './MenuCard';
import ControlledCarousel from '../imageslider';
var store =require('store');


function Menu(props) {
    // const iL = useContext(itemContext);
    // console.log("menu rendered");
    // navbar scrollup and down logic
    //let prev= window.scrollY;
    const iL = useContext(itemContext);
    const orderedItems =store.get('orderedItems');
    const list=iL.props?? orderedItems ;

   
    useEffect(()=>{ 
        let prev= window.scrollY;  
        const scrolling = ()=>{
            let current = window.scrollY;
            const catBar = document.getElementById("categoryBar");

            //const loggedbar = document.getElementsByClassName("loggedBar");
            console.log(prev, current,"p","c")
            if (prev > current && current <10) {
                if(catBar){
                    catBar.style.top = "181px";
                }
              } 
            else{
                if(catBar){
                    document.getElementById('categoryBar').style.top = "181px" ;
                }
            }
              prev = current;
        }   
         document.addEventListener('scroll', scrolling)
         return ()=> document.removeEventListener('scroll', scrolling);
         
        },[])
    return (
        <div>
            <ControlledCarousel></ControlledCarousel>
            <CategoryBar></CategoryBar>
            <RestaurantMenu/>
            <Cart></Cart>
        </div>
        
    );
}

export default Menu;
