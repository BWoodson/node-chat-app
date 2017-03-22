const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var test = 1;
    
    var result = isRealString(test);
    
    expect(result).toBe(false);
  });
  
  it('should reject string with only spaces', () => {
    var test = '    ';
    
    var result = isRealString(test);
    
    expect(result).toBe(false);
  });
  
  it('should allow string with non-space characters', () => {
    var test = '  bacon  ';
    
    var result = isRealString(test);
    
    expect(result).toBe(true);
  });
})