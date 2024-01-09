class Shapes {
    logo_name;
    color_code;
    color_keyword;
    hexa_code;
    shape;
    shape_color_code;
    shape_color_keyword;
    shape_hexa_code;
    radius;
    rec_width;
    constructor(logo_name, color_code, color_keyword, hexa_code, shape, shape_color_code, shape_color_keyword, shape_hexa_code, radius, rec_width){
        color_keyword = color_keyword.replace(/\s/g, "");
        shape_color_keyword = shape_color_keyword.replace(/\s/g, "");
        this.logo_name = logo_name;
        this.color_code = color_code;
        this.color_keyword = color_keyword
        this.hexa_code = hexa_code;
        this.shape = shape;
        this.shape_color_code = shape_color_code
        this.shape_color_keyword = shape_color_keyword;
        this.shape_hexa_code = shape_hexa_code;
        this.radius = radius;
        this.rec_width =rec_width;
    }

    setLogoTriangle(){
        if(this.color_code === 'keyword'){
            return `<text x="50%" y="70%" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700"
            fill="${this.color_keyword}">${this.logo_name}</text>`;
        }
        else{
            return `<text x="50%" y="70%" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700"
            fill="#${this.hexa_code}">${this.logo_name}</text>`;
        }  
    }
    setLogoDiamond(){
        if(this.color_code === 'keyword'){
            return `<text x="130" y="130" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700"
            fill="${this.color_keyword}">${this.logo_name}</text>`;
        }
        else{
            return `<text x="130" y="130" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700"
            fill="#${this.hexa_code}">${this.logo_name}</text>`;
        }  
    }

    setLogoCircle(){
        if(this.color_code === 'keyword'){
            return `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700"
            fill="${this.color_keyword}">${this.logo_name}</text>`;
        } 
        else{
            return `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700"
            fill="#${this.hexa_code}">${this.logo_name}</text>`;
        }  
    }
}

class Circle extends Shapes {
    radius;

    constructor(logo_name, color_code, color_keyword, hexa_code, shape, shape_color_code, shape_color_keyword, shape_hexa_code, radius){
        super(logo_name, color_code, color_keyword, hexa_code, shape, shape_color_code, shape_color_keyword, shape_hexa_code);
        this.radius=radius;
    }

    renderCircle(){
        if(this.shape_color_code === 'keyword'){
            return `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle r="${this.radius}" cx="148" cy="95" fill="${this.shape_color_keyword}"/>
            ${super.setLogoCircle()}
            </svg>`
        }
        else{
            return `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle r="${this.radius}" cx="148" cy="95" fill="#${this.shape_hexa_code}"/>
            ${super.setLogoCircle()}
            </svg>`
        }

        
    }
}
class Triangle extends Shapes {
    constructor(logo_name, color_code, color_keyword, hexa_code, shape, shape_color_code, shape_color_keyword, shape_hexa_code){
        super(logo_name, color_code, color_keyword, hexa_code, shape, shape_color_code, shape_color_keyword, shape_hexa_code);
    }

    renderTriangle(){
        if(this.shape_color_code === 'keyword'){
            return `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,10 280,190 20,190" fill="${this.shape_color_keyword}"/>
            ${super.setLogoTriangle()}
            </svg>`
        }
        else{
            return `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,10 280,190 20,190" fill="#${this.shape_hexa_code}"/>
            ${super.setLogo()}
            </svg>`
        }

    }
}

class Square extends Shapes {
    width;

    constructor(logo_name, color_code, color_keyword, hexa_code, shape, shape_color_code, shape_color_keyword, shape_hexa_code, width){
        super(logo_name, color_code, color_keyword, hexa_code, shape, shape_color_code, shape_color_keyword, shape_hexa_code);
        this.width=width;
    }

