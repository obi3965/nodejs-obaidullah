const fs = require('fs');
const path = require('path');


const p = path.join(path.dirname(process.mainModule.filename),
    'data',
    'products.json'
    );
  //i want to create a helper function
const getProductsFromFile = (cb)=>{
    
    fs.readFile(p, (err, fileContent)=>{
        if(err){
            cb([]);
        }else{
           cb(JSON.parse(fileContent)); 
        }
        
    })
    
}

module.exports = class product{
    constructor(title, imagUrl, description, price){
        this.title = title;
        this.imagUrl = imagUrl;
        this.description = description;
        this.price = price;
    }

  
   
    save(){
       getProductsFromFile(products =>{
           products.push(this)
        fs.writeFile(p, JSON.stringify(products), err =>{
            console.log(err)
        })
       });   
    }
    static fetchAll(cb){
        getProductsFromFile(cb);
    }
}