import {asyncHandlar} from '../utils/asyncHandlar'

const registerUser = asyncHandlar(async (req,res)=>{

res.status(200).json({
    message : "ok"
})

})


export {registerUser}