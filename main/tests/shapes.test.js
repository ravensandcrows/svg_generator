const {Shapes, Circle, Triangle, Diamond, Square, Rectangle} = require('../lib/shapes');

describe('Circle', ()=>{
    test('should create a circle class using keywords', ()=>{         
        const circle = new Circle('CAT', 'keyword', 'red', '', 'circle', 'keyword', 'green','', '70');
        expect(circle.logo_name).toBe('CAT');
        expect(circle.color_keyword).toBe('red');
        expect(circle.shape_color_keyword).toBe('green');
        expect(circle.radius).toBe('70');
    });
    test('should create a circle class using hexadecimals', ()=>{         
        const circle = new Circle('CAT', 'hexadecimal', '', 'ffffff', 'circle', 'hexadecimal', '', '000000', '70');
        expect(circle.logo_name).toBe('CAT');
        expect(circle.hexa_code).toBe('ffffff');
        expect(circle.shape_hexa_code).toBe('000000');
        expect(circle.radius).toBe('70');
    });
    test('should create a circle class using hexadecimals/keywords', ()=>{         
        const circle = new Circle('CAT', 'hexadecimal', '', 'ffffff', 'circle', 'keyword', '', 'green', '80');
        expect(circle.logo_name).toBe('CAT');
        expect(circle.hexa_code).toBe('ffffff');
        expect(circle.shape_hexa_code).toBe('green');
        expect(circle.radius).toBe('80');
    });
    test('should render a circle with the provided attributes', ()=>{
        const circle = new Circle('CAT', 'keyword', 'red', '', 'circle', 'keyword', 'green','', '70');
        expect(circle.renderCircle()).toBe(`<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle r="70" cx="148" cy="95" fill="green"/>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700"
            fill="red">CAT</text>
            </svg>`)
    });
});

describe('Triangle', ()=>{
    test('should create a triangle class using keywords', ()=>{         
        const triangle = new Triangle('CAT', 'keyword', 'red', '', 'triangle', 'keyword', 'green','');
        expect(triangle.logo_name).toBe('CAT');
        expect(triangle.color_keyword).toBe('red');
        expect(triangle.shape_color_keyword).toBe('green');
    });
    test('should create a triangle class using hexadecimals', ()=>{         
        const triangle = new Triangle('CAT', 'hexadecimals', '', 'ffffff', 'triangle', 'hexadecimals', '','000000');
        expect(triangle.logo_name).toBe('CAT');
        expect(triangle.hexa_code).toBe('ffffff');
        expect(triangle.shape_hexa_code).toBe('000000');
    });
    test('should create a triangle class using hexadecimals/keywords', ()=>{         
        const triangle = new Triangle('CAT', 'hexadecimal', '', 'ffffff', 'circle', 'keyword', '', 'green');
        expect(triangle.logo_name).toBe('CAT');
        expect(triangle.hexa_code).toBe('ffffff');
        expect(triangle.shape_hexa_code).toBe('green');
    });
    test('should render a triangle with the provided attributes', ()=>{
        const triangle = new Triangle('CAT', 'keyword', 'red', '', 'triangle', 'keyword', 'green','');
        expect(triangle.renderTriangle()).toBe(`<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,10 280,190 20,190" fill="green"/>
            <text x="50%" y="70%" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700"
            fill="red">CAT</text>
            </svg>`)
    });
});

describe('Square', ()=>{
    test('should create a square class using keywords', ()=>{   
               
        const square = new Square('CAT', 'keyword', 'red', '', 'sqaure', 'keyword', 'green','', '150');
        expect(square.logo_name).toBe('CAT');
        expect(square.color_keyword).toBe('red');
        expect(square.shape_color_keyword).toBe('green');
        expect(square.width).toBe('150')
    });
    test('should create a square class using hexadecimals', ()=>{         
        const square = new Square('CAT', 'hexadecimals', '', 'ffffff', 'triangle', 'hexadecimals', '','000000', '150');
        expect(square.logo_name).toBe('CAT');
        expect(square.hexa_code).toBe('ffffff');
        expect(square.shape_hexa_code).toBe('000000');
        expect(square.width).toBe('150')
    });
    test('should create a square class using hexadecimals/keywords', ()=>{         
        const square = new Square('CAT', 'hexadecimal', '', 'ffffff', 'circle', 'keyword', '', 'green', '150');
        expect(square.logo_name).toBe('CAT');
        expect(square.hexa_code).toBe('ffffff');
        expect(square.shape_hexa_code).toBe('green');
        expect(square.width).toBe('150');
    });
    test('should render a square with the provided attributes', ()=>{
        const square = new Square('CAT', 'keyword', 'red', '', 'square', 'keyword', 'green','', '150');
        expect(square.renderSquare()).toBe(`<svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="150" height="150" fill="green"/>
                <text x="75" y="75" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700"
                fill="red">CAT</text>
                </svg>`)
    });
});

