// the purpose of this project is to get experinced to using branches in order to simulate mutliple branch team work 
const express = require('express')
const app = express()
//simple hello world node app
const APP_PORT = process.env.APP_PORT || 3000; app.get('/',(req, res) =>{
    res.send('HELLO WORLD!')
}); app.listen(APP_PORT, () => {
    console.log(`Running app at port:${APP_PORT}`)
})