import { Router } from "express"
import * as controller from "../controllers/todo.controller"
const router = Router();
router.get("/", controller.GetTodo);
router.post("/create", controller.CreateTodo);
router.put("/update/:id", controller.UpdateTodo);
router.delete("/delete/:id", controller.DeleteTodo);
router.get("/:id", controller.getDataById)
export default router;