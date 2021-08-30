function config(prefix, status){
  var fs = require('fs');
var content = `{
  "prefix": "${prefix}",
  "status": "${status}"
}`;

try{
 fs.writeFileSync('config.json', content);
}catch (e){
     console.log("Cannot write file ", e);
}
 
}
module.exports = config;