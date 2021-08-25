import { expect } from 'chai';
import { addNumbers, sub } from '../src/add';

// const {expect} = require('chai');
// const {addNumbers} = require('./src/add');

it('should add to numbers from an es module', () => {
  expect(addNumbers(3, 4)).to.equal(7);
});

it('should sub to numbers from an es module', () => {
  expect(sub(3, 4)).to.equal(-1);
});
