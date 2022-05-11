
function piratize(input){
    // split the string into individual arrays function Piratize that takes an imput
    const words = input.split(' ');     // creates a variable (constant that takes "words", whihc equals our input broken up by a space

    let translatewords = []  // creates a variable called translatewords, whihc is an array 


    for ( let element of words) {     //take each individual word and assign it a new variable called element to generate a loop 
        console.log(element);
        if (element === "pounds"){  
            translatewords.push('doubloons'); // loops through the elements and if an element is "pounds" it pushes "dubloons" into the translate word array
        }
        
        else if (Number(element)) {    // if the element is a number, pushes the element uncanged into the translatewords array
            translatewords.push(element);
        } else {
            let modifiedWord = '';  // creates a variable "modifiedword" and variable "new string" which equals the element minus the first letter
            var newStr = element.substring(1);
            modifiedWord = newStr + element[0] + "arr" // modified words is the "new string" plus the first letter of the word + "arr"
            translatewords.push(modifiedWord); // pushes the modified word into the "translatewords array"
        }

    }
    let toReturn = '';   // creates a new sting called to "toReturn"
    toReturn = translatewords.join(' '); // set toRetun to be "trnaslatedWords" individual array elements into a string
    return toReturn; //Prints toReturn string


}
console.log(piratize("hello world pizza costs 20 pounds and i am stranded with a sum of 4000 pounds worth of gold send help"))