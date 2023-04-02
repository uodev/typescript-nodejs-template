import jwt from "jsonwebtoken"

export const createToken = (userId:string) : string => {
    const token = jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:'7 days'})
    return token
}

export const verifyToken = (token:string) : {userId:string} | null => {
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        return decoded as {userId:string}
    }catch(e){
        return null
    }
}