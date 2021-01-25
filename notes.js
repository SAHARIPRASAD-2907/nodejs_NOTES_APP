const fs = require('fs')
const chalk=require('chalk')
const { title } = require('process')
//listing notes
const listNotes = ()=>{
    const notes=loadNotes()
    console.log(chalk.bgBlue("your notes are"))
    if(notes.length>0){
    notes.forEach(element => {
        console.log(chalk.bgMagenta(element.title));
    }); 
    }
    else{
        console.log("No notes found");
    }
}
//reading note
const readNotes =(title)=>{
    const notes = loadNotes()
    const readNote = notes.find((note) => note.title === title)
    if(readNote){
    console.log(chalk.bgBlueBright("The given note title is "+readNote.title));
    console.log(chalk.bgBlueBright("The given note body is "+readNote.body));
    }
    else{
        console.log(chalk.bgRed("Note not found"));
    }
}

//add notes function
const addNotes = (title,body)=>{
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note)=>note.title ===title)
    const duplicateNoteSingular = notes.find((note) => note.title === title)
    if(!duplicateNoteSingular){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen("New note added"));
    }else{
        console.log(chalk.bgRed("Note already taken"));
    }
   

}

//removing notes 
const removeNotes = (title)=>{
    const notes = loadNotes() 
    const removeNote = notes.filter(function(note){
        return note.title!==title
    })
    if(!(removeNote.length<notes.length)){
        console.log(chalk.bgRed("Note not found"));
    }
    else{
        saveNotes(removeNote)
        console.log(chalk.bgGreen("Note deleted sucessfully!"));
    }
        
    
}
//loading notes
const loadNotes = ()=>{
    try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    }
    catch (e){
        return []
    }
}
//saving notes
const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

module.exports = {
    listNotes:listNotes,
    addNotes:addNotes,
    removeNotes:removeNotes,
    readNotes:readNotes



}