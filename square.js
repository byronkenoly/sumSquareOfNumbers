'use strict';

const sqr = function(...values){

    let sumOfSquares = 0;

    for(let i=0; i<values.length; i++){

        let squareOfVal = Math.pow(values[i], 2);
        sumOfSquares += squareOfVal;
    }

    return sumOfSquares;
}