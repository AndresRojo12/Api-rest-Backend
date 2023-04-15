const {Router}=require('express')
const{createEstadoEquipo,getEstadoEquipos, EditarEstadoEquipo, deleteEstado}=require('../controllers/EstadoEquipo.controllers')


const router= Router()

// crear
router.post('/',createEstadoEquipo)

//consultar
router.get('/',getEstadoEquipos)

router.put('/:id',EditarEstadoEquipo)

router.delete('/:id',deleteEstado)

module.exports= router;