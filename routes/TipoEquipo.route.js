const {Router}=require('express')
const{createTipoEquipo,getTipoEquipos,EditarTipoEquipo, deleteTipoEquipo}=require('../controllers/TipoEquipo.controllers')


const router= Router()

// crear
router.post('/',createTipoEquipo)

//consultar
router.get('/',getTipoEquipos)

//Actualizar

router.put('/:id',EditarTipoEquipo)

//eliminar
router.delete('/:id',deleteTipoEquipo)

module.exports= router;