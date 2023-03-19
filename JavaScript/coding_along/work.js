
const scoreCheck = (arrScores) => {
    let highScore = arrScores[0];
    let lowScore = arrScores[0];
    let maxCount = 0;
    let minCount = 0;
    for(let i = 1; i<arrScores.length; i++) {
        if (arrScores[i] > highScore) {
            maxCount ++;
            highScore = arrScores[i];
            // console.log("Max Count: " + maxCount);
        }
        else if (arrScores[i] < lowScore) {
            minCount ++;
            lowScore = arrScores[i];
            // console.log("Min Count: " + minCount);
        }
    }
    console.log("Max Count: " + maxCount);
    console.log("Min Count: " + minCount);
}

scoreCheck([12,24,10,12,65]);