// 1.Write a function that takes a string of a dog breed as an argument (like ‘border collie’)
function dogBreed(a) {
  if (a === undefined) {
    return "I like cats"
  } else {
  return `My favorite dog breed is ${a}`
  }
}
console.log(dogBreed());
console.log(dogBreed("rat-terrier"))

// 2.Have the function return “my favorite dog breed is” plus the passed in string. If no argument is passed to the function, return “I like cats”.


// 3.Execute the function in a way that captures the returned value in a variable.
let valueOfBreed = dogBreed("german shephard");
// 4.Console.log the string “When it comes to pets,” plus the returned value of the function.
console.log("When it comes to pets,", dogBreed());
console.log("When it comes to pets,", dogBreed("Boxers"));