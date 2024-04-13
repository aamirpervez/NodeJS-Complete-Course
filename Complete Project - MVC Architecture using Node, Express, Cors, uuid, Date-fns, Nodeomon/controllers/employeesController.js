const data = {
    employees : require('../model/employees.json'),
    setEmployees : function(data) {this.employees = data}
}

// SELECT ALL, CREATE, UPDATE, DELETE , SELECT WITH ID

// SELECT ALL

const getAllEmployees=(req,res) =>{
    res.json(data.employees);
}

// CREATE NEW EMPLOYEE

const createNewEmployee = (req, res) => {

    const newEmployee = {
        id: data.employees?.length ? data.employees[data.employees.length - 1].id + 1 : 1,
        firstname : req.body.firstname,
        lastname : req.body.lastname
    };

    if (!newEmployee.firstname || !newEmployee.lastname) {
        return res.status(400).json({ 'message': 'First and last names are required.' });
    }

    data.setEmployees([...data.employees,newEmployee]);
    res.status(201).json(data.employees);
}

// UPDATE  EMPLOYEE

const updateEmployee = (req, res) => {

    const employee = data.employees.find(emp => emp.id === parseInt(req.body.id));

    if (!employee) {
        return res.status(400).json({ "message": `Employee ID ${req.body.id} not found` });
    }
    if (req.body.firstname) employee.firstname = req.body.firstname;
    if (req.body.lastname) employee.lastname = req.body.lastname;

    const filteredArray =  data.employees.filter(emp => emp.id !== parseInt(req.body.id));
    const unsortedArray = [...filteredArray, employee]; 

    data.setEmployees(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
    res.json(data.employees);

}

// DELETE  EMPLOYEE

const deleteEmployee = (req, res) => {
    const employee = data.employees.find(emp => emp.id === parseInt(req.body.id));

    if (!employee) {
        return res.status(400).json({ "message": `Employee ID ${req.body.id} not found` });
    }

    const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id));
    data.setEmployees([...filteredArray]);
    res.json(data.employees);

}


// SELECT EMPLOYEE WITH ID 

const getEmployee = (req, res) => {

    const employee = data.employees.find(emp => emp.id === parseInt(req.params.id));

    if (!employee) {
        return res.status(400).json({ "message": `Employee ID ${req.body.id} not found` });
    }

    res.json(employee);
}

module.exports = {

    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
}

