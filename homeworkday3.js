// Pyramid problem:
// print:  (using a loop)
// #
// ##
// ###
// ####
// #####
// 
// Extra for experts: 
// Pyramid problem:
// print:  (using a loop)
// #
// ##
// ###
// ####
// #####
line = ""
let symbol = "#"
for (let i = 0; i < 5; i++){
  line += symbol
  console.log(line)
}


// Extra for experts: 
// 1. Write a function named assignGrade that takes one argument, a number score.
// Returns a grade for the score, either  "A," "B," "C," "D," or "F." Call 
// that function for a few different scores and log the result to make sure it works.

function assignGrade(score){
switch (true) {
    case score <= 50:
    console.log("F");
    break;
    case score >=50 && score <=60:
        console.log("f");
        break;
        case score >= 60 && score <= 70:
           console.log("d"); 
        break;
            case score >= 70 && score <= 80:
                console.log("B");
                case score >= 90 && score <= 100:
                    console.log("A");
                    break;
                    default:
                    Console.log("something is not right..");
}
}

console.log(assignGrade(55))

