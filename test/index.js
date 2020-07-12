const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

chai.use(chaiHttp);
const { expect } = chai;

describe('test HTTP POST /run', () => {
  it('fn_endpoint with example fn', async () => {
    const res = await chai.request(server)
      .post('/run').send({
        function_id: 'example',
        data: { name: 'plop' },
        client: { bot_id: 'a', channel_id: 'b', user_id: 'c' },
      });
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('object');
    expect(res.body.data).to.be.an('object');
    const { data } = res.body;
    expect(data.success).to.equal(true);
    expect(data.result).to.equal('Hello, plop!');
  });
  it('fn_endpoint with example fn and no event data', async () => {
    const res = await chai.request(server)
      .post('/run').send({
        function_id: 'example',
        client: { bot_id: 'a', channel_id: 'b', user_id: 'c' },
      });
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('object');
    expect(res.body.data).to.be.an('object');
    const { data } = res.body;
    expect(data.success).to.equal(true);
    expect(data.result).to.equal('Hello, World!');
  });
  it('fn_endpoint with missing fn', async () => {
    const res = await chai.request(server)
      .post('/run').send({
        function_id: 'missing',
        client: { bot_id: 'a', channel_id: 'b', user_id: 'c' },
      });
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('object');
    expect(res.body.data).to.be.an('object');
    const { data } = res.body;
    expect(data.success).to.equal(false);
    expect(data.message).to.equal('Function missing does not exist');
  });
});
