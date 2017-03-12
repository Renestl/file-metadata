const express			= require('express');
const http				= require('http');
const bodyParser		= require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const routes = require('./routes/index');
app.use('/', routes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'pug');
app.set('views', './views');


app.listen(port, () => {
	console.log("Server listening");
});