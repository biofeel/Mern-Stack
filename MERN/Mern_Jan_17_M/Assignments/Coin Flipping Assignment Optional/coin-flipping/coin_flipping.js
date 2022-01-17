function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

const fiveHeads = new Promise((resolve, reject) => {
    let headCount = 0
    let attempts = 0
    while (headCount < 5) {
        attempts++

        let result = tossCoin()

        if (result === "heads") {
            headCount++;
        } else {
            headCount = 0;
        }
        if (attempts >= 100) {
            break
        }
    }
    if (attempts >= 100) {

        reject(console.log('In 100 tosses, 5 heads in a row did not happen'))
    } else {
        resolve(`It took ${attempts} tries to flip five "heads"`)
    }

})

fiveHeads
    .then(res => console.log(res))
    .catch(err => console.log(err));
console.log("When does this run now?");