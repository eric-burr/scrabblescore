//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (theInput) => {
 
let theWord = theInput.toUpperCase();
console.log(theWord)
let i = 0
let answer = 0
while(i<theWord.length) {
  //  i++;
switch (theWord[i]) {
  case "A":    
  case "E":
  case "I": 
  case "O":
  case "U":
  case "L":
  case "N":
  case "R": 
  case "S":
  case "T":         
    answer += 1;
    break;
  case "D":
  case "G":
    answer += 2;
    break;
  case "B":
  case "C":
  case "M":
  case "P":
    answer += 3;
    break;
  case "F":
  case "H":
  case "V":
  case "W":
  case "Y":
    answer += 4;
    break;
  case "K":
    answer += 5;
    break;
  case "J":
  case "X":
    answer += 8;
    break;
  case "Q":
  case "Z":
    answer += 10;
    break;
  
}
console.log(theWord[i] + " " + answer);
i++;
}


console.log(answer)

return answer

};


  // throw new Error("Remove this statement and implement this function");

