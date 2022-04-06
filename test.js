const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
});

test("Un euro deberia ser 1.2 dolares", function (){
    const { fromEuroToDollar } = require('./app.js')
    expect (fromEuroToDollar(3.5)).toBe(4.2);
});

test("Un dolar deberia ser 106,58 yenes", function(){
    const { fromDollarToYen } = require('./app.js');
    expect (fromDollarToYen(2)).toBe(213.17);
});

test("Un yen deberia ser 0,006 libras esterlinas", function(){
    const { fromYenToPound } = require('./app.js');
    expect (fromYenToPound(2.5)).toBe(0.02);
});