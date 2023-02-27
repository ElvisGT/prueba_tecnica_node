import {Schema,model} from 'mongoose';

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String || Number,
        required:true
    },
    role:{
        type:String,
        required:true,
    }
});

const UserModel = model('User',UserSchema);

export default UserModel;