const express = require("express")
const router = express.Router();
const register_controller = require("../controllers/register_controler");

router.get("/",register_controller.view);
router.post("/content",register_controller.save);
router.get("/login",register_controller.login)
router.post("/login",register_controller.login_checking)
router.get("/register",register_controller.register)


router.get("/adduser",register_controller.adduser)
router.post("/adduser",register_controller.save)



module.exports=router;