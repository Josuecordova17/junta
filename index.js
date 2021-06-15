const colors=require('colors')
const express=require('express')
const app=express()
const morgan=require('morgan')
const mysql=require('mysql')
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database:'junta'
  });
const port =  3000
app.use(morgan('dev'))
app.use(express.json())
app.listen(port,()=>{
//
console.log(`servidor en puerto ${port}`.yellow)
})
//
app.set('view engine','ejs')
//
app.put('/agregar',(req,res)=>{
let mes = req.body.mes,
pago = req.body.pago,
p='`'+mes+'`',
sql='UPDATE `2021` SET '+p+`=${pago}`+`WHERE `
connection.query(sql,(err)=>{
    if (!err) {
        console.log('Actualizado');
    } else {
        console.error(err);
    }
})
res.send('Actulizado')
})
app.use(express.static('public'))