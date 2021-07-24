'use strict'

class Rectangle{
    constructor(height,width) {
        this.height = height;
        this.width = width;
    }
    calcArea(){
        return this.height*this.width;
    }
}

class ColoredRectangleText extends Rectangle{
    constructor(height,width,text,color) {
        super(height,width);
        this.text = text;
        this.bgcolor = color;
    }
    showMYpROPS(){
        console.log(`Текст:${this.text}, цвет:${this.bgcolor}`);
    }
}

const div = new ColoredRectangleText(25,10,"hello",'red');
div.showMYpROPS();
console.log(div.calcArea());
// const square = new Rectangle(10,10);
// const long = new Rectangle(20,100);
// console.log(square.calcArea());
// console.log(long.calcArea());