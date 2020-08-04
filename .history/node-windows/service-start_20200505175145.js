var Service = require('node-windows').Service
const _server = 'C:\\Users\\alter\\www\\badrams.ru\\server.js'
console.log('_path: ', _server)
console.log('__dirname: ', __dirname + '\\server.js')

// Create a new service object
var svc = new Service({
	name: 'Auto_Restart',
	description: 'The nodejs.org example web server.',
	script: _server,
})

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function () {
	svc.start()
})

// Listen for the "start" event and let us know when the
// process has actually started working.
svc.on('start', function () {
	console.log(svc.name + ' service running')
})

// Install the script as a service.
svc.install()
