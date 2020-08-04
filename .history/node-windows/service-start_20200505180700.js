var Service = require('node-windows').Service
const _server = require('path').join(__dirname, '../server.js')

console.log('_server: ', _server)
// Create a new service object
var svc = new Service({
	name: 'AUTORESTART',

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
