
function test()
{
	var exec = require('child_process').exec, child;
	child = exec('java -jar X:/AppSense/Desktop/newjar.jar Ecommerce lastBuild',
  	function (error, stdout, stderr){
    	console.log('stdout: ' + stdout);
    	console.log('stderr: ' + stderr);
    	if(error !== null){
    		console.log('exec error: ' + error);
    	}
	});
}
test();