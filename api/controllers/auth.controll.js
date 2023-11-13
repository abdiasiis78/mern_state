import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js"

export const signup = async (req, res, next) =>{
    const {username, email, password} = req.body
    
    try{
    
    const hashedPassword = bcryptjs.hashSync(password, 10)

    const newUser = new User({ 
        username,
        email,
        password: hashedPassword,
    })
        
    await newUser.save();
        res.status(201).json({
            message: "User creation succsesfuly"
        })


    }catch(err){
        next(err)
    }


}