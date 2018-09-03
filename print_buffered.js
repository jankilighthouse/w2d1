var https = require('https');
var bufferOutput = ' ';

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

https.get(requestOptions, function (response) {
  response.setEncoding('utf8');

response.on('data',function(data)
{

    console.log(data.toString() ,'\n');
    bufferOutput += data;


});

response.on('end', function() {
    console.log('Response stream complete.');
    // console.log(bufferOutput);
  });
});
}
getAndPrintHTML();


