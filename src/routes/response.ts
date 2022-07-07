import { Router } from "express";
// import Controller from '../controllers/ResponseController'
import Controller from "../controllers/ResponseController";
import requestSchema from "../requesSchema/Response";
import { validate } from "../middlewares/requestValidator";

const router = Router({ mergeParams: true });
const controller = new Controller();

router.route("/")
.post(validate(requestSchema.create), controller.create)
.get(controller.list);

router.route("/:user_id")
.get(controller.listByUser);

export default router;
