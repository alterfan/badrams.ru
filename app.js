var express = require('express')
var app = express()
var server = require('http').createServer(app)
var path = require('path')
var cookieParser = require('cookie-parser')
var indexRouter = require('./src/js/server/routes/index.js')
var config = require('./src/js/server/config.js')
var serv = require('./src/js/server/utils.js')
var port = serv.normalizePort(process.env.PORT || config.prod.port)
app.set('port', port)
app.use(express.json())
app.use('/public/assests', express.static(__dirname + '/public/assets'))
app.use(
	express.urlencoded({
		extended: false,
	}),
)
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '/public/')))
app.use('/', indexRouter)
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}
	// render the error page
	res.status(err.status || 500)
	res.render('error')
})
app.listen(port, (req) => {
	console.log(`Server start at port:` + app.get('port'))
})
server.on('error', serv.onError)
server.on('listening', serv.onListening)
module.exports = app
