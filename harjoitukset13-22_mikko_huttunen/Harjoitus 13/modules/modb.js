module.exports = class AvgNumber {
    constructor(min, max, array) {
        this.min = min;
        this.max = max;
        this.array = array;
    }

    randomNumber() {
        return Math.floor(min + Math.random() * ((max - min) + 1));
    }

    calcAverage(array) {
        let sum = 0;
        for (let i = 0; i < this.array.length; i++) {
            sum += array[i];
        }
        const avg = sum/this.array.length;
        return avg;
    }
};