import { ApiError } from "../utils/ApiError";
import { asyncHandlar } from "../utils/asyncHandlar";
import { Jwt } from "jsonwebtoken";








 export const varifyJWT = asyncHandlar(async (req,res, next)=>{
 const token = req.cookies?.acessToken || req.header
("Authorization")?.replace("Bearer", "")


if(!token){
    throw new ApiError (401, "unauthorized token")
}

jwt.varify(token, process.env.ACCESS_TOKEN_SECRET)

await User.findById(decodeToken?._id).select("-password")

 })