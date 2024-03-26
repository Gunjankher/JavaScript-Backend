import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema({

username :{
    required : true,
    type : String,
    unique : true,
    lowecase : true,
    index : true,
    trim : true
},

email :{
    required : true,
    type : String,
    unique : true,
    lowecase : true,
    trim : true,

},

fullname  :{
    required : true,
    type : String,
    trim : true,
    index : true,
},

avatar :{
    type : string  , //cloundary url 
},

coverImage :{
type : String,
},

watchHistory:[
    {
        type: Schema.Types.ObjectId,
        ref : "Video"
    }
],

password : {
    type :String,
    required :[true , 'Password is required']
},

refreshToken :{
    type :String
}





},{
    timestamps:true
})


export const User = mongoose.model("User",userSchema)