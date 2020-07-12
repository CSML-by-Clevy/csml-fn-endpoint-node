const chai = require('chai');
const { example } = require('../app/functions');

const { expect } = chai;

describe('test example function', () => {
  it('example fn without event', async () => {
    const res = await example();
    expect(res).to.equal('Hello, World!');
  });
  it('example fn with name', async () => {
    const res = await example({ name: 'plop' });
    expect(res).to.equal('Hello, plop!');
  });
  it('example fn without name', async () => {
    const res = await example({});
    expect(res).to.equal('Hello, World!');
  });
});
