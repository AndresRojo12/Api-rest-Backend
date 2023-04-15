const {Router}=require('express')
const{createMarcas,getMarcas, EditarMarca, deleteMarcas}=require('../controllers/Marcas.controllers')


const router= Router()

// crear
router.post('/',createMarcas)

//consultar
router.get('/',getMarcas)

//Actualizar
router.put('/:id',EditarMarca)

//Eliminar
router.delete('/:id',deleteMarcas)

module.exports= router;