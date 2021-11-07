import { Router } from "express";
import { authCtrl } from "../controllers";

const router = Router();

router.get("/auth/signin", authCtrl.renderSignIn);
router.post("/auth/signin", authCtrl.signIn);

router.get("/auth/signup", authCtrl.renderSignUp);
router.post("/auth/signup", authCtrl.signUp);

router.get("/auth/logout", authCtrl.logout);

router.get("/profile", authCtrl.profile);

export default router;
