#! /usr/bin/env node
var pkg = require('./package.json');
var program = require('commander');

program
  .version(pkg.version)
  .usage('<source> [options]')

program
  .command('print')
  .description('print the specified source')
  .action(function(source) {
    var options = program.options.reduce((collection, item) => {
      if(item.long !== '--version') {
        var key = item.long.replace(/-/g, '');
        collection[key] = program[key]
      }
      return collection;
    }, {});

    console.log(options);
  });

program.parse(process.argv);
