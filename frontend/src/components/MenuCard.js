import React,{useContext, useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Cart from './footer';
import axios from 'axios';
import {itemContext} from '../App';

function MenuCard({data}) {
    //console.log("menucard rendered");
    // const iL = useContext(itemContext);
    // const sendId=(id)=>{
    //     iL.method({type:'set_id',payload:id});
    // }
        const [count,setcount] = useState(0);

    function increment(){
            <Cart></Cart>
            var quantity = sessionStorage.getItem(data.itemName);
            setcount(count+1);
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
        <Cart></Cart>
        setcount(count-1);
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
   
   

    // const colorCircle = data.vegan.toLowerCase() ==="veg" ? <i className="bi bi-circle-fill greenColor"></i> :
    // data.vegan.toLowerCase() ==="egg" ? <i className="bi bi-circle-fill yellowColor"></i> : <i className="bi bi-circle-fill redColor"></i>
    
    return (
        <>
       {/* <div className="menuCard d-flex justify-content-between flex-wrap">
            <div className="menuCardImg position-relative">
               
               <img alt="" className="img-fluid img-rounded" src={data.image?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQVua1higrnAKxEJ8ufI9iIJ8Y3_-DGUBEoA&usqp=CAU"}/>
               {data.tag !=="" ? <span className="position-absolute top-0 end-0 bg-primary badge" style={{padding:"5px"}}>{data.tag}</span> : ''}
           </div>
           <div className="d-flex flex-column itemDescription">
               <div>
               <div className="h5">{data.itemName}</div>
               </div>
               <div className="py-2">&#8377;{`${data.price}.00`}</div>
               {/* <div>
                    {sessionStorage.getItem(data.itemName)!=0 && sessionStorage.getItem(data.itemName)!==null? (
                        <div>
                    <button type="button" className="btn btn-primary  p-2 w-50 addCart" onClick={increment}>+</button>
                    <button type="button" className="btn btn-primary  p-2 w-50 addCart" onClick={decrement}>-</button> </div>):(
                    <button type="button" className="btn btn-outline-warning mt-auto p-2 w-50 addCart" onClick={increment}>Add to cart</button>)}
               </div> */}
              
    {/* </div> */}
    
           {/* <div className="menuCardImg position-relative">
               
               <img alt="" className="img-fluid img-rounded" src={data.image?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQVua1higrnAKxEJ8ufI9iIJ8Y3_-DGUBEoA&usqp=CAU"}/>
               {data.tag !=="" ? <span className="position-absolute top-0 end-0 bg-primary badge" style={{padding:"5px"}}>{data.tag}</span> : ''}
           </div> */}
           {/* <div>
                    {sessionStorage.getItem(data.itemName)!=0 && sessionStorage.getItem(data.itemName)!==null? (
                        <div>
                    <button type="button" className="btn btn-primary  p-2 w-50 addCart" onClick={increment}>+</button>
                    <button type="button" className="btn btn-primary  p-2 w-50 addCart" onClick={decrement}>-</button> </div>):(
                    <button type="button" className="btn btn-outline-warning mt-auto p-2 w-50 addCart" onClick={increment}>Add to cart</button>)}
               </div>
       </div> */}
       <div className='container-fluid'>
       <div className='item'>
        {/* <Card  style={{ width: '8rem',height:"8rem",borderRadius:"20px",overflow: "hidden",marginLeft:10}} className = "cardlayout">
            <Card.Img src={data.image} className="menuCardImg"/>
        </Card>
        </div>
        <div>
       <Card style={{ width: '10rem',marginLeft:12,paddingLeft:18}} className = "cardlayout" border="light"> 
      <Card.Body>
        <Card.Title>{data.itemName}</Card.Title>
        <Card.Text>$
          {data.price}
        </Card.Text>
        {sessionStorage.getItem(data.itemName)!=0 && sessionStorage.getItem(data.itemName)!==null? (
            <div className='buttonclass'>
                    <Button className='button' onClick={increment} variant="light" >+</Button>  
                    <span className='button'>{sessionStorage.getItem(data.itemName)}</span> 
                    <Button className="button" onClick={decrement} variant="light">-</Button>
                    </div>):(  
        <Button onClick={increment} variant="info">Add to Cart</Button>)}
      </Card.Body>
    </Card> */}
    <div className='row'>
    <div className='col-5 '>
        <img src={data.image} className="item-img"></img>
    </div>
    <div className='offset-1 col-6'>
        <div className='item-data'>
        <h6 className='item-text'>{data.itemName}</h6>
        <h6 className='item-text'>${data.price}</h6>
        {sessionStorage.getItem(data.itemName)!=0 && sessionStorage.getItem(data.itemName)!==null? (
            <div className='buttonclass row'>
                    <div className=' col-4 button' onClick={increment} variant="light" >+</div>  
                    <span className=' col-4 button'>{sessionStorage.getItem(data.itemName)}</span> 
                    <div className=" col-4 button" onClick={decrement} variant="light">-</div>
                    </div>):(  
        <Button onClick={increment} variant="info"><h4>Add to Cart</h4></Button>)}
    </div>
    </div>
    </div>

    </div>
    <hr></hr></div>

    {/* <div className='container'>
        <div className='row'>
        <div className='col-sm-5 item-div'>
            <img src={data.image} class="item-img"></img>
        </div>
        <div className='col-sm-3'>
            {data.itemName}
        </div>
        </div>
        
    </div> */}
    
    
    </>
    )
}


export default MenuCard;
