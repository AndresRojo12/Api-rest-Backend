const{Schema,model}=require('mongoose')

const UsuarioSchema=Schema({
    nombre:{
        type:String,
        required:true
    },
    
    email:{
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

module.exports=model('Usuario',UsuarioSchema)