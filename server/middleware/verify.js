import { verifyToken } from "../utils/jwtSign";

export const authRequired = (req, res, next) => {
   const token = req.signedCookies?.auth_token || req.cookie.auth_token;

   if(!token) {
    return res.status(401).json({error: "Unauthorized"})
   }

   try {
    
     const payload = verifyToken(token)
   req.user = payload
   return next()

   } catch (error) {
     return res.status(401).json({error: "Unauthorized"})
   }
}
  