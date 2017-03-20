const moment = require('moment');

// var date = moment();
// date.add(100, 'years').subtract(9, 'months');
// console.log(date.format('MMM Do YYYY'));

var createdAt = 1234562347;
var date = moment(createdAt);
console.log(date.format('h:mm a'));