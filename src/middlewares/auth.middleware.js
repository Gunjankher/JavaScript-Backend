import { User } from "../models/user.model";
import { ApiError } from "../utils/ApiError";
import { asyncHandlar } from "../utils/asyncHandlar";
import { Jwt } from "jsonwebtoken";









 export const varifyJWT = asyncHandlar(async (req,res, next)=>{
 try {
    const token = req.cookies?.acessToken || req.header
   ("Authorization")?.replace("Bearer", "")
   
   
   if(!token){
       throw new ApiError (401, "unauthorized token")
   }
   
    const decodeToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
   
    const user = await User.findById(decodeToken?._id).select("-password -refreshToken")
    
   if(!user){
       throw new ApiError(401 , "Invalid Acess Token")
   }
   
    req.user = user; 
    next()
 } catch (error) {
    throw new ApiError(401, error?.message || "Inavalid Access Token")
 }

 })