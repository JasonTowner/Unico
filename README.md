#Unicorn Service API - as magical as it sounds!
https://unico.herokuapp.com

Simple custom API tool for users who are prototyping front-ends or anything that wants to hit a real endpoint before a real service exists.
The data sent to this service will only exist until: the server decides to clear memory, you delete your data, someone else deletes your data,
or until unicorns eat your data and turn it into power for laser eyes and stuff.

##Documentation
https://unico.herokuapp.com/documentation

API root: https://unico.herokuapp.com/api
Going to the root of the application will display all the currently stored resources which you could then use to do CRUD ops on each of them.

Supported HTTP Methods:
`GET``POST``PUT``DELETE``PATCH`

##User Agreement
This service is provided as a public service and it's use is strictly for those who are wanting to test their code against real HTTP endpoints.
This service is provided without any guarantee of protection of data and with no guarantee of consistency of the service and the data.
By using this service, you agree to take full responsibility for your data and your actions. And that your data may not be persisted for any
amount of time and that your data may be and can be erased by the server or other service users.
As with any type of Unicorn, tread carefully. Unicorns aren't to be messed with in any form!

##The Data
Any data posted to this service isn't and won't be persisted outside of the memory on the server.
Therefore don't blame unicorns when your data is randomly deleted.

**There are plans to persist this data but it will only be considered when we implement authentication.**

##Playing nice with our service
If unicorns don't like you, you may be blacklisted and/or your data may be removed. So play nice!

##API Versioning
The root of the APIs is `/api` and the urls are flexible enough to handle `/api/v1/{custom-resource-path}` therefore, if you're prototyping and want to
prototype with API version support, just use `/api/{custom-version}` as the root of your api instead of just `/api`

##Authentication
Currently there is no authentication and therefore we don't sandbox your data. If you post data to `/api/users` then that data can be viewed/edited/deleted
by anyone and everyone.

We do have plans to include authentication and sandboxing in future versions, so star this repo and keep an eye out.

##Flexible URLs
As I said in the versioning section, the URL structure is very flexible. This allows for deeply nested resources like `POST`ing to `/api/v1/ships/titanic`

##Mocked Objects
Root: `/api/mocked`

`GET ?statusCode=404`  
Response:  
`Status Code: 404`

`POST ?code={"mocked":"data","other":"properties"}&}statusCode=202`  
Response:  
`Status Code: 202`
```json
Body:
{
    "mocked":"data",
    "other":"properties"
}
```

`PUT ?statusCode=404`  
Response:  
`Status Code: 404`

`DELETE ?statusCode=404`  
Response:  
`Status Code: 404`

`PATCH ?statusCode=503`  
Response:  
`Status Code: 503`

Sometimes when you're testing your implementation of an API, you need on-the-fly data being returned from the server. Receive helpful responses and status codes.
Just send your desired response data as JSON in the query string param `data` and optionally set the response status code using the `statusCode` query string
param. So a `GET` to `/api/mocked?code={"test":"data"}&statusCode=200` will return:
```json
{
    "test": "data"
}
```

##Status Code Responses
Root: `/api/status-code`

`GET ?statusCode=404`  
Response:  
`Status Code: 404`

`POST /500`  
Response:  
`Status Code: 500`

`PUT /404`  
Response:  
`Status Code: 404`

`DELETE /404`  
Response:  
`Status Code: 404`

`PATCH /503`  
Response:  
`Status Code: 503`

This is where this project started. Someone mentioned wanting a service so they could test their status code handling on HTTP responses.