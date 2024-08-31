
data = {}

data.employees = require('../express.js/module/employee.json')



const getAllEmployees = (req,res)=>{
    res.json(data.employees)
}

const createNewEmployee = (req,res)=>{
    console.log(req.body)
    res.json({
        "Id":req.body.Id,
        "FirstName":req.body.FirstName,
        "LastName":req.body.LastName
    })
}

const updateEmployee = (req,res)=>{
    res.json({
        "firstName":req.body.FirstName,
        "lastName":req.body.LastName
    })
}

const deleteEmployee = (req,res)=>{
    res.json({"id":req.body.Id})
  }


  const getEmployee = (req,res)=>{
    res.json({"id":req.params.id})
}

module.exports = {
    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
}