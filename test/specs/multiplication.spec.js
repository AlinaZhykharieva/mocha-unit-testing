const Multiplication = require('../../app/multiplication');
const {expect} = require('chai');

describe('addition of all parameters', () => {
    let multiplication;

    beforeEach(() => {
        multiplication = new Multiplication();
    });

    afterEach(() => {
        multiplication = null;
    });
    [
        {skip: false, firstFactor: 2, result:2},
        {skip: false, firstFactor: -5, result: -5},
        {skip: false, firstFactor: 8, result: 8}

    ].forEach((testData) =>
        (testData.skip ? it.skip : it)
        (`${testData.skip || ''} Check addition for one parameter`, () => {
            expect(multiplication.multiplicationOfNumbers(testData.firstFactor)).to.be.equal(testData.result);
        }));
    [
        {skip: false, firstFactor: 2, secondFactor: -5, result: -10},
        {skip: false, firstFactor: -5, secondFactor: -5, result: 25},
        {skip: false, firstFactor: 8, secondFactor: 1, result: 8}

    ].forEach((testData) =>
        (testData.skip ? it.skip : it)
        (`${testData.skip || ''} Check addition for two parameters`, () => {
            expect(multiplication.multiplicationOfNumbers(testData.firstFactor, testData.secondFactor))
                .to.be.equal(testData.result);
        }));

    [
        {skip: false, firstFactor: 2, secondFactor: -5, thirdFactor: 2, result: -20},
        {skip: false, firstFactor: -5, secondFactor: -5, thirdFactor: 2, result: 50},
        {skip: false, firstFactor: 8, secondFactor: 1, thirdFactor: 2, result: 16}

    ].forEach((testData) =>
        (testData.skip ? it.skip : it)
        (`${testData.skip || ''} Check addition for three parameters`, () => {
            expect(multiplication.multiplicationOfNumbers(testData.firstFactor, testData.secondFactor, testData.thirdFactor))
                .to.be.equal(testData.result);
        }));
    [
        {skip: false,  result: 0},

    ].forEach((testData) =>
        (testData.skip ? it.skip : it)
        (`${testData.skip || ''} Check addition without parameters`, () => {
            expect(multiplication.multiplicationOfNumbers())
                .to.be.equal(testData.result);
        }));
});
