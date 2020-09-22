const express = require('express');
const path = require('path');

const pathTo = {
  static: path.join(__dirname, 'dist'),
};
const port = 4200;
const web = express();
console.log(pathTo);
web.get('*', function(req, res) {
    if(req.path.includes('.')) {
        res.sendFile(`${pathTo.static}/${req.path}`);
        return;
    };
    res.sendFile(`${pathTo.static}/`);
 });
web.listen(port, 
    () => console.log(`start at port localhost:${port}`)
);