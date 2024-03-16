const asyncHandlar = (requestHandlar)=>{
    (req , res, next )=>{

Promise.resolve(requestHandlar(req,res,next))
.catch((err)=>next(err))

    }
}

export {asyncHandlar}


















// try catch syntax 


// const asyncHandlar = ()=> async()=>{

// try {
    
// } catch (error) {
//     res.status(err.code || 500).json({
// success : false,
// message : err.message

//     })
// }

// }




