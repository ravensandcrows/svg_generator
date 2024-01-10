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
            const word = value.replace(/\s/g, "");
            if (color_keyword_list.includes(word)){
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
        message: 'Enter your hexadecimal code: #',
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
    //radius
    {
        type: 'input',
        name: 'radius',
        when:  (answers) => answers.shape === 'circle',
        message: 'How large should your radius be? Must be at least 70',
        validate: function (value) {
            num = parseInt(value)
            if (num >= 70){
                return true;
            }
            else{
                return 'Please enter a number greater or equal to 70.';
            }
        } 
    },
    //square size
    {
        type: 'input',
        name: 'width',
        when:  (answers) => answers.shape === 'square',
        message: 'How large should the width/height of your square be?',
        validate: function (value) {
            num = parseInt(value)
            if (num >= 150){
                return true;
            }
            else{
                return 'Please enter a number greater or equal to 150.';
            }
        }
    },
    //rectangle width
    {
        type: 'input',
        name: 'rec_width',
        when:  (answers) => answers.shape === 'rectangle',
        message: 'How large should the width of your rectangle be? At least 150',
        validate: function (value) {
            num = parseInt(value)
            if (num >= 150){
                return true;
            }
            else{
                return 'Please enter a number greater or equal to 150.';
            }
        }
    },
    //rectangle height
    {
        type: 'input',
        name: 'height',
        when:  (answers) => answers.shape === 'rectangle',
        message: 'How large should the height of your rectangle be? (At least 70)',
        validate: function (value, answers) {
            const num = parseInt(value)
            const width = parseInt(answers.rec_width)
            if (num >= 70){
                if(width === num){
                    return 'Your width and length are the same! Please change this input'; 
                }
                else{
                    return true;
                }
            }
            else{
                return 'Please enter a number greater or equal to 70.';
            }
        }
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
            const word = value.replace(/\s/g, "");
            if (color_keyword_list.includes(word)){
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
        message: 'Enter your hexadecimal code: #',
        validate: function (value) {
            if (value.length === 6) {
                return true;
            }
            return 'Please enter a hexadecimal color code with 6 digits.';
        }
    },
];

module.exports = questions;