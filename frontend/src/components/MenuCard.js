import React,{useContext} from 'react'
import {itemContext} from '../App';

function MenuCard({data}) {
    //console.log("menucard rendered");
    const iL = useContext(itemContext);


    
    const sendId=(id)=>{
        iL.method({type:'set_id',payload:id});
    }


    function increment(){
            var quantity = sessionStorage.getItem(data.itemName);
            if(quantity){
                sessionStorage.removeItem(data.itemName);
                quantity++;
                sessionStorage.setItem(data.itemName,quantity);
                var totalprice = parseInt(sessionStorage.getItem("totalprice"));
                totalprice+=data.price;
                sessionStorage.removeItem("totalprice");
                sessionStorage.setItem("totalprice",totalprice);
            }
            else
            {
                sessionStorage.setItem(data.itemName,1);
                totalprice = parseInt(sessionStorage.getItem("totalprice"));
                if(totalprice)
                {
                    totalprice+=data.price;
                    sessionStorage.removeItem("totalprice");
                    sessionStorage.setItem("totalprice",totalprice);
                }
                else{
                    totalprice=0;
                    totalprice+=data.price;
                    sessionStorage.removeItem("totalprice");
                    sessionStorage.setItem("totalprice",totalprice);
                }
            }
    }

    const decrement = ()=>{
        var quantity = sessionStorage.getItem(data.itemName);
        if(quantity)
        {
            sessionStorage.removeItem(data.itemName);
            quantity--;
            if(quantity==0)
            {
                sessionStorage.removeItem(data.itemName);
                var totalprice = parseInt(sessionStorage.getItem("totalprice"));
                totalprice-=data.price;
                sessionStorage.removeItem("totalprice");
                sessionStorage.setItem("totalprice",totalprice);
            }
            else
            {
                sessionStorage.setItem(data.itemName,quantity);
                var totalprice = parseInt(sessionStorage.getItem("totalprice"));
                totalprice-=data.price;
                sessionStorage.removeItem("totalprice");
                sessionStorage.setItem("totalprice",totalprice);
            }
            
        }
        else 
        {
            sessionStorage.removeItem(data.itemName);
        }
    };
   
   

    const colorCircle = data.vegan.toLowerCase() ==="veg" ? <i className="bi bi-circle-fill greenColor"></i> :
    data.vegan.toLowerCase() ==="egg" ? <i className="bi bi-circle-fill yellowColor"></i> : <i className="bi bi-circle-fill redColor"></i>
    
    return (
        <>
       <div key ={data.id} className="menuCard d-flex justify-content-between flex-wrap" onClick={()=>sendId(data.id)}>
           <div className="d-flex flex-column itemDescription">
               <div>
               <div className="h5">{data.itemName}</div>
               <div>{colorCircle}{' '}{data.vegan}</div>
               <div>{data.description?? ''}</div>
               </div>
               <div className="py-2">&#8377;{`${data.price}.00`}</div>
               <div>
                    {sessionStorage.getItem(data.itemName)!=0 && sessionStorage.getItem(data.itemName)!==null? (
                        <div>
                    <button type="button" className="btn btn-primary  p-2 w-50 addCart" onClick={increment}>+</button>
                    <button type="button" className="btn btn-primary  p-2 w-50 addCart" onClick={decrement}>-</button> </div>):(
                    <button type="button" className="btn btn-outline-warning mt-auto p-2 w-50 addCart" onClick={increment}>Add to cart</button>)}
               </div>
              
    </div>
           <div className="menuCardImg position-relative">
               
               <img alt="" className="img-fluid img-rounded" src={data.img?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQVua1higrnAKxEJ8ufI9iIJ8Y3_-DGUBEoA&usqp=CAU"}/>
               {data.tag !=="" ? <span className="position-absolute top-0 end-0 bg-primary badge" style={{padding:"5px"}}>{data.tag}</span> : ''}
           </div>
       </div>
       
      </>
    )
}


export default MenuCard;
