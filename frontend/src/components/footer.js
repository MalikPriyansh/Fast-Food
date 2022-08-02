import React from "react";
import Button from "react-bootstrap/Button";
import {BrowserRouter , Link} from "react-router-dom";

function Cart(){

    const tprice = sessionStorage.getItem("totalprice");

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