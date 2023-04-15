const {Router}=require('express')
const{createUsuario,getUsuario, EditarUsuario, deleteUsuario}=require('../controllers/Usuario.controller')



const router= Router()

// crear
router.post('/',createUsuario)

//consultar
router.get('/',getUsuario)

//actualizar

router.put('/:id',EditarUsuario)
//Eliminar
router.delete('/:id',deleteUsuario)




module.exports= router;