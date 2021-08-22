// Function scope
let subject = 'create video' // esse subject desse escolpo tem um signinicado

function createThink(subject) {
    subject = 'study'
    return subject
} // e nesse escolpo, outro

console.log(createThink(subject))
console.log(subject)

/* Mas apartir do momento que eu tiro esse objeto, assim:
let subject = 'create video' 

function createThink() {
    subject = 'study'
    return subject
} 

console.log(createThink(subject))
console.log(subject)

 ele vai substituir e os dois vão ser study*/

 