var express =require('express');
var app=express();
var path=require('path');
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
app.use(express.static(path.join(__dirname,'dist')));
var port=app.set('port',server_port);
var ip=app.set('ip',server_ip_address);
app.get('/',(req,res)=>{
    // res.writeHead(200,{'content-type':'plain/text'});
    // res.send('Hello world');
    res.render(path.join(__dirname,'dist','index.html'))
    
})

app.listen(port.get('port'),port.get('ip'),()=>
{
    console.log('newly started');
});

