

const express	= require('express')
const app		= express()
var   port		= process.env.PORT || 3000;
app.use(express.json())

/*
	app.get()
	app.post()
	app.put()
	app.delete()
	
	
*/


app.get('/', (request, response) => {
	response.send('Hello World')
})

app.get('/api/courses', (request, response)=>{
	response.send([1,2,3])
})


'Try /api/courses/dave/21?a=20&b=30'
app.get('/api/courses/:name/:age', (request, response)=>{
	console.log(request.params)	// Params from url as p1/p2/
	console.log(request.query)	// Params from ?a=20&b=30
	if(false)response.send(request.params)
	else response.status(404).send('Something not found :c')
})

app.post('/api/courses', (req, res)=>{
	console.log(req.body)		// Params from post, JSON format
	res.send({"Dingo" : req.body})
})


app.listen(port, ()=>{
	console.log(`Listening on port ${port}...`)
})