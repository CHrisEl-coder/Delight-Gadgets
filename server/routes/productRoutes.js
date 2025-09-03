import { Router } from "express";

const route = Router();

route.get('/register', (req, res) => {
    res.send('Registering user route.')
})

export default route