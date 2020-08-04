var Service = require('node-windows').Service
const _server = require('path').join(__dirname, 'nodemon.js')

console.log('_server: ', _server)

// Create a new service object
var svc = new Service({
	name: 'AAA',
	script: 'C:\\Users\\alter\\www\\badrams.ru\\nodemon.js',
})
// Listen for the "uninstall" event so we know when it's done.
svc.on('uninstall', function () {
	console.log('Uninstall complete.')
	console.log('The service exists: ', svc.exists)
})
// Uninstall the service.
svc.uninstall()
