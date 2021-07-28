const express = require('express')
const app = express();

// import configs
var init = require('./config/init')();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

//-----------------------------LISTENING-----------------------------//
app.listen(init.port, () => {
    console.log('API Initialized Successfully') 
    console.log('Now listening on port : ' + init.port)
});
//-----------------------------LISTENING-----------------------------//