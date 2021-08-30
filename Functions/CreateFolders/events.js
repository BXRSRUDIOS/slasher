function events(){
const fs = require('fs');

fs.mkdir("./events", (err) => {
    if (err) {
        throw err;
    }

});
}
module.exports = events;