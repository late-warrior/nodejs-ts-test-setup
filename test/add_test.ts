import { expect } from 'chai';
import { addNumbers } from '../src/add';

// const {expect} = require('chai');
// const {addNumbers} = require('./src/add');

it('should add to numbers from an es module', () => {
  expect(addNumbers(3, 4)).to.equal(18);
});
