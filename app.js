const express = require('express');
app = express();
const path = require('path');
const port = 3030;


app.use(express.static('public'));

app.get('/',(req, res) =>(res.sendFile(path.join(__dirname, 'views','home.html'))));




app.listen(port, ()=>console.log('server running on port'+ port));