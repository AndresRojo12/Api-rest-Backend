const Usuario=require('../models/Users')
const {request,response}=require('express')

//crear
const createUsuario= async(req=request,
    res=response)=>{
        try {
            const nombre=req.body.nombre ? req.body.nombre.toUpperCase():''
            const email=req.body.email? req.body.email.toUpperCase():''
    const usuarioDB= await Usuario.findOne({nombre,email})
    if(usuarioDB){
        return res.status(400).json({msg:'Ya existe'})
    }

    const daty={
        nombre,email
    }

    const usuario=new Usuario(daty)
    console.log(usuario)
    await usuario.save()
    return res.status(201).json(usuario)
            
        } catch (error) {
            return res.status(500).json({
                msg:'Error general'+ e
            })
        }
    

}

//listar todos
const getUsuario=async(req=request,
   
        res=response)=>{
            try {
                const {estad}=req.query
        const usuarioDB= await Usuario.find({estad})
        
        return res.json(usuarioDB)
                
            } catch (error) {
                return res.status(500).json({
                    msg:'Error general'+ e
                })
            }
        }

 // Actualizar Usuario
 const EditarUsuario = (req = request,
    res = response) => {
   
        const {id} = req.params


        const inf = req.body                                                 
        const newUsuarioInfor = {
            nombre: inf.nombre,
            estado: inf.estado,
            email:inf.email,
            //fechaCreacion: inf.fechaCreacion,
            fechaActualizacion: inf.fechaActualizacion,
           
        }
        Usuario.findByIdAndUpdate(id,newUsuarioInfor, { new: true})
        .then(result => {
            res.json(result)
        }).catch(error => {
            console.error(error)
        })
}  

const deleteUsuario = (req = request,
    res = response, next) => {
   
        const {id} = req.params

Usuario.findByIdAndDelete(id).then(resultado => {
    res.json(resultado)
}).catch(error => next(error))
}



module.exports={createUsuario,getUsuario,EditarUsuario,deleteUsuario}
