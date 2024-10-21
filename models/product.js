
const mongoose = require('mongoose');
const { Schema } = mongoose;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log('database secure');
  
}

  // Schema
  const productSchema = new Schema({

    title: String,
    description:  String,
    price: Number,
    discountPercentage:Number,
    ratings: Number,
   
    brand:  String,
    category:  String,

    thumbnail: String,
      images: [ String]
      
 
  });


  exports.Product = mongoose.model('Product', productSchema  );