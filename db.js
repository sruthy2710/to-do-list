const mongoose  = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB',{useNewUrlParser:true})
const fruitSchema = new mongoose.Schema ({
    name:String,
    color: String,
    comment: String
})
const Fruit =  mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit({
    name:"Papaya",
    color: "Tangy",
    comment:"not nice"
})
Fruit.insertMany([
            {
                name: "oranges",
                color: "orange",
                comment: "orangy"
            },
            {
                name: "apple",
                color: "red",
                comment: "sweet"
    
            }
        ]);
        fruit.save();

// const insertDocuments = function(db,callback){
//     const collection = db.collection('fruits');
//     collection.insertMay([
//         {
//             name: "oranges",
//             color: "orange",
//             comment: "orangy"
//         },
//         {
//             name: "apple",
//             color: "red",
//             comment: "sweet"

//         }
//     ])
// }

const findDocuments  = function(db,callback){
    const collection = db.collection('fruits');
    collection.find({}).toArray(function(err,fruits){
        assert.equal(err,null);
        console.log(fruits);
        callback(fruits);
    })
};