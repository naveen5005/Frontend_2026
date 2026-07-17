import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
    generateAccessToken,
    generateRefreshToken
} from "../utils/generateTokens.js";

// Dummy user (for practice)
const user = {
    id: 1,
    name: "Naveen",
    email: "naveen@gmail.com",
    password: await bcrypt.hash("123456", 10)
};

// Register
export const register = async (req, res) => {
    res.json({
        message: "Register API working"
    });
};

// Login
export const login = async (req, res) => {

    const { email, password } = req.body;

    if (email !== user.email) {
        return res.status(401).json({
            message: "Invalid Email"
        });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(401).json({
            message: "Invalid Password"
        });
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    // Send Refresh Token as HttpOnly Cookie
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,      // true when using HTTPS in production
        sameSite: "lax",    // use "none" + secure:true if frontend/backend are on different domains
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    res.json({
        accessToken
    });
};

// Refresh
export const refresh = (req, res) => {
    console.log("Cookies:", req.cookies);
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
        return res.status(401).json({
            message: "Refresh token missing"
        });
    }

    try {

        const decoded = jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET
        );

        const accessToken = generateAccessToken({
            id: decoded.id,
            email: "naveen@gmail.com"
        });

        res.json({
            accessToken
        });

    } catch (err) {
        res.status(403).json({
            message: "Invalid Refresh Token"
        });
    }
};

export const logout = (req, res) => {

    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    });

    res.json({
        message: "Logged out successfully"
    });

};