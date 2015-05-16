# Unico API
SSL: https://unico.herokuapp.com

NON-SSL: http://unico.herokuapp.com

API root: `/api`

##Documentation
http://unico.herokuapp.com/documentation

##Unicorn API - as magical as it sounds!
Simple custom API tool for users who are prototyping front-ends or anything that wants to hit a real endpoint before a real service exists.
The data sent to this service will only exist until: the server decides to clear memory, you delete your data, someone else deletes your data,
or until unicorns eat your data and turn it into power for laser eyes and stuff.

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