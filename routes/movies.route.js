import express from 'express'


const router = express.Router()



// CRUD functionality of movies
// R - Read
router.get('/', (req, res) => {
    res.send("get all movie lists")
})


// C - Create
router.post('/', (req, res) => {
    res.send("create a movie list")    
})



// U - Update
router.put ('/:id', (req, res) => {
    res.send("update the movie ")    
})



// D - Delete
router.delete('/:id', (req, res) => {
    res.send("delete the movie")
})




export default router;