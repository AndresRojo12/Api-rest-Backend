const{Schema,model}=require('mongoose')

const InventariosSchema=Schema({
    serial:{
        type: String,
        required:true,
        unique:true
    },
    Modelo:{
        type:String,
        required:true,
        unique:true
    },
    Descripción:{
        type:String,
    },
    FotoEquipo:{
        type:String,
        required:true
    },
    Color:{
        type:String,
        required:true
    },

    FechaCompra:{
        type:Date
    },
     precio:{
        type:Number
     },

     usuario:{
        type:Schema.Types.ObjectId,
        ref:'Usuario',
        required: true
     },
     marca:{
        type:Schema.Types.ObjectId,
        ref: 'Marca',
        required:true
     },
     estado:{
        type:Schema.Types.ObjectId,
        ref: 'Estado',
        required: true
     },
     tipoEquipo:{
        type: Schema.Types.ObjectId,
        ref: 'tipoEquipo',
        required: true
     }
})

module.exports=model('Inventario',InventariosSchema)