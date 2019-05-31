const http = require("http") // call in HTTP package. this is pre-packaged with node
const hostname = "localhost" // can set it to any URL. localhost is the default
const port = 3000 // can set to any port

// ROUTES

// '/' - Match two random students and display
// GET '/students' - Get a list of all students (from the database)
// POST '/students' - Create a new student

const students = ["Natasha", "Joe", "Matt", "Rachel", "Glen", "Dana"]
// The callback accepts a request and a response
// create and configure server object in memory. it can't receive requests.
const server = http.createServer((req, res) => {
	// testing to see whether a route is created
	if (req.method === "GET" && req.url === "/") {
		console.log("Matching students")
	} else if (req.method === "GET" && req.url === "/students") {
		console.log("Getting students")
		res.writeHead(200, {
			// can't send an array. it has to be sent into a type that can be sent across HTTP
			"Content-Type": "application/json; charset=UTF-8" //set the response to be a json
		}) // combines .statusCode and .setHeader
		res.write(JSON.stringify(students)) // need to turn students back into string
	} else if (req.method === "POST" && req.url === "/students") {
		console.log("Adding student")
	} else {
		console.log("Could not find a route.")
		// throw "Cannot find route"
		res.statusCode = 404 // return a 404 error
		res.end() // send the response out
	}

	// console.log(req.method)
	// console.log(req.url) // returns a favicon

	res.end() // .end is necessary to send the response and the browser will be forever waiting for a response
	// response.statusCode = 200
	// // What is the type of data. if returning json, then content type is "application/json"
	// response.setHeader("Content-Type", "text/plain") // This sets up HTTP header. CORS uses a http header.
	// // response.write("Hello World.") // the alternative to writing in
	// response.end("Hello World.") // We are done setting up our response, send it out now. what is sending the response back across the network.
})

// Call the listen method to get the server object up and running.
// listen on this port and on this hostname
// listens for incoming requests
server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`)
}) // there's nothing on the console that the server has been successuflly initialised and listening on the port.