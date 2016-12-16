# TimeAPI

This API will return a date sent to it in json format. You can access
the API online at https://mini-time-api.herokuapp.com/ Please do not abuse.

# Usage
If you clone this repo you can run it with "node server.js", at default it
listens to port 4000. When your server is running you can go to the localhost
URL, for example http://127.0.0.1:4000/ and your call will be after the last
slash, ex. http://127.0.0.1:4000/feb 15 2015. You can write the date in some
different ways and it should work:
feb-15-2015
2015-feb-23
15,feb,2015
etc.
If you just put in a number you get the date for that Unix-time.
