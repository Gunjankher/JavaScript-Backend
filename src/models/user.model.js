import { Schema } from "mongoose";
import mongoose from "mongoose";
import  Jwt  from "jsonwebtoken";
import bcrypt from  "bcrypt"

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
    type : String  , //cloundary url 
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

userSchema.pre("save", async function (next){
if (!this.isModified ("password")) return next();
this.password = await bcrypt.hash(this.password , 10)
next ()
})

userSchema.methods.isPasswordCorrect = async function (password){
 return await bcrypt.compare(password,this.password)
} 

userSchema.methods.generateAcessToken = function(){
    Jwt.sign(
      { _id :this._id,
        email : this.email,
        username : this.username,
        fullname : this.fullname
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
expiresIn : process.env.ACCESS_TOKEN_EXPIRY
      }
    )
}
userSchema.methods.generateRefrehToken = function(){

    Jwt.sign(
        { _id :this._id,
        //   email : this.email,
        //   username : this.username,
        //   fullname : this.fullname
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
  expiresIn : process.env.REFRESH_TOKEN_EXPIRY
        }
      )


}


export const User = mongoose.model("User",userSchema)