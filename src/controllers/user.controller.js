import {asyncHandlar} from '../utils/asyncHandlar.js'

const registerUser = asyncHandlar(async (req,res)=>{
  res.status(200).json({
    message : "finally done it"
})

})


export {registerUser}