describe('Rectangle', ()=>{
    test('should create a rectangle class using keywords', ()=>{   
               
        const rectangle = new Rectangle('CAT', 'keyword', 'red', '', 'rectangle', 'keyword', 'green','', '150', '80');
        expect(rectangle.logo_name).toBe('CAT');
        expect(rectangle.color_keyword).toBe('red');
        expect(rectangle.shape_color_keyword).toBe('green');
        expect(rectangle.rec_width).toBe('150');
        expect(rectangle.height).toBe('80');
    });
    test('should create a rectangle class using hexadecimals', ()=>{         
        const rectangle = new Rectangle('CAT', 'hexadecimals', '', 'ffffff', 'triangle', 'hexadecimals', '','000000', '150', '80');
        expect(rectangle.logo_name).toBe('CAT');
        expect(rectangle.hexa_code).toBe('ffffff');
        expect(rectangle.shape_hexa_code).toBe('000000');
        expect(rectangle.rec_width).toBe('150');
        expect(rectangle.height).toBe('80');
    });
    test('should create a rectangle class using hexadecimals/keywords', ()=>{         
        const rectangle = new Rectangle('CAT', 'hexadecimal', '', 'ffffff', 'circle', 'keyword', '', 'green', '150', '80');
        expect(rectangle.logo_name).toBe('CAT');
        expect(rectangle.hexa_code).toBe('ffffff');
        expect(rectangle.shape_hexa_code).toBe('green');
        expect(rectangle.rec_width).toBe('150');
        expect(rectangle.height).toBe('80');
    });
    test('should render a rectangle with the provided attributes', ()=>{
        const rectangle = new Rectangle('CAT', 'keyword', 'red', '', 'square', 'keyword', 'green','', '150', '80');
        expect(rectangle.renderRectangle()).toBe(`<svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="150" height="80" fill="green"/>
                <text x="75" y="40" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700"
                fill="red">CAT</text>
                </svg>`)
    });
});

describe('Diamond', ()=>{
    test('should create a diamond class using keywords', ()=>{             
        const diamond = new Diamond('CAT', 'keyword', 'red', '', 'rectangle', 'keyword', 'green','');
        expect(diamond.logo_name).toBe('CAT');
        expect(diamond.color_keyword).toBe('red');
        expect(diamond.shape_color_keyword).toBe('green');
    });
    test('should create a diamond class using hexadecimals', ()=>{         
        const diamond = new Diamond('CAT', 'hexadecimals', '', 'ffffff', 'triangle', 'hexadecimals', '','000000');
        expect(diamond.logo_name).toBe('CAT');
        expect(diamond.hexa_code).toBe('ffffff');
        expect(diamond.shape_hexa_code).toBe('000000');
    });
    test('should create a diamond class using hexadecimals/keywords', ()=>{         
        const diamond = new Diamond('CAT', 'hexadecimal', '', 'ffffff', 'circle', 'keyword', '', 'green');
        expect(diamond.logo_name).toBe('CAT');
        expect(diamond.hexa_code).toBe('ffffff');
        expect(diamond.shape_hexa_code).toBe('green');
    });
    test('should render a diamond with the provided attributes', ()=>{
        const diamond = new Diamond('CAT', 'keyword', 'red', '', 'square', 'keyword', 'green','');
        expect(diamond.renderDiamond()).toBe(`<svg version="1.1"
            width="500" height="500"
            xmlns="http://www.w3.org/2000/svg">
            <polygon fill="green" points="9.445,125 125,5.774 240.556,125 125,280.227"/>
            <text x="130" y="130" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700"
            fill="red">CAT</text>
            </svg>`)
    });
});