    renderSquare(){
        const xText = `${this.width}`/2;
        const yText = `${this.width}`/2;

        if(this.shape_color_code === 'keyword'){
            if(this.color_code === 'keyword'){
                return `<svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="${this.width}" height="${this.width}" fill="${this.shape_color_keyword}"/>
                <text x="${xText}" y="${yText}" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700"
                fill="${this.color_keyword}">${this.logo_name}</text>
                </svg>`
            }
            else{
                return `<svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="${this.width}" height="${this.width}" fill="${this.shape_color_keyword}"/>
                <text x="${xText}" y="${yText}" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700"
                fill="#${this.hexa_code}">${this.logo_name}</text>
                </svg>`
            }            
        }
        else{
            if(this.color_code === 'keyword'){
                return `<svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="${this.width}" height="${this.width}" fill="#${this.shape_hexa_code}"/>
                <text x="${xText}" y="${yText}" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700"
                fill="${this.color_keyword}">${this.logo_name}</text>
                </svg>`
            }
            else{
                return `<svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="${this.width}" height="${this.width}" fill="#${this.shape_hexa_code}"/>
                <text x="${xText}" y="${yText}" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700"
                fill="#${this.hexa_code}">${this.logo_name}</text>
                </svg>`
            }
        }
        
    }
}

class Rectangle extends Shapes {
    rec_width;
    height;

    constructor(logo_name, color_code, color_keyword, hexa_code, shape, shape_color_code, shape_color_keyword, shape_hexa_code, rec_width, height){
        super(logo_name, color_code, color_keyword, hexa_code, shape, shape_color_code, shape_color_keyword, shape_hexa_code);
        this.rec_width=rec_width;
        this.height=height;
    }

    renderRectangle(){
        const xText = `${this.rec_width}`/2;
        const yText = `${this.height}`/2;

        if(this.shape_color_code === 'keyword'){
            if(this.color_code === 'keyword'){
                return `<svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="${this.rec_width}" height="${this.height}" fill="${this.shape_color_keyword}"/>
                <text x="${xText}" y="${yText}" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700"
                fill="${this.color_keyword}">${this.logo_name}</text>
                </svg>`
            }
            else{
                return `<svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="${this.rec_width}" height="${this.height}" fill="${this.shape_color_keyword}"/>
                <text x="${xText}" y="${yText}" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700"
                fill="#${this.hexa_code}">${this.logo_name}</text>
                </svg>`
            }            
        }
        else{
            if(this.color_code === 'keyword'){
                return `<svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="${this.rec_width}" height="${this.height}" fill="#${this.shape_hexa_code}"/>
                <text x="${xText}" y="${yText}" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700"
                fill="${this.color_keyword}">${this.logo_name}</text>
                </svg>`
            }
            else{
                return `<svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="${this.rec_width}" height="${this.height}" fill="#${this.shape_hexa_code}"/>
                <text x="${xText}" y="${yText}" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700"
                fill="#${this.hexa_code}">${this.logo_name}</text>
                </svg>`
            }
        }
        
    }
}

class Diamond extends Shapes {
    constructor(logo_name, color_code, color_keyword, hexa_code, shape, shape_color_code, shape_color_keyword, shape_hexa_code){
        super(logo_name, color_code, color_keyword, hexa_code, shape, shape_color_code, shape_color_keyword, shape_hexa_code);
    }

    renderDiamond(){
        if(this.shape_color_code === 'keyword'){
            return `<svg version="1.1"
            width="500" height="500"
            xmlns="http://www.w3.org/2000/svg">
            <polygon fill="${this.shape_color_keyword}" points="9.445,125 125,5.774 240.556,125 125,280.227"/>
            ${super.setLogoDiamond()}
            </svg>`       
        }
        else{
            return `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon fill="#${this.shape_hexa_code}" points="9.445,125 125,5.774 240.556,125 125,280.227"/>
            ${super.setLogoDiamond()}
            </svg>`
        }
    }
        
}


module.exports = {Shapes, Circle, Triangle, Square, Rectangle, Diamond}