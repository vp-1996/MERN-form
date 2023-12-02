import express from 'express'
import { addStudent } from '../controller/student.cont'

let studentRouter = express.Router()

studentRouter.post('/addStudent',addStudent)

export default studentRouter