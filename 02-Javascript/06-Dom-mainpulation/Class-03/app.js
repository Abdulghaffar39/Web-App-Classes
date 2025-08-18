

var body = document.childNodes;                                     // Show: [<!DOCTYPE html>, html]
var body = document.childNodes[0];                                  // Show: <!DOCTYPE html>
var body = document.childNodes[1];                                  // Show: <html lang='en'></html>
var body = document.childNodes[2];                                  // Show: Undefined

var body = document.childNodes[0].childNodes;                       // Show: NodeList []
var body = document.childNodes[0].childNodes[0];                    // Show: Undefined

var body = document.childNodes[1].childNodes;                       // Show: [head, text, body]
var body = document.childNodes[1].childNodes[0];                    // Show: <head></head>
var body = document.childNodes[1].childNodes[1];                    // Show: #text
var body = document.childNodes[1].childNodes[2];                    // Show: body
var body = document.childNodes[1].childNodes[3];                    // Show: Undedined

var body = document.childNodes[1].childNodes[0].childNodes;         // Show: [text, meta, text, meta, text, title,] text]
var body = document.childNodes[1].childNodes[0].childNodes[0];      // Show: #text
var body = document.childNodes[1].childNodes[0].childNodes[1];      // Show: meta
var body = document.childNodes[1].childNodes[0].childNodes[2];      // Show: #text
var body = document.childNodes[1].childNodes[0].childNodes[3];      // Show: <meta>
var body = document.childNodes[1].childNodes[0].childNodes[4];      // Show: #text
var body = document.childNodes[1].childNodes[0].childNodes[5];      // Show: <title></title>
var body = document.childNodes[1].childNodes[0].childNodes[6];      // Show: #text
var body = document.childNodes[1].childNodes[0].childNodes[7];      // Show: Undedined


var body = document.childNodes[1].childNodes[1];                    // Show: #text
var body = document.childNodes[1].childNodes[1].childNodes;         // Show: NodeList []
var body = document.childNodes[1].childNodes[1].childNodes[0];      // Show: Undedined

var body = document.childNodes[1].childNodes[2].childNodes[0];      // Show: #text
var body = document.childNodes[1].childNodes[2].childNodes[1];      // Show: h1
var body = document.childNodes[1].childNodes[2].childNodes[2];      // Show: #text
var body = document.childNodes[1].childNodes[2].childNodes[3];      // Show: <p>value</p>
var body = document.childNodes[1].childNodes[2].childNodes[4];      // Show: #text
var body = document.childNodes[1].childNodes[2].childNodes[5];      // Show: <script></script>
var body = document.childNodes[1].childNodes[2].childNodes[6];      // Show: Undedined

var body = document.childNodes[2];                                  // Show: Undedined
console.log(body);


