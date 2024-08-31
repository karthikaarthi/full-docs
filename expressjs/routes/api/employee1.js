const  express = require('express')

const router = express.Router()
const employeeController1 = require('../../controllers/employeeController1')

router.route('/')
.get(employeeController1.getAllEmployees)
.post(employeeController1.createNewEmployee)
.put(employeeController1.updateEmployee)
.delete(employeeController1.deleteEmployee)

router.route('/:id')
.get(employeeController1.getEmployee)
module.exports = router