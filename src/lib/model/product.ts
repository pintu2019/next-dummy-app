import mangoose  from 'mongoose';

const productModel = new mangoose.Schema({
    name:String,
    price:String,
    company:String,
    category:String,
})

export const Product = mangoose.models.products ||  mangoose.model('products', productModel);