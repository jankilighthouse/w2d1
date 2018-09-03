var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};


function printLower(html) {

  var html=html.toLowerCase();
  console.log(html);
}


getHTML(requestOptions,printLower);

