// Console log a welcome message with instructions to mad libs
console.log("Welcome to my Mad Lib")
console.log("All you have to do is enter a word whether it is a noun, adjective, verb when the program asks you to.")


// Prompt the user to enter parts of speech for mad libs
// You should be asking for at least 4 words
let adjective = prompt("Give me an adjective")
let pluralNoun = prompt("Give me a plural noun")
let verb = prompt("Give me a verb")
let adjective2 = prompt("Give me another adjective")

// Create an array that stores the values the user entered
let words = []
words.push(adjective, pluralNoun, verb, adjective2)
// Console log the story with the array values passed into the blanks
// Make sure you are referencing the values of the array (rather than the user inputs themselves)
// You can use any type of string manipulation that feels more intuitive
console.log(`In a small ${words[0]} school in the Bronx, there was a problem with too many ${words[1]}. ${words[1]} loved to ${words[2]}, which caused Mr. P so many headaches. However, no one wanted to remove them because they were too ${words[3]} so they stayed there forever.`)







