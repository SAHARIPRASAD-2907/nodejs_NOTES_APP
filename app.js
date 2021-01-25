const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')
const { argv } = require('process')

//customize yargs version
yargs.version('1.1.0')

//create add method
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:"note title",
            demandOption:true,
            type:'string'
        },
        body:{
            describe:"note description",
            demandOption:true,
            type:'string'
        }

    },
    handler(argv){notes.addNotes(argv.title,argv.body)}
    
})

//create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
        describe:"note title to remove",
        demandOption:true,
        type:'string'
        }
    },
    handler(argv){notes.removeNotes(argv.title)}
    
})

//creating a read command
yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
        describe:"note title to read and display body",
        demandOption:true,
        type:'string'
        }
    },
    handler(argv){notes.readNotes(argv.title)}
})
//creating a list command
yargs.command({
    command:'list',
    describe:'listing all notes',
    handler(){notes.listNotes()}
    
})
//add, remove, read , list
yargs.parse()

















// const add = require('./utils.js')
// console.log(add(10,20));






















// const fs = require('fs')//calling filesystem

// //writing into a file
// fs.writeFileSync('notes.txt','This file was created by nodejs')

// //appending text to a file 
// fs.appendFileSync('notes.txt',' \nThis is my second line in this file')