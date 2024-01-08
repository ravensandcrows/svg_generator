const fs = require('fs');
const inquirer = require('inquirer');


const questions = require('./questions');
// FIX THIS
// const (Circle, Polygon, Square) = require('./main/lib/shapes')




class CLI {
    run() {
        inquirer.prompt(questions)
            .then(answers => {
                console.log('Creating your logo...');
                switch(`${answers.shape}`){
                    case 'square':
                        console.log('Square is being created');
                        break
                    case 'circle':
                        console.log('circle is being created');
                        break
                    case 'triangle':
                        console.log('triangle being created');
                        break
                    case 'rectangle':
                        console.log('rectangle being created');
                        break
                    case 'diamond':
                        console.log('diamond is being created');
                        break
                }
            });
    }
}

// const fs = require('fs');
// const path = require('path');


// Array for questionnaire
// const questions = [
//     {
//         type: 'input',
//         name: 'logo_letters',
//         message: 'Choose up to three letters for your logo:',
//     },
//     {
//         type: 'input',
//         name: 'text_color',
//         message: 'What color would you like to use for the letters?',
//     },
//     {
//         type: 'list',
//         name: 'shape',
//         message: 'What shape would you like to use?',
//         choices: ['square', 'triangle', 'circle', 'rectangle', 'diamond'],
//     },
//     {
//         type: 'input',
//         name: 'shape_color',
//         message: 'What color should the shape be?',
//     },
// ];


// initializes app
// function init() {
//     inquirer
//         .prompt(questions)
//         .then((answers)=>{
//             // catches errors
//             try{
//                 console.log('Creating ReadMe...');
//                 // writeToFile('dist/README.md', generateMarkdown({...answers}));
//                 console.log("Success! Find your file in the Dist directory");
//             }
//             catch(error){
//                 console.log(error.message);
//             } 
//         });
// }

// init();

module.exports = CLI;
