import React from "react";

function Bill(){
   var value;
   value = sessionStorage;
   console.log(value);
   const forStorageSomewhere = JSON.stringify(sessionStorage);
   console.log(forStorageSomewhere);
   return (<div>
     {Object.entries(value).map((item)=>(
      <h1>{item}</h1>
     ))}
   </div>)
}

export default Bill;