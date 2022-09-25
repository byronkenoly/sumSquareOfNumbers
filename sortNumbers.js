'use strict';

const sortNumbers = (a, b, c) => {
    
    let unOrdered = [a, b, c];
    let x = 0;

    for(let i=0; i<3; i++){
        for(let j=i+1; j<3; j++){

            if(unOrdered[i] > unOrdered[j]){
                x = unOrdered[i];//sorted = 5
                unOrdered[i] = unOrdered[j];//unOrdered=[2, 2, 8]
                unOrdered[j] = x;//unOrdered=[2, 5, 8]
            }
        }
    }

    console.log(unOrdered);
}


console.log(sortNumbers(5, 2, 8));