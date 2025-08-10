const { Command } = require('commander');
const program = new Command();
const fs = require('fs');

program
  .name('string-util')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

program.command('split')
  .description('Split a string into substrings and display as an array')
  .argument('<string>', 'string to split')
  .option('--first', 'display just the first substring')
  .option('-s, --separator <char>', 'separator character', ',')
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  });

program.command('count-words')
  .description('Specify a file path and the nodejs process counts the number of words inside it.')
  .argument('<file-path>','file to count words')
  .action((file)=>{
    fs.readFile(file, 'utf8', (err,data)=>{
        if(err){
            console.log(err);
        } else{
            const count = data.split(' ').length; 
            console.log("You have "+count+" words in this file");
        }
    });
  });

program.parse();