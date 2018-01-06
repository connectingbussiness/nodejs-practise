var express =require('express');
var app=express();
var path=require('path');
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
var port=app.set('port',server_port);
var ip=app.set('ip',server_ip_address);
app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.listen(port.get('port'),port.get('ip'),()=>
{
    console.log('newly started');
});

