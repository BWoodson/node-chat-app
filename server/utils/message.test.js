const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
 it('should generate correct message object', () => {
  var from = 'Test User';
  var text = 'Message goes here';

  var result = generateMessage(from, text);

  expect(result.createdAt).toBeA('number');
  expect(result).toInclude({from, text});
 });
});

describe('generateLocationMessage', () => {
  it('should generate correct location message object', () => {
    var from = 'Tester';
    var latitude = 100;
    var longitude = 75;

    var result = generateLocationMessage(from, latitude, longitude);
    expect(result.createdAt).toBeA('number');
    expect(result).toInclude({from});
    expect(result.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
  });
});
