import React,{useContext,useEffect} from 'react'
import CategoryBar from './CategoryBar'
import RestaurantMenu from './RestaurantMenu'
import {itemContext} from '../App';
var store =require('store');

function Menu() {
    // const iL = useContext(itemContext);
    // console.log("menu rendered");
    // navbar scrollup and down logic
    //let prev= window.scrollY;
   
    useEffect(()=>{ 
        let prev= window.scrollY;  
        const scrolling = ()=>{
            let current = window.scrollY;
            const catBar = document.getElementById("categoryBar");
            const itm = document.getElementById("menuItem");

            //const loggedbar = document.getElementsByClassName("loggedBar");
            console.log(prev, current,"p","c")
            if (prev > current && current <10) {
                if(catBar){
                    catBar.style.top = "85px";
                    

                }
              } 
            else{
                if(catBar){
                   document.getElementById('categoryBar').style.top = "0" ;
                   
                }
            }
              prev = current;
        }   
         document.addEventListener('scroll', scrolling)
         return ()=> document.removeEventListener('scroll', scrolling);
         
        },[])
    return (
        <div>

            <RestaurantMenu/>
        </div>
    );
}

export default React.memo(Menu);
