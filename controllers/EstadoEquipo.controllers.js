const EstadoEquipo=require('../models/Estado_Equipo')
const {request,response}=require('express')
const Estado_Equipo = require('../models/Estado_Equipo')

//crear
const createEstadoEquipo= async(req=request,
    res=response)=>{
        try {
            const nombre=req.body.nombre ? req.body.nombre.toUpperCase():''
    const estadoEquipoDB= await EstadoEquipo.findOne({nombre})
    if(estadoEquipoDB){
        return res.status(400).json({msg:'Ya existe'})
    }

    const date={
        nombre
    }

    const estadoEquipo=new EstadoEquipo(date)
    console.log(estadoEquipo)
    await estadoEquipo.save()
    return res.status(201).json(estadoEquipo)
            
        } catch (error) {
            return res.status(500).json({
                msg:'Error general'+ e
            })
        }
    

}

//listar todos
const getEstadoEquipos=async(req=request,
   
        res=response)=>{
            try {
                const {estady}=req.query
        const estadoEquiposDB= await EstadoEquipo.find({estady})
        
        
        
        return res.json(estadoEquiposDB)
                
            } catch (error) {
                return res.status(500).json({
                    msg:'Error general'+ e
                })
            }
        }
        

        // actualizar EstadoEquipo
        const EditarEstadoEquipo = (req = request,
            res = response) => {
           
                const {id} = req.params
        
        
                const info = req.body                                                 
                const newEstadoInfo = {
                    nombre: info.nombre,
                    estado: info.estado,
                    fechaCreacion: info.fechaCreacion,
                    fechaActualizacion: info.fechaActualizacion,
                   
                }
                EstadoEquipo.findByIdAndUpdate(id, newEstadoInfo, { new: true})
                .then(result => {
                    res.json(result)
                }).catch(error => {
                    console.error(error)
                })
        }

        const deleteEstado = (req = request,
            res = response, next) => {
           
                const {id} = req.params
        
        EstadoEquipo.findByIdAndDelete(id).then(resultado => {
            res.json(resultado)
        }).catch(error => next(error))
        }        
                        
    


module.exports={createEstadoEquipo,getEstadoEquipos,EditarEstadoEquipo,deleteEstado}
