function eventsFile(){
  var fs = require('fs');
var content = `const { readdirSync } = require("fs");
const ascii = require("ascii-table");

//THIS ONE FROM V12

let table = new ascii("Events");
table.setHeading("Events", "Load status");

module.exports = (client) => {

  const commands = readdirSync(__dirname.replace("\handlers", "\events")).filter(file => file.endsWith(".js"));

  for (let file of commands) {

    try {
    let pull = require(\`\${__dirname.replace("\handlers", "\events")}/\${file}\`);

    if (pull.event && typeof pull.event !== "string") {
      continue;
    }

    pull.event = pull.event || file.replace(".js", "")

    client.on(pull.event, pull.run.bind(null, client))


    } catch(err) {

  console.log("Error While loading")
  console.log(err);
    }
  }

 
}
`;

try{
 fs.writeFileSync('handlers/events.js', content);
}catch (e){
     console.log("Cannot write file ", e);
}
 
}
module.exports = eventsFile;