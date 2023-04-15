const{Schema,model}=require('mongoose')

const MarcasSchema=Schema({
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

module.exports=model('Marcas',MarcasSchema)