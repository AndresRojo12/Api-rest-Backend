const { Router } = require('express')
const { createInventario, getInventarios,EditarInventario, deleteInventario} =
 require('../controllers/Inventarios.controllers')

const router = Router()

// crear
router.post('/', createInventario)

// consultar todos
router.get('/', getInventarios)

router.put('/:id',EditarInventario)

router.delete('/:id',deleteInventario)

module.exports = router;