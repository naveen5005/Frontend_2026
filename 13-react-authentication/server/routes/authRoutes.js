import express from "express";
import { register, login, refresh, logout } from "../controllers/authController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
const router = express.Router();


router.get("/test", (req, res) => {
    res.json({
        message: "Auth route is working"
    });
});

router.get("/profile", verifyToken, (req, res) => {
    res.json({
        message: "Welcome!",
        user: req.user
    });
});

router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refresh);
router.post("/logout", logout);

export default router;