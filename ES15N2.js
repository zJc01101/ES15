let citys1 = {
    province: '广东',
    citys: ['广州', '韶关', '深圳']
};
let citys2 = {
    province: '湖南',
    citys: ['长沙', '岳阳', '衡阳']
};

function printCity(citySet) {
    console.log(`${citySet.province}省入选的城市:`);
    let c = citySet.citys.join(',');
    console.log(c);
}

export {
    citys1,
    citys2
};
export default printCity;