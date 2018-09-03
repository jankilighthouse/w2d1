var https = require('https');

var output = ' ';

function getHTML (options, callback) {

  https.get(requestOptions, function (response) {
  response.setEncoding('utf8');

response.on('data',function(data)
{

output += data;
});


response.on('end', function() {
    console.log('Response stream complete.');
    callback(output);

  });
});
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};
getHTML(requestOptions, printHTML);