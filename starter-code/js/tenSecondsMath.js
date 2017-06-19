//Use this file to write the logic of your game, the needed attrs and functions

// Game constructor
var TenSecondsMathGame = function(options) {
 this.operations = options.operations;
 this.limit = options.limit;
};

// Returns a random integer between [1..numberLimit]
function randomInteger(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Get random operation
TenSecondsMathGame.prototype.getRandomOperation = function() {
 var index = randomInteger(0, this.operations.length - 1);
 console.log(index);
 return this.operations[index];
};

// Generate the Math question
TenSecondsMathGame.prototype.generateQuestion = function (a, b, operation) {
 var question;
 switch (operation) {
   case 'addition':
   case '+':
     question = a + " + " + b + " ?";
   break;
   case 'substraction':
   case '-':
     question = a + " - " + b + " ?";
   break;
   case 'multiplication':
   case '*':
     question = a + " * " + b + " ?";
   break;
   case 'division':
   case '/':
     question = a + " / " + b + " ?";
   break;
   default:
     console.log('Invalid operation');
     question = -1;
 }
 return question;
};

// Generate the solution
TenSecondsMathGame.prototype.generateSolution = function (a, b, operation) {
 var answer;
 switch (operation) {
   case 'addition':
   case '+':
     answer = a + b;
   break;
   case 'substraction':
   case '-':
     answer = a - b;
   break;
   case 'multiplication':
   case '*':
     answer = a * b;
   break;
   case 'division':
   case '/':
     answer = a / b;
   break;
   default:
     console.log('Invalid operation');
     answer = -1;
 }
 return answer;
};

// Get a second number that fullfils the requirements
TenSecondsMathGame.prototype.getSecondNumber = function (firstNumber, operation) {
 var secondNumber;
 switch (operation) {
   case 'addition':
   case '+':
   case 'multiplication':
   case '*':
     secondNumber = randomInteger(0, this.limit);
     while (secondNumber <= firstNumber + 3 && secondNumber >= firstNumber - 3) {
       secondNumber = randomInteger(0, this.limit);
     }
   break;
   case 'substraction':
   case '-':
     secondNumber = randomInteger(0, firstNumber);
     while (secondNumber >= firstNumber - 3) {
       secondNumber = randomInteger(0, firstNumber);
     }
   break;
   case 'division':
   case '/':
     secondNumber = randomInteger(1, this.limit);
   break;
   default:
     console.log('Invalid operation');
     secondNumber = -1;
 }
 return secondNumber;
};

// function getNumberInBetween(firstNumber, limit) {
//   var floor;
//   var ceiling;
//   var numberInBetween;
//
//   floor = firstNumber - 3;
//   if (floor < 0) {
//     floor = 0;
//   }
//
//   ceiling = firstNumber + 3;
//   if (ceiling > limit) {
//     ceiling = limit;
//   }
//
//   numberInBetween = randomInteger(floor, ceiling);
//   return numberInBetween;
// }

// Returns an object with {question, answer}
TenSecondsMathGame.prototype.newQuestion = function() {
 var operation = this.getRandomOperation();
 var a = randomInteger(4, this.limit);
 var b = this.getSecondNumber(a, operation);
 var question = this.generateQuestion(a, b, operation);
 var solution = this.generateSolution(a, b, operation);

 console.log(question);
 return solution;
};

// Checks a user answer
TenSecondsMathGame.prototype.isCorrectAnswer = function(answer) {
  if (answer === solution) {
    console.log("Great!");
    console.log("Great!");
    return true;
  } else {
    console.log("Wrooong!");
    return false;
  }
};

var game = new TenSecondsMathGame({
 operations: ["addition", "substraction", "multiplication", "division"],
 limit: 10
});

var solution = game.newQuestion();
