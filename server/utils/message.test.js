const expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
 it('should generate correct message object', () => {
  var result = generateMessage('Test User', 'Message goes here');

  var from = 'Test User';
  var text = 'Message goes here';

  expect(result.createdAt).toBeA('number');
  expect(result).toInclude({from, text});
 });
});
