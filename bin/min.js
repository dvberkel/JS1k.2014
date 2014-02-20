#! /usr/bin/env node

var fs = require('fs');
var minify = require('minify');

var target = 'JS1k.js';
fs.watch('index.js', function(event, filename){
    minify.optimize(filename, {
        callback: function(data){
            fs.writeFile(target, data, function(error){
                console.log(error || 'min: ' + 'file ' + target +' written (' + data.length + ')');
            });
        }
    })
});
