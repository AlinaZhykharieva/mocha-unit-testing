const Addition = require('../../app/addition');
const {expect} = require('chai');

describe('addition of all parameters', () => {
  let addition;

  beforeEach(() => {
    addition = new Addition();
  });

  afterEach(() => {
    addition = null;
  });
  [
    {skip: false, firstTerm: 2, result: 2},
    {skip: false, firstTerm: -5, result: -5},
    {skip: false, firstTerm: 8, result: 8},

  ].forEach((testData) =>
    (testData.skip ? it.skip : it)
    (`${testData.skip || ''} Check addition for one parameter`, () => {
      expect(addition.additionOfNumbers(testData.firstTerm)).to.be.equal(testData.result);
    }));
  [
    {skip: false, firstTerm: 2, secondTerm: -5, result: -3},
    {skip: false, firstTerm: -5, secondTerm: -5, result: -10},
    {skip: false, firstTerm: 8, secondTerm: 1, result: 9},

  ].forEach((testData) =>
    (testData.skip ? it.skip : it)
    (`${testData.skip || ''} Check addition for two parameters`, () => {
      expect(addition.additionOfNumbers(testData.firstTerm, testData.secondTerm)).to.be.equal(testData.result);
    }));

  [
    {skip: false, firstTerm: 2, secondTerm: -5, thirdTerm: 2, result: -1},
    {skip: false, firstTerm: -5, secondTerm: -5, thirdTerm: 2, result: -8},
    {skip: false, firstTerm: 8, secondTerm: 1, thirdTerm: 2, result: 11},

  ].forEach((testData) =>
    (testData.skip ? it.skip : it)
    (`${testData.skip || ''} Check addition for three parameters`, () => {
      expect(addition.additionOfNumbers(testData.firstTerm, testData.secondTerm, testData.thirdTerm))
          .to.be.equal(testData.result);
    }));
  [
    {skip: false, result: 0},

  ].forEach((testData) =>
    (testData.skip ? it.skip : it)
    (`${testData.skip || ''} Check addition without parameters`, () => {
      expect(addition.additionOfNumbers())
          .to.be.equal(testData.result);
    }));
});
