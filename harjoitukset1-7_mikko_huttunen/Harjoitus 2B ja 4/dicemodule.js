let dicemodule = (function() {
    let results = [];

    return {
        rollDice: function(n) {
            for (let i = 0; i < n; i++) {
                results.push(Math.floor(Math.random() * 6 + 1));
            }
            return results;
        },

        returnNums: function() {
            return results.join(' ');
        },

        max: function() {
            return Math.max(...results);
        },

        min: function() {
            return Math.min(...results);
        },

        calcAvg: function() {
            let sum = 0;
            for (let i = 0; i < results.length; i++) {
                sum += results[i];
            }
            return sum / results.length;
        }
    };
})();

console.log(dicemodule.returnNums());
console.log(dicemodule.max());
console.log(dicemodule.min());
console.log(dicemodule.calcAvg());
module.exports = dicemodule;