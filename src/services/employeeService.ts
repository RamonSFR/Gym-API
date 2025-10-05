type Employee = {
    id: Number
    name: String,
    cpf: String,
    wage: Number
}

let employees: Employee[] = []

const EmployeeService = {
    getEmployees(): Employee[] {
        return employees
    },

    getEmployeeById(id: number): Employee {
        const employee = employees.find(e => e.id === id)
        if (!employee) {
            throw new Error("Employee not found")
        }
        return employee
    },

    addNewEmployee(newEmployee: Employee): void {
        employees.push(newEmployee)
    },

    deleteEmployee(oldEmployee: Employee): void {
        employees = employees.filter(e => e.id === oldEmployee.id)
    },

    updateEmployee(updatedEmployee: Employee): void {
        employees = employees.map(e => e.id === updatedEmployee.id ? updatedEmployee : e)
    }
}

export default EmployeeService
