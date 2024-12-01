import express from 'express'
import { MovieCreate, MovieDelete, MovieIndex, MovieUpdate } from '../controllers/movies.controller'


const router = express.Router()

// CRUD functionality of movies
// R - Read



router.get('/', MovieIndex);


// C - Create
router.post('/', MovieCreate);


// U - Update
router.put ('/:id', MovieUpdate);


// D - Delete
router.delete('/:id',MovieDelete);

export default router;