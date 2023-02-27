import {Schema,model} from 'mongoose';

const ProductSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },

});

const ProductModel = model('Product',ProductSchema);

export default ProductModel;