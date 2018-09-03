const https = require('https');

module.exports = function getHTML (options, callback) {
  var output = ' ';

    /* Your code here */

  https.get(options, function (response) {
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


