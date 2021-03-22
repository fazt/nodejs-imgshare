import { Router } from "express";
const router = Router();

// Controllers
import {
  homeCtrl as home,
  imageCtrl as image,
  authCtrl as auth,
} from "../controllers";

router.get("/", home.index);
router.get("/images/:image_id", image.index);
router.post("/images", image.create);
router.post("/images/:image_id/like", image.like);
router.post("/images/:image_id/comment", image.comment);
router.delete("/images/:image_id", image.remove);

// Authentication routes
router.get("/auth/signin", auth.renderSignIn);
router.post("/auth/signin", auth.signIn);

router.get("/auth/signup", auth.renderSignUp);
router.post("/auth/signup", auth.signUp);

router.get("/auth/logout", auth.logout);

router.get("/profile", auth.profile);

export default router;
