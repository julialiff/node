// var obj = {
  // name: 'Julia'
// };

// var stringObject = JSON.stringify(obj);
// console.log(typeof stringObject)
// console.log(stringObject)

// var personString = '{"name": "Julia", "age": 20}';
// var person = JSON.parse(personString)
// console.log(person.name)
// console.log(person.age)

const fs = require('fs')

var originalNote = {
  title: 'Title',
  body: 'Body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString)
console.log(typeof note)
console.log(note.title)
console.log(note.body)
