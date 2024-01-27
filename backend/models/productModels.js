const mongoose=require("mongoose")

const ProductSchema=mongoose.Schema({
    name:{type:String},
    price:{type:Number},
    img:{type:String}
},
{timestamps:true}
)
 const Products=mongoose.model("product",ProductSchema)
 module.exports=Products