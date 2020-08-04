var Service = require('node-windows').Service
const _server = __dirname + '\\server.js'

console.log('_server: ', _server)

// Create a new service object
var svc = new Service({
	name: 'Auto_Restart',
	script: _server,
})
// Listen for the "uninstall" event so we know when it's done.
svc.on('uninstall', function () {
	console.log('Uninstall complete.')
	console.log('The service exists: ', svc.exists)
})
// Uninstall the service.
svc.uninstall()
