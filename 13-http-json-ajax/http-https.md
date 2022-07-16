# HTTP - HyperText Transfer protocal

- Created by Tim Berners Lee in 1989
- Protocol - standard that is followed for standardized communication
- http allows for fetching of documents online
- http is the language that both client and server use to communicate
- clients send requests - servers sends response

## HTTP Request methods

### GET

The HTTP GET method requests a representation of the specified resource. Requests using GET should only be used to request data (they shouldn't include data).

### POST

The HTTP POST method sends data to the server. The type of the body of the request is indicated by the Content-Type header.
(New data)

### PUT

The HTTP PUT request method creates a new resource or replaces a representation of the target resource with the request payload.
(Updating existing data)

### DELETE

The HTTP DELETE request method deletes the specified resource.

## HTTP Response methods

### 100s

Informational codes indicating that the request initiated by the browser is continuing.

### 200s

Success codes returned when browser request was received, understood, and processed by the server.

### 300s

Redirection codes returned when a new resource has been substituted for the requested resource.

### 400s

Client error codes indicating that there was a problem with the request.

### 500s

Server error codes indicating that the request was accepted, but that an error on the server prevented the fulfillment of the request.

## Google Chrome Dev Tools - Network Tab

- Nice tool so you can check http request responses, errors etc

## Sending request

### Method 1 Query String - GET

Sends data in url with query string parameters, very unsecure method

### Method 2 Send data via body - POST

Sends data as form data, much more secure

## HTTPS - HyperText Transfer protocal secure

- Communication is now encrypted between client and server
- Transport layer security or socket layer security - TLS/SSL
- Even is communication is intercepted will still be encrypted
