function ready(){
  var fs = require('fs');
var content = `module.exports.run = async (client) => {

console.log(\`Bot is ready\`)
client.user.setActivity(client.config.status);

}`;

try{
 fs.writeFileSync('events/ready.js', content);
}catch (e){
     console.log("Cannot write file ", e);
}
 
}
module.exports = ready;