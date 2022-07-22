# RESTFUL Api

- Defines a set of functions can perform and request that return data
- Create api that follows standards and can work on different systems
- GET to receive data
- PUT to update data
- POST to create data
- DELETE to delete data
- Stateless - Calls can be made independantly, each call contains all date to resolve successfully

## Type of requests - GET

- req.query - Get access to query string that was submitted
- req.body - Get access to body of request using body parsers
- req.headers - Get access to headers of request
- req.params - Get access to parameters of url

## Type of responses

- Note - express seems to switch between text/html and application/json as needed
- res.send - Sends response as text, also sets content to text/html
- res.json - Sends response, also sets content to application/json
- res.status(404) - Sets response status, can set to 404 for example

## Serving static assets

- Static files are served from public folder
- `app.use(express.static(__dirname + "/public"))`; - Didnt work, dirname not defined unless .cjs file error
- `app.use(express.static("public"))`; - Works fine,
- Proper routing module would be better, maybe router
