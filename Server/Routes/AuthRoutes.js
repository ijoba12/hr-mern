import express from "express";
import { signin, signup,forgotPassword, resetPassword, verify } from "../controller/authController.js";
import restrict from "../middleware/isAdmin.js"
import { auth } from "../middleware/auth.js";
const router = express.Router()


router.post("/signup", auth,restrict("admin","super-admin"), signup);
router.get("/verify",auth,verify)
// router.post("/s")
router.post("/signin", signin)
router.post("/forgotpassword", forgotPassword)
router.put("/resetpassword/:resetToken", resetPassword)
export default router