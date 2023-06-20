import { Router } from "express";
import { taskControllers } from "../../controllers/taskControllers.js";

const router = Router();

router.get("/", taskControllers.allTask);
router.get("/:id", taskControllers.getTask);
router.post("/", taskControllers.createTask);
router.patch("/:id", taskControllers.updateTask);
router.delete("/:id", taskControllers.deleteTask);

export default router;