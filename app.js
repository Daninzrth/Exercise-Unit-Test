const sum = (a,b) => {
    return a + b
};

console.log(sum(7,3));



let oneEuroIs = {
    "JPY": 127.9,
    "USD": 1.2,
    "GBP": 0.8
}

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = (valueInDollar/1.2) * 127.9;
    let result= Math.round((valueInYen + Number.EPSILON) * 100) / 100;
    return result;
}

const fromYenToPound = function(valueInYen){
    let valueInPound = (valueInYen/127.9) * 0.8;
    let result = Math.round((valueInPound + Number.EPSILON) * 100) / 100;
    return result;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};