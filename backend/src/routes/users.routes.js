import { Router } from "express";

import { addToHistory, getUserHistory, login, register } from "../controllers/user.controller.js";


const router =Router();

//routing 

/*
Jab same path par multiple HTTP methods hon. to router.route use kro

router
  .route("/user")
  .get(getUser)
  .post(createUser)
  .put(updateUser)
  .delete(deleteUser);

router.get("/user", getUser);
router.post("/user", createUser);
router.put("/user", updateUser);
router.delete("/user", deleteUser);
*/
router.post("/login", login);
router.post("/register", register);
router.post("/add_to_activity",addToHistory);
router.get("/get_all_activity",getUserHistory);

export default  router;