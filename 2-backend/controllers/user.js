import { User } from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const register = async (req, res) => {
    const { username, email, password } = req.body
    try {
        let user = await User.findOne({ email })
        if (user) return res.json({ message: "User already exist" });
        const hashpass = await bcrypt.hash(password,10)
        user = await User.create({ username, email, password:hashpass})
        res.json({ message: "User Register succesfully", user })
    } catch (error) {
        res.json({message:error})
    }
}
export const login = async (req,res)=>{
    const {email,password} =req.body
    try{
        let user = await User.findOne({email});
        //console.log("User is comming from login ",user)
        if(!user) return res.json({message:"User not exist"})
        const validpass= await bcrypt.compare(password,user.password);
        if(!validpass) return res.json({message:"Inavlid cerenditasl"});
        const token = jwt.sign({userId:user._id},"!@#$%^&*()",{
            expiresIn:'1d'
        })
        res.json({message:`welcome ${user.username}`,token})
    }catch(error){
        res.json({message:error.message})
    }
}

export const profile = async (req,res)=>{
    res.json({user:req.user})
    
}