var nodemon = require('nodemon')
const server = require('path').join(__dirname, 'app.js')
console.log('app.js', server)

nodemon({
	script: 'app.js',
	ext: 'js html',
})

nodemon
	.on('start', function () {
		console.log('App has started')
	})
	.on('quit', function () {
		console.log('App has quit')
		process.exit()
	})
	.on('restart', function (files) {
		console.log('App restarted due to: ', files)
	})
