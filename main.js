#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgRed.yellow(`*****************************`));
console.log(chalk.bgRed.yellow(` Welcome to the project `));
console.log(chalk.bgRed.yellow(`*****************************`));
console.log();
class Student {
    name;
    constructor(Name) {
        this.name = Name;
    }
    ;
}
;
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
    ;
}
;
const persons = new Person();
async function programStart(persons) {
    let userName = await inquirer.prompt([
        {
            name: "UserName",
            type: "input",
            message: "Enter your name"
        }
    ]);
    let { UserName } = userName;
    let answer = await inquirer.prompt([
        {
            name: "options",
            type: "list",
            message: "Select the option ",
            choices: ["Admin", "Teacher",]
        }
    ]);
    let { options } = answer;
    if (options === "Admin") {
        console.log(chalk.bgBlue(`\n Tell you problem`));
        let adminQuestion = await inquirer.prompt([
            {
                name: "adminOptions",
                type: "list",
                message: "Select the option",
                choices: ["Change slot", "Apply for senoirStudent"]
            }
        ]);
        let { adminOptions } = adminQuestion;
        if (adminOptions === "Change slot") {
            console.log(chalk.bgMagentaBright(`Your application is submit`));
        }
        else if (adminOptions === "Apply for senoirStudent") {
            let senoirStudentDetails = await inquirer.prompt([
                {
                    name: "user_name",
                    type: "input",
                    message: "Enter your name:"
                },
                {
                    name: "studentRollNumber",
                    type: "number",
                    message: "Enter your roll number"
                }
            ]);
            let { user_name, studentRollNumber } = senoirStudentDetails;
            console.log(chalk.bgGreenBright.whiteBright(`You application is apply`));
            console.log(chalk.bgMagentaBright(`Name:${user_name}  , Roll number ${studentRollNumber}`));
        }
    }
    else if (options === "Teacher") {
        console.log(chalk.bgBlue(`How may i help you`));
        let teacherQuestion = await inquirer.prompt([
            {
                name: "teacher_questions",
                type: "list",
                message: "Select the option",
                choices: ["Revise the topic", "Learn new topic"],
            }
        ]);
        let { teacher_questions } = teacherQuestion;
        if (teacher_questions === "Revise the topic") {
            let reviseTopic = await inquirer.prompt([
                {
                    name: "topics",
                    type: "list",
                    message: "Select the topic:",
                    choices: ["function", "object", "array"]
                }
            ]);
            let { topics } = reviseTopic;
            if (topics === "function") {
                console.log(chalk.bgWhite.black(`Functions are the fundamental building block of any application in JavaScript. They're how you build up layers of abstraction, mimicking classes, information hiding, and modules. In TypeScript, while there are classes, namespaces, and modules, functions still play the key role in describing how to do thing
                    
                    \n // Named function
function add(x, y) {
  return x + y;
}
 
// Anonymous function
let myAdd = function (x, y) {
  return x + y;
};\n`));
            }
            else if (topics === "object") {
                console.log(chalk.bgWhite.black(`An object in TypeScript is an instance that contains a set of key-value pairs. These pairs can hold various data types, including scalar values, functions, or even arrays of other objects
                    
                    \n const person = {
    firstName: "Rahul",
    lastName: "Kushwaha",
    age: 30,}`));
            }
            else if (topics === "array") {
                console.log(chalk.bgWhite.black(`Arrays can contain elements of any data type, numbers, strings, or even objects.Arrays can be declared and initialized separately.
                    \n let fruits: Array<string>;
fruits = ['Apple', 'Orange', 'Banana']; 

let ids: Array<number>;
ids = [23, 34, 100, 124, 44]; `));
            }
        }
        else if (teacher_questions === "Learn new topic") {
            let newTopic = await inquirer.prompt([
                {
                    name: "new_topics",
                    type: "list",
                    message: "Select the options",
                    choices: ["if-else statement", "switch case"]
                }
            ]);
            let { new_topics } = newTopic;
            if (new_topics === "if-else statement") {
                console.log(chalk.bgWhite.black(`An if statement can include one or more expressions which return boolean. If the boolean expression evaluates to true, a set of statements is then executed. 
                    Example: if. 
                    if (true) { console.log('This will always executed.' ); } if (false) { console.log('This will never executed.'`));
            }
            else if (new_topics === "switch case") {
                console.log(chalk.bgWhite.black(`A switch statement checks the value passed to it and executes the block of code corresponding to that value
                   
   let x = 10, y = 5;

switch (x-y) {
    case 0:
        console.log("Result: 0");
        break;
    case 5:
        console.log("Result: 5");
        break;
    case 10:
        console.log("Result: 10");
        break;
}`));
            }
        }
    }
}
;
programStart(persons);
