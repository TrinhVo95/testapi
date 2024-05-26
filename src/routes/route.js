import { Router } from "express";
import * as controller from "../controllers/controller.js";

const router = Router();
//router.get("/questions", controller.getQuestions);
//router.post("/questions", controller.addQuestions);

//can write as below
router
  .route("/questions")
  .get(controller.getQuestions)
  .post(controller.addQuestions)
  .delete(controller.deleteQuestions);

router
  .route("/result")
  .get(controller.getResult)
  .post(controller.addResult)
  .delete(controller.deleteResult);
export default router;
