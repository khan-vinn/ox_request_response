import { Router } from "express";
import ResponseController from "../controllers/ResponseController";
import BonusController from "../controllers/BonusController";
import ExcelController from "../controllers/ExcelConvertorController";
import SpssController from "../controllers/SpssConvertorController";
import requestSchema from "../requesSchema/Response";
import { validate } from "../middlewares/requestValidator";

const router = Router({ mergeParams: true });
const responsecontroller = new ResponseController();
const excelController = new ExcelController();
const spssController = new SpssController();
const bonusController = new BonusController();
router
    .route("/manager/:manager_id")
    .post(responsecontroller.listByManager)
    .delete(validate(requestSchema.delete), responsecontroller.delete);

router.route("/manager/user/:user_id").post(responsecontroller.listByUsers)
router.route("/manager/:manager_id/excel").get(excelController.convert);
router.route("/manager/:manager_id/spss").get(spssController.convert);
router.route("/bonus").get(bonusController.listBySurvey);

router.route("/user/:user_id").delete(responsecontroller.deleteBySurveyID);

export default router;
