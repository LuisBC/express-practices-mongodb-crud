import { Router } from "express";
import {
  getTasks,
  createTask,
  editTask,
  deleteTask,
  toggleDoneTask,
  renderTaskEdit,
} from "../controllers/task.controller";

const router = Router();

router.get("/", getTasks);

router.post("/tasks/create", createTask);

router.get("/tasks/:id/edit", renderTaskEdit);

// change the method to put if we have a real front-end
router.post("/tasks/:id/edit", editTask);

// change the method to delete if we have a real front-end
router.get("/tasks/:id/delete", deleteTask);

router.get("/tasks/:id/toggleDone", toggleDoneTask);

export default router;
