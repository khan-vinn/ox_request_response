import { NextFunction, Router } from "express";
import responseRoutes from "./response";
import portraitsRoutes from "./portraits";
import surveyRoutes from "./survey";
import bonusRoutes from "./bonus";

const router = Router({ mergeParams: true });

router.use("/response", responseRoutes);
router.use("/v1/portrait", portraitsRoutes);
router.use("/v1/survey/:survey_id/", surveyRoutes);
router.use("/v1/user/:user_id/", bonusRoutes);
// router.use('/v1/excel', excelConverter)

export default router;
