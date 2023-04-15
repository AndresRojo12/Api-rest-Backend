const Marcas=require('../models/Marcas')
const {request,response}=require('express')

//crear
const createMarcas= async(req=request,
    res=response)=>{
        try {
            const nombre=req.body.nombre ? req.body.nombre.toUpperCase():''
    const marcasDB= await Marcas.findOne({nombre})
    if(marcasDB){
        return res.status(400).json({msg:'Ya existe'})
    }

    const dat={
        nombre
    }

    const marcas=new Marcas(dat)
    console.log(marcas)
    await marcas.save()
    return res.status(201).json(marcas)
            
        } catch (error) {
            return res.status(500).json({
                msg:'Error general'+ e
            })
        }
    

}

//listar todos
const getMarcas=async(req=request,
   
        res=response)=>{
            try {
                const {estas}=req.query
        const marcasDB= await Marcas.find({estas})
        
        return res.json(marcasDB)
                
            } catch (error) {
                return res.status(500).json({
                    msg:'Error general'+ e
                })
            }
        }

        // actualizar Marcas
const EditarMarca = (req = request,
    res = response) => {
   
        const {id} = req.params


        const info = req.body                                                 
        const newMarcaInfo = {
            nombre: info.nombre,
            estado: info.estado,
            fechaCreacion: info.fechaCreacion,
            fechaActualizacion: info.fechaActualizacion,
           
        }
        Marcas.findByIdAndUpdate({id}, newMarcaInfo, { new: true})
        .then(result => {
            res.json(result)
        }).catch(error => {
            console.error(error)
        })
}

const deleteMarcas = (req = request,
    res = response, next) => {
   
        const {id} = req.params

Marcas.findByIdAndDelete(id).then(resultado => {
    res.json(resultado)
}).catch(error => next(error))
}
        
        

    


module.exports={createMarcas,getMarcas,EditarMarca,deleteMarcas}
