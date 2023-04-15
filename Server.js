const app= require('./app')
const{conection}= require('./databas/configuration')
const dotenv=require('dotenv').config()
const conex=conection()

const port = process.env.PORT;
app.listen(port, () => console.log(`escuchando en puerto ${port}...`))

//app.set('port',process.env.PORT || 3000)


//app.listen(app.get('port'), ()=>{
    //console.log(`arranco por puerto: ${app.get('port')}`)
 //})