const express = require("express")
const router = express.Router();
const student_controller = require("../controllers/student_controller")


// View All User
router.get("/",student_controller.view)

// Add New Records

router.get("/adduser",student_controller.adduser)
router.post("/adduser",student_controller.save)


// Update Records

router.get("/edituser/:id",student_controller.edituser)
router.post("/edituser/:id",student_controller.edit)


// Delete Records

router.get("/deleteuser/:id",student_controller.delete)



module.exports = router;