const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square, Rectangle, Diamond } = require('./shapes');
const questions = require('./questions');


class CLI {
    run() {
        inquirer.prompt(questions)
            .then(answers => {
                console.log('Creating your logo...');
                switch (`${answers.shape}`) {
                    case 'square':
                        console.log('Square is being created');
                        const square = new Square(answers.logo_name, answers.color_code, answers.color_keyword, answers.hexa_code, answers.shape,
                            answers.shape_color_code, answers.shape_color_keyword, answers.shape_hexa_code, answers.width)
                        fs.writeFile("main/output/logo.svg", square.renderSquare(), (err) => {
                            if (err) {
                                console.error(err);
                            }
                            else {
                                console.log('Congrats! Square now created')
                            }
                        });
                        break;
                    case 'triangle':
                        console.log('Triangle is being created...')
                        const triangle = new Triangle(answers.logo_name, answers.color_code, answers.color_keyword, answers.hexa_code, answers.shape,
                            answers.shape_color_code, answers.shape_color_keyword, answers.shape_hexa_code);
                        fs.writeFile('main/output/logo.svg', triangle.renderTriangle(), (err) => {
                            if (err) {
                                console.error(err);
                            }
                            else {
                                console.log('created triangle')
                            }
                        });
                        break;
                    case 'rectangle':
                        console.log('Rectangle is being created');
                        const rectangle = new Rectangle(answers.logo_name, answers.color_code, answers.color_keyword, answers.hexa_code, answers.shape,
                            answers.shape_color_code, answers.shape_color_keyword, answers.shape_hexa_code, answers.rec_width, answers.height)
                        fs.writeFile("main/output/logo.svg", rectangle.renderRectangle(), (err) => {
                            if (err) {
                                console.error(err);
                            }
                            else {
                                console.log('Congrats! Rectangle now created')
                            }
                        });
                        break;
                    case 'diamond':
                        console.log('Diamond is being created');
                        const diamond = new Diamond(answers.logo_name, answers.color_code, answers.color_keyword, answers.hexa_code, answers.shape,
                            answers.shape_color_code, answers.shape_color_keyword, answers.shape_hexa_code)
                        fs.writeFile("main/output/logo.svg", diamond.renderDiamond(), (err) => {
                            if (err) {
                                console.error(err);
                            }
                            else {
                                console.log('Congrats! Diamond now created')
                            }
                        });
                        break;
                    case 'circle':
                        console.log('Circle is being created...');
                        const circle = new Circle(answers.logo_name, answers.color_code, answers.color_keyword, answers.hexa_code, answers.shape,
                            answers.shape_color_code, answers.shape_color_keyword, answers.shape_hexa_code, answers.radius)
                        fs.writeFile('main/output/logo.svg', circle.renderCircle(), (err) => {
                            if (err) {
                                console.error(err);
                            }
                            else {
                                console.log('congrats circle created')
                            }
                        });
                        break;
                }
            });
    }
}

module.exports = CLI;