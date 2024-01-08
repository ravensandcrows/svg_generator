const color_keyword_list = require('./color');
//SQUARE: make sure number is entered for width
//SQUARE make sure width is at least 150
//COLOR CODE remove any spaces in the string
//prevent height/width being the same for a rectangle
//radius number only!

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
    {
        type: 'input',
        name: 'radius',
        when:  (answers) => answers.shape === 'circle',
        message: 'How large should your radius be?' 
    },
    {
        type: 'input',
        name: 'width',
        when:  (answers) => answers.shape === 'square',
        message: 'How large should the width/height of your square be?',
    },
    {
        type: 'input',
        name: 'height',
        when:  (answers) => answers.shape === 'rectangle',
        message: 'How large should the height of your square/rectangle be?',
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

module.exports = questions;