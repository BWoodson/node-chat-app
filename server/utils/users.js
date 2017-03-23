class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser (id) {
    // return user that was removed
    var removedUser = this.getUser(id);
    this.users = this.users.filter((user) => user.id !== id);
    
    return removedUser;
  }
  getUser (id) {
    // return user object
    var user = this.users.filter((user) => user.id === id)[0];
    return user;
  }
  getUserList (room) {
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);
    
    return namesArray;
  }
  getRoomList () {
    var roomsMap = this.users.map((user) => user.room);
    var rooms = [...new Set(roomsMap)];
    return rooms;
  }
}

module.exports = {Users};

// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription () {
//     return `${this.name} is ${this.age} year(s) old.`;
//   }
// }

// var me = new Person('Brandon', 35);
// var description = me.getUserDescription();
// console.log(description);