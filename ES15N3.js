let score = new Map([
    ['PHP', 56],
    ['PHP', 60],
    ['PS', 57],
    ['ES', 92],
    ['VUE', 49]
]);

function* calc(sc, option) {
    if (option == 'fail') {
        for (let [key, value] of sc) {
            if (value < 60) yield [key, value];
        }
    } else {
        for (let [key, value] of sc) {
            if (value >= 60) yield [key, value];
        }
    }
}

export default calc;
export {
    score
};