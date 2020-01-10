class AvgNumber {
    constructor(min, max, array) {
        this.min = min;
        this.max = max;
        this.array = array;
    }

    randomNumber() {
        return Math.floor(this.min + Math.random() * ((this.max - this.min) + 1));
    }

    calcAverage() {
        let sum = 0;
        for (let i = 0; i < this.array.length; i++) {
            sum += this.array[i];
        }
        const avg = sum/this.array.length;
        return avg;
    }
};

module.exports = new AvgNumber(100, 200, [1, 2, 3, 4, 5, 6]);