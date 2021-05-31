export const cTurn = function (totalNum) {

    let takes = 1;
    
    if (( (totalNum - takes) % 4 == 0 % 4 ) || ( (totalNum - takes) % 4 == 1 % 4 ))
        {
            return takes;
          
          console.log('Choose 1');
        } else {
            return 3;
        }
    
    }