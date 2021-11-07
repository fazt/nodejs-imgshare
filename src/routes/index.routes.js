import { Router } from "express";
const router = Router();

// Controllers
import {
  homeCtrl as home,
  imageCtrl as image,
} from "../controllers";

router.get("/", home.index);
router.get("/images/:image_id", image.index);
router.post("/images", image.create);
router.post("/images/:image_id/like", image.like);
router.post("/images/:image_id/comment", image.comment);
router.delete("/images/:image_id", image.remove);

export default router;
