const inquirer = require('inquirer');
const color_keyword_list = require('./color');


const questions = [
    // logo name
    {
        type: 'input',
        name: 'logo_name',
        message: 'Enter your logo name (maximum of 3 characters):',
        validate: function (value) {
            if (value.length <= 3) {
                return true;
            }
            return 'Please enter a response with maximum 3 characters.';
        }
    },
    // ask if they want to use a color keyword or hexadecimal
    {
        type: 'list',
        name: 'color_code',
        message: 'Would you like to use a color codes (hexadecimal number) or color keywords?',
        choices: ['hexadecimal', 'keyword']
    },
    // color key word
    {
        type: 'input',
        name: 'color_keyword',
        when: function (answers) {
            return answers.color_code === 'keyword';
        },
        message: 'Enter your color keyword:',
        validate: function (value) {
            if (color_keyword_list.includes(value)){
                return true;
            }
            else{
                return 'Please enter a keyword value.';

            }
        }

    },
    // hexa color
    {
        type: 'input',
        name: 'hexa_code',
        when: function (answers) {
            return answers.color_code === 'hexadecimal';
        },
        message: 'Enter your hexadecimal code:',
        validate: function (value) {
            if (value.length === 6) {
                return true;
            }
            return 'Please enter a hexadecimal color code with 6 digits.';
        }
    },
    //shape
    {
        type: 'list',
        name: 'shape',
        message: 'Please choose your logo shape',
        choices: ['square', 'circle', 'triangle', 'rectangle', 'diamond']
    },
    // shape: ask if they want to use a color keyword or hexadecimal
    {
        type: 'list',
        name: 'shape_color_code',
        message: 'Would you like to use a color codes (hexadecimal number) or color keywords?',
        choices: ['hexadecimal', 'keyword']
    },
    // shape: color key word
    {
        type: 'input',
        name: 'shape_color_keyword',
        when: function (answers) {
            return answers.shape_color_code === 'keyword';
        },
        message: 'Enter your color keyword:',
        validate: function (value) {
            if (color_keyword_list.includes(value)){
                return true;
            }
            else{
                return 'Please enter a keyword value.';
            }
        }

    },
    // hexa color
    {
        type: 'input',
        name: 'shape_hexa_code',
        when: function (answers) {
            return answers.shape_color_code === 'hexadecimal';
        },
        message: 'Enter your hexadecimal code:',
        validate: function (value) {
            if (value.length === 6) {
                return true;
            }
            return 'Please enter a hexadecimal color code with 6 digits.';
        }
    },
];

class CLI {
    run() {
        inquirer.prompt(questions)
            .then(answers => {
                console.log('Your response:', answers);
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
