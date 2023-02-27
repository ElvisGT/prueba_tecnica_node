import {Schema,model} from 'mongoose';

const StoreSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    total:{
        type:Number,
        default:0
    },
    product:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Product'
    }
});

const StoreModel = model('Store',StoreSchema);

export default StoreModel;