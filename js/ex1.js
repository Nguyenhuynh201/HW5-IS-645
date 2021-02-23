class Square {
    constructor(side){
        this.side = side
        this.perimeter = this.side * 4
        this.area = this.side * this.side 
        this.diagonal = Math.sqrt(2 * this.side *this.side).toFixed(3)
    }

    describe(){
        return `Square with side ${this.side} has perimeter of ${this.perimeter}, area of ${this.area}, and diagonal of ${this.diagonal}`
    }
}

firstsquare = new Square(2)
console.log (firstsquare.describe())

secondsquare = new Square(4)
console.log (secondsquare.describe())

thirdsquare = new Square(6)
console.log(thirdsquare.describe())