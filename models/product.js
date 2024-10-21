const mongoose = require('mongoose');
const { Schema } = mongoose; 



const productSchema = new Schema({

  title: {type:String,required:true},
  description:  String,
  price: Number,
  discountPercentage:Number,
  rating: {type: Number, min:0, max:5},
 
  brand:  String,
  category:  String,

  thumbnail: {type:String,required:true},
  category:{type:String,required:true},
    images: [ String]
    


});



exports. Product = mongoose.model('Product', productSchema);