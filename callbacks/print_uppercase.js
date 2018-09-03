var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};


function printUpper(html) {

  var html=html.toUpperCase();
  console.log(html);
}


getHTML(requestOptions,printUpper);

