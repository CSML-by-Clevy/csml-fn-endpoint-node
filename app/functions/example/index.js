/**
 * This function returns the string "Hello, ${name}!"
 * or defaults to "Hello, World!" if no `name` parameter is provided in the Fn() call
 *
 * @param {*} event
 * @returns {String}
 */
async function handler(event = {}) {
  return `Hello, ${event.name || 'World'}!`;
}

module.exports = handler;
