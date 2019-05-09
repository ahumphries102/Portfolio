const express = require( 'express')
const app = express()
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')

const port = 5000

app.use(cors())

app.get('/', (request, response)=>{
	
})

app.listen(port,()=> console.log('I hear you'))