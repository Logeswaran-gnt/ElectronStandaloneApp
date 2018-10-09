function sample(){
document.getElementById('add').innerHTML="lok";
var python = require("python-shell")
var path = require("path")

var city = document.getElementById("city").value
document.getElementById("city").value = "";

var options = {
scriptPath : path.join(__dirname, '/../engine/'),
args : [city],
pythonPath : '/usr/bin/python'


}
alert(options['scriptPath'])
var sampl = new python('sam.py', options);
alert('jjj');
sampl.on('message', function(message){

swal(message);

document.getElementById('add').innerHTML="hlknlhjnhio uh";
})
}
