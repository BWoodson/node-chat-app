const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;
  
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Steve',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Phteven',
      room: 'Node Course'
    }];
  });
  
  it('should add new user', () => {
    var users = new Users();
    
    var user = {
      id: '123',
      name: 'Phteven',
      room: 'Yays'
    };
    
    var resUser = users.addUser(user.id, user.name, user.room);
    
    expect(users.users).toEqual([user]);
  });
  
  it('should remove a user', () => {
    var testUser = users.getUser('3');
    var removedUser = users.removeUser('3');
    
    expect(users.users.length).toBe(2);
    expect(removedUser).toEqual(testUser);
  });
  
  it('should not remove invalid user', () => {
    var user = users.removeUser('15');
    
    expect(user).toNotExist();
  });
  
  it('should find user', () => {
    var user = users.getUser('3');
    
    expect(user).toEqual(users.users[2]);
  });
  
  it('should not find invalid user', () => {
    var user = users.getUser('15');
    
    expect(user).toNotExist();
  });
  
  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');
    
    expect(userList).toEqual(['Mike', 'Phteven']);
  });
  
  it('should return names for react course', () => {
    var userList = users.getUserList('React Course');
    
    expect(userList).toEqual(['Steve']);
  });
});