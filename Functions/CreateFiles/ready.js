function ready(){
  var fs = require('fs');
var content = `TEST`;

try{
 fs.writeFileSync('events/ready.js', content);
}catch (e){
     console.log("Cannot write file ", e);
}
 
}
module.exports = ready;