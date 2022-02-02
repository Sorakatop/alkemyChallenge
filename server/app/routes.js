const express = require('express');
const router = express.Router();

// Controllers
const {register,login,test} = require('./controllers/userController');
const { list, addOperation, editOperation, deleteOperation, userOperation } = require('./controllers/operationController')
// Middlewares
const auth = require('./middlewares/authLogin');

// Home
router.get('/', (req, res) => res.json({ hello: "World" }));
//crud operaciones
router.get('/api/test', list)
router.get('/api/:id',userOperation)
router.post('/api/create', addOperation)
router.put('/api/edit/:id', editOperation)
router.delete('/api/delete/:id', deleteOperation)

//user controller
router.get('/t', test)
router.post('/api/login', login)
router.post('/api/register', register)

module.exports = router;