# EXPRESS MVC Afternoon Challenge Demonstration

Core functionalities:

- Create an Express web server that is able to handle a full CRUD (create, read, update, delete) resource named Tweet
- Do not add any html, this will be an API that only responds back in JSON

Advanced functionalities:

- Track this resource inside of a MongoDB database

# What is needed

- bodyparser and express only
- working on json purely so no user input forms and no ejs

# Steps

`npm init`
`npm install express body-parser --save`
create `indx.js`
create controllers folder
create tweet_controller.js inside controllers folder
create routes.js
`sudo npm i -g npm@latest`
set up CRUD function expressions in tweet_controller.js
set up the individual CRUD calls in router.js
set up the individual routes in the CRUD calls in router.js (up to you as to how to structure your application and what your routes look like)
create a server in index.js to get things running
use bodyparser in index.js
use router in index.js
add app.listen to the bottom of the index.js
need to export both routes.js and tweet_controller.js
import tweet_controller into routes.js

test the server routes on postman

- in postman when only dealing with JSON, go to body > select raw
- input a testing json in the text field. the testing json has to be in the following format with the key and values both in double quotes(it's not a javascript object, which has no double quotes)

```
{
	"title" : "First tweet title",
	"content" : "This is the content!"
}
```
