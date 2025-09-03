import { Router } from "express";
import bcrypt from "bcryptjs";
import sanitize from "mongo-sanitize"
import userModel from "../models/userModels.js";
import { signToken, verifyToken } from "../utils/jwtSign.js";
import { limiter } from "../middleware/rateLimit.js";


const router = Router();



router.post('/register', limiter, async (req, res) => {
    const {username, email, state, password, cellnumber, agreed} = req.body;

    try {

            const sanEmail = sanitize(email)

            const userExist = await userModel.findOne({email: sanEmail}).lean()

            if (userExist) return res.status(409).json({message: "User already exists"});

            const passwordHash = await bcrypt.hash(password, 12);
            const user = await userModel.create({email: sanEmail, username: username, state: state, cellnumber: cellnumber, agreed: agreed, admin: false, password: passwordHash});

            const token = signToken({sub: String(user.id), email: user.email, username: user.username});


            res.cookie('auth_token', token, {
                httpOnly: true,
                sameSite: "lax",
                secure: process.env.NODE_ENV || 'production',
                maxAge: 7 * 24 * 60 * 60 * 1000
            });


            return res.status(200).json({user: {
                id: user.id,
                username: user.username,
                state: user.state,
                admin: user.admin,
                cellnumber: user.cellnumber,
                email: user.email

            }})
        
    } catch (error) {

        console.log(error)
        return res.status(500).json("Server error")
        
    }

   
});


router.post('/login', limiter, async (req, res) => {
    const {email, password} = req.body;

    const sanEmail = sanitize(email)

    try {

        const user = await userModel.findOne({email: sanEmail}).select('+password');
        if(!user) return res.status(409).json({error: "invalid credentials"});

        const checkPass = await bcrypt.compare('password', user.password);
        if(!checkPass)  return res.status(409).json({error: "invalid credentials"});

        const token = signToken({sub: String(user.id), email: user.email, username: user.username})

        res.cookie('auth_token', token, {
            httpOnly: true,
            sameSite: 'lax',
            secure: process.env.NODE_ENV || 'production',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            user: {
                id: user.id,
                username: user.username,
                state: user.state,
                admin: user.admin,
                cellnumber: user.cellnumber,
                email: user.email
            }
        })



    } catch (error) {
        console.log("Server error", error.body || error.message || error)
        res.status(500).json({error: "Server Error"})
    }
});

router.post('/logout', (req, res) => {
    res.cookie('auth_token', '', {
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV || 'production',
        maxAge: 0
    });

    return res.json({ok: true})
})


router.get('/me', (req, res) => {

    const token = req.signedCookies?.auth_token || req.cookies.auth_token;

    if (!token) res.status(200).json({user: null});

    try {
        const user = verifyToken(token);
        return res.status(200).json({userId: user.id, email: user.email, username:user.username, state: user.state, number: user.cellnumber})
    } catch(err) {
        console.log('Error fetching user data', err.response?.body || err.message || err)
        throw new Error('Error getting user', err)
       
    }

})

export default router;