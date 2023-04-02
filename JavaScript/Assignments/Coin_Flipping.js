function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    return new Promise((resolve, reject) => {
        let headCount = 0;
        let attempts = 0;
        let maxAttempt = 100;

        while(headCount < 5) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if(result === "heads") {
                headCount++;
            } else {
                headCount = 0;
            }
        }
        if(attempts <= maxAttempt) {
            resolve(`It took ${attempts} tries to flip five "heads".`)
        } else {
            reject(`Attempts have exceeded ${maxAttempt} flips.`)
        }
    });
}
fiveHeads().then(res => console.log(res)).catch(err => console.log(err));
console.log("When does this run now?");