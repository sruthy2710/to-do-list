// const database = require('../model/dbs');
const mongoose  = require('mongoose');
mongoose.connect('mongodb://localhost:27017/listDB',{useNewUrlParser:true})
const listSchema = new mongoose.Schema ({
        title: String
    })
const List =  mongoose.model("List", listSchema);

const postReq = async (req,res)=>{
    const items = new List({
        title: req.body.title
    })
    try{
        await items.save();
        console.log('hi')
    }
    catch(err){
        res.send(err);
    }
}
const getReq = async function(req,res){
    
    await List.find(function(err,result){
        console.log(result);
        res.send(result)
    });
}
const patchReq = async (req,res)=> {
    try{
        const topic=await List.findById(req.params.id);
        topic.title = req.body.title
         console.log(await topic.save());
        res.redirect('/lists');
        
    }catch(err){
        res.send('Error')
    }
}
const deleteReq = async (req,res)=> {
    try{
        
        await List.deleteOne({_id:req.params.id})
        res.redirect('/lists');
        
    }catch(err){
        res.send('Error')
    }
}
module.exports = {postReq,getReq,patchReq,deleteReq};