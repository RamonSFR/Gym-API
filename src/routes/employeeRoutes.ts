import { Router } from 'express'

import * as controller from '../controllers/employeeController'

const employeeRoutes = Router()

/**
 * @swagger
 * /employees:
 *   get:
 *     summary: Get all employees
 *     tags: [Employees]
 *     responses:
 *       200:
 *         description: List of all employees with their workouts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */
employeeRoutes.get('/employees', controller.getAllEmployees)

/**
 * @swagger
 * /employees/{id}:
 *   get:
 *     summary: Get employee by ID
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Employee ID
 *     responses:
 *       200:
 *         description: Employee details with workouts
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */
employeeRoutes.get('/employees/:id', controller.getEmployeeById)

/**
 * @swagger
 * /employees:
 *   post:
 *     summary: Create a new employee
 *     tags: [Employees]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, role, cpf, wage]
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Trainer"
 *               role:
 *                 type: string
 *                 example: "Personal Trainer"
 *               cpf:
 *                 type: string
 *                 example: "12345678900"
 *               wage:
 *                 type: number
 *                 format: float
 *                 example: 5000.00
 *     responses:
 *       201:
 *         description: Employee created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       409:
 *         $ref: '#/components/responses/Conflict'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */
employeeRoutes.post('/employees', controller.addNewEmployee)

/**
 * @swagger
 * /employees/{id}:
 *   delete:
 *     summary: Delete employee by ID
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Employee ID
 *     responses:
 *       204:
 *         description: Employee deleted successfully
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */
employeeRoutes.delete('/employees/:id', controller.removeEmployee)

/**
 * @swagger
 * /employees/{id}:
 *   put:
 *     summary: Update employee by ID
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Employee ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Updated Trainer"
 *               role:
 *                 type: string
 *                 example: "Senior Personal Trainer"
 *               cpf:
 *                 type: string
 *                 example: "12345678901"
 *               wage:
 *                 type: number
 *                 format: float
 *                 example: 6000.00
 *     responses:
 *       200:
 *         description: Employee updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       409:
 *         $ref: '#/components/responses/Conflict'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */
employeeRoutes.put('/employees/:id', controller.updateEmployee)

export default employeeRoutes
