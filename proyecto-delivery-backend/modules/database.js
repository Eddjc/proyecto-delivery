var mongoose = require('mongoose');

let bd = 'delivery';
let servidor = 'localhost:27017';

class Database{
    constructor(){
        mongoose.connect(`mongodb://${servidor}/${bd}`)
        .then(()=>{
            console.log('se conecto a mongodb');
        })
        .catch((error)=>{
            console.log(error);
        });
    }
}