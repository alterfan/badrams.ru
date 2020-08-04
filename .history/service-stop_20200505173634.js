var Service = require('node-windows').Service
const _path = require('path').join(__dirname, '../../../app.js')

// Create a new service object
var svc = new Service({
	name: 'AutoRestart',
	script: _path,
})
// Listen for the "uninstall" event so we know when it's done.
svc.on('uninstall', function () {
	console.log('Uninstall complete.')
	console.log('The service exists: ', svc.exists)
})
// Uninstall the service.
svc.uninstall()
