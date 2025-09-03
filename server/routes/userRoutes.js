import { Router } from "express";

const router = Router();

router.post("/all", (req, res) => {
    res.status(200).json({message: "Route Live", data: req.body})
});
router.post("/:userId", (req, res) => {
    res.status(200).json({message: "Route Live", data: req.body})
});

export default router