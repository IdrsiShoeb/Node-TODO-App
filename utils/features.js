import jwt from "jsonwebtoken"


export const sendCookie=(user,res,msg,statusCode)=>{
    const token = jwt.sign({_id: user._id } , process.env.JWT_SECRET)

        res.status(statusCode).cookie('token',token , {
            httpOnly: true,
            maxAge: 15*60*1000,
            sameSite : process.env.NODE_ENV==="DEVELOPMENT"? "lax" : "none",
            secure: process.env.NODE_ENV==="DEVELOPMENT"? false : true,
        }).json({
            success:true,
            message: msg
        })
}