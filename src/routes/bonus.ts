import { Router } from "express";
import Controller from "../controllers/BonusController";

const router = Router({ mergeParams: true });
const controller = new Controller();

router.route("/bonus").get(controller.listByUser);
export default router;
