import {asyncHandlar} from '../utils/asyncHandlar.js'
import {ApiError} from '../utils/ApiError.js'

const registerUser = asyncHandlar(async (req,res)=>{
  // res.status(200).json({
  //   message : "finally done it"

 // get details from user from frontend
 // validation -not empty
 // chack if user already exist : username and email 
 // check for images and check for avatar
 // upload them into cloudnary , avatar 
 // create user object - create entry in db 
 // remove password and refresh token field 
 // check for the user creation 
 // return response

// get data from front-end
const {fullname,email,username,password} = req.body
console.log("email", email);

// validation

 


})



export {registerUser}