const mysql = require("mysql");
const express = require("express");
const { json } = require("express");
const cors = require('cors');
const bodyparser = require('body-parser');

const conn = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "fastfood"
});

conn.connect(function(err){
    if(err)
        console.log(err);
    else
        console.log("Connected");
});

const app = express();

app.use(cors());
// parse application/json
app.use(bodyparser.json()); data=[];

app.get('/', (req,res)=>{
    let sql = "SELECT categories.c_name , items.item_name , item_info.price , item_info.image FROM categories JOIN items ON categories.c_id = items.c_id JOIN item_info ON items.item_id = item_info.item_id";
    conn.query(sql,(err,result)=>{
            if(err) throw err;
            
            const data= result;
            var newData = [];
            var previous = data[0].c_name;
            var i = 0;
            var temp = [];
            
            while(i<data.length)
            {
                var current_c=data[i].c_name;
                
                if(previous==current_c)
                {
                    
                    var obj = {
                        itemName : data[i].item_name,
                        price : data[i].price,
                        image : data[i].image
                    }
                    temp.push(obj);
                    console.log(current_c);
                    i++;
                    // while(previous==data[i].c_name)
                    // {
                    //     var obj = {
                    //         itemName : data[i].item_name,
                    //         price : data[i].price,
                    //         image : data[i].image
                    //     }
                    //     temp.push(obj);
                    //     i++;
                    // }
                } 
                else{
                    
                    var obj2 = {
                        categories:data[i-1].c_name,
                        items : temp
                    }
                    newData.push(obj2);
                    previous=current_c;
                    var temp = [];
                    continue;
                }
                    
                    
            }
            var obj2 = {
                categories:data[i-1].c_name,
                items : temp
            }
            newData.push(obj2);
            
            console.log(newData);
            res.send(JSON.stringify(newData));
    })
})

app.get('/createdb',(req,res)=>{
    let sql = 'CREATE DATABASE fastfood';
    conn.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("Database created...");
    })
})

app.get('/items',(req,res)=>{
        const sql = "SELECT categories.c_name , items.item_name, items.item_id FROM categories JOIN items ON categories.c_id = items.c_id";
        conn.query(sql , (err, result)=>{
            if(err) throw err;
            console.log(JSON.stringify(result));
            res.send(JSON.stringify(result));
        })
   });
app.get('/category',(req,res)=>{
    const sql = "SELECT * FROM categories";
    conn.query(sql, (err,result)=>{
        if(err) throw err;
        res.send(result);
})});

app.listen("4000",()=>{
    console.log("Server has been started");
});
