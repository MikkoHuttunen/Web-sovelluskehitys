var results = [];

function rollDice(n) {
    var dice;
    for (i = 0; i < n; i++) {
        dice = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        results.push(dice);
    }
}

rollDice(10);
console.log(results);

function returnNums(results) {
    return results.join(" ");
}

console.log(returnNums(results));

function max(results) {
    return Math.max.apply(null, results);
}

console.log(max(results));

function min(results) {
    return Math.min.apply(null, results);
}

console.log(min(results));

function calcAvg(results) {
    var sum = 0;
    for (i = 0; i < results.length; i++) {
        sum += results[i];
    }
    return sum / results.length;
}

console.log(calcAvg(results));