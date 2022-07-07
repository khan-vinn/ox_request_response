import { Router } from "express";
// import Controller from '../controllers/ResponseController'
import Controller from "../controllers/Portrait";

const router = Router({ mergeParams: true });
const controller = new Controller();

router.route("/:user_id").get(controller.get);

export default router;
