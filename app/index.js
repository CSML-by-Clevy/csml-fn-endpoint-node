const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const functions = require('./functions');

const app = express();

app.use(bodyParser.json({ limit: '50mb', extended: true }));

/**
 * Proxy all function calls to this endpoint.
 *
 * @returns {{success: boolean, message: string, result: *}}
 */
app.post('/run', async (req, res) => {
  const {
    data,
    client,
    function_id,
  } = req.body;

  // Verify that the function exists
  if (typeof functions[function_id] === 'undefined') {
    return res.json({ data: { success: false, message: `Function ${function_id} does not exist` } });
  }

  // Execute the function
  const response = await functions[function_id](Object.assign((data || {}), { _client: client }))
    .then(result => ({ success: true, result }))
    .catch(err => ({ success: false, message: err.message }));
  return res.json({ data: response });
});

const PORT = process.env.PORT || 3000;
// eslint-disable-next-line no-console
module.exports = app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
