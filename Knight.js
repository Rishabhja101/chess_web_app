class Knight extends Piece {
    /*
    @param x  x-position of the knight
    @param y  y-position of the knight
    @param p  player object that the knight belongs to
    @param img  display image for knight
    */
    constructor(x, y, p, img){
        super(x, y, p, img);

        this.DIAMETER = 75;
    }

    isValidPath(changeInX, changeInY) {
        return (Math.abs(changeInX) == 1 && Math.abs(changeInY) == 2) ||
            (Math.abs(changeInX) == 2 && Math.abs(changeInY) == 1);
    }

    isValidMove(startingX, finishingX, startingY, finishingY, cellsArray){
        let changeInX = finishingX - startingX;
        let changeInY = finishingY - startingY;

        if(this.isValidPath(changeInX, changeInY) &&
        this.isValidPieceTake(finishingX, finishingY, cellsArray)){
            return true;
        }
        return false;
    }
}