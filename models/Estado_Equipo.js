const{Schema,model}=require('mongoose')

const EstadoEquipoSchema=Schema({
    nombre:{
        type:String,
        required:true
    },
    estado:{
        type:Boolean,
        default:true
    },
    fechaCreacion:{
        type:Date,
        default:new Date()
    },
    fechaActualizacion:{
        type:Date,
        default:new Date()
    }
})

module.exports=model('EstadoEquipo',EstadoEquipoSchema)