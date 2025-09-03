import jwt from "jsonwebtoken"


const secret = process.env.JWT_SECRET
const expire = process.env.JWT_EXPIRES_IN
const issuer = 'secure-auth-js'


export const signToken = (payload) => {
    return jwt.sign(payload, secret, {
        expiresIn: expire || '7d',
        issuer
    })
};


export const verifyToken = (token) => {
    return jwt.verify(token, secret, {issuer})
}

