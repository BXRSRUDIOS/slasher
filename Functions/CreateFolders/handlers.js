function handlers(){
const fs = require('fs');

fs.mkdir("./handlers", (err) => {
    if (err) {
        throw err;
    }

});
}
module.exports = handlers;