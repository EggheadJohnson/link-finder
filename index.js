"use strict";
const fs = require('fs'),
      readline = require('readline'),
      stream = require('stream');

function returnsArray(filename, cb){
    let instream = fs.createReadStream(filename),
        outstream = new stream,
        rl = readline.createInterface(instream, outstream),
        list = [];
        rl.on('line', (line) => {
            if (line.toLowerCase().indexOf('href') > -1) {
                line = line.slice(line.toLowerCase().indexOf('href')).split('=')[1].trim();
                line = line.split(line[0])[1];
                list.push(line);

            }
            if (line.toLowerCase().indexOf('src') > -1) {
                line = line.slice(line.toLowerCase().indexOf('src')).split('=')[1].trim();
                line = line.split(line[0])[1];
                list.push(line);

            }

        })
        rl.on('close', () => {
            cb(null, list);
        })
}

module.exports = {
    returnsArray: returnsArray
}
