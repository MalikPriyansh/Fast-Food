import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import {BrowserRouter , Link} from "react-router-dom";

function Cart(){
    const [count,setCount] = useState(0);
    var tprice = sessionStorage.getItem("totalprice");
    var oldprice=0;
    // if(tprice!=oldprice)
    // {
    //     setCount(1);
    //     oldprice = tprice;
    // }
    return (<footer>
            {tprice!=0 && tprice!=null? (<div>
                    <Link to="/bill"> 
                        <Button>Confirm Order</Button>
                    </Link>
                <h4 style={{color : "black"}}>{tprice}</h4>
            </div>) :( <></>)}
    </footer>);
}

export default Cart;