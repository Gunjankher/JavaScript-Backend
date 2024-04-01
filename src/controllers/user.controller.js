import {asyncHandlar} from '../utils/asyncHandlar.js'
import {ApiError} from '../utils/ApiError.js'
import {User} from '../models/user.model.js'
import  {uploadOnCloudnary} from '../utils/cloudinary.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { application } from 'express'

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

 if(
  [fullname,email,username,password].some((field) =>
  field?.trim()=== "")
 ){
  throw new ApiError(400 , "All fields are required")
}
 
// check if user already exist

 const existedUser = await User.findOne({
  $or: [{username} , {email}]
})

if(existedUser){
  throw new ApiError(409 , "User with email or username already exists")
}

// images and avatar 

 const avatarLocalPath = req.files?.avatar[0]?.path
// const coverImageLocalPath = req.files?.coverImage[0]?.path

let coverImageLocalPath

if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length>0){
  coverImageLocalPath = req.files.coverImage[0].path
}

 if(!avatarLocalPath){
  throw new ApiError (400 , "Avatar file is required")
 }

 // upload them into cloudinary

const avatar =  await uploadOnCloudnary(avatarLocalPath)
const coverImage =  await uploadOnCloudnary(coverImageLocalPath)



//chekc for avatar 

if(!avatar){
  throw new ApiError (400 , "Avatar file is required")
 }


 // create object and create entry in database

  const user = await User.create({
  fullname,
  avatar : avatar.url,
  coverImage : coverImage?.url || "",
  email,
  password,
  username : username.toLowerCase()
 })

 // check if user is not empty and not null

  const createdUser =  await User.findById(user._id).select(
    "-password -refreshToken"
  )

  if(!createdUser){
    throw new ApiError (500 , "something Went wrong while registering user")
  }
// return 

return res.status(201).json(

  new ApiResponse(200, createdUser, "User registred Sucessfully")
)

} )


const loginUser = asyncHandlar (async (req, res)=>{

  // req data from user
  // validate data username or email
  // chaeck from database => find the user
  // password check - 
  // acess and refesh token 
  // send coockies of tokens


  const {email, username, password} = req.body

if(!username || !email){
  throw new ApiError(400 , "username or email is required")
 
}

  const user = await User.findOne(
  {
    $or :[{username}, {email}]
  }
)

if(!user) {
  throw new ApiError(404 , "user does not exist")
}

 const isPasswordValid = await user.isPasswordCorrect(password)

 if(!isPasswordValid) {
  throw new ApiError(404 , "password is incorrect")
}









})


export {
  registerUser,
  loginUser

}