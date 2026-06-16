import express from "express";

import { registerUser, loginUser,  logoutUser,  getCurrentUser, updateProfile, changePassword, forgotPassword, resetPassword, deleteAccount} from "../controllers/auth.controller.js";

import {  verifyJWT } from "../middlewares/auth.middleware.js";

import { authLimiter } from "../middlewares/rateLimit.middleware.js";


const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Auth route working"
  });
});

router.post("/register", authLimiter, registerUser);

router.post("/login", authLimiter, loginUser);

router.post("/logout",  verifyJWT, logoutUser );

router.get(  "/me",  verifyJWT,  getCurrentUser);


router.patch(  "/profile",verifyJWT,  updateProfile);

router.patch(  "/changepassword",verifyJWT,  changePassword);

router.post("/forgot-password",forgotPassword);

router.post("/reset-password", resetPassword);

router.delete("/delete-account",verifyJWT,deleteAccount);

export default router;