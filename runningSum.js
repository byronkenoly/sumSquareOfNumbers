'use strict';

const runningSum = (...values) => {

    let sum = 0;

    for(let i=0; i<values.length; i++){
        if(values[i] >= 0){
            sum += values[i];
        } else {
            break
        }
    }

    return sum;
}