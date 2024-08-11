/* 11------- Different ways to write functions -------

function add(a, b) {
  return a + b;
}

var add = function (a, b) {
  return a + b;
};

var add = (a,b) => {return a+b;}


var add = (a, b) => a + b;
var result = add(2, 3);
console.log(result);

(function () {
  console.log("Learning js");
})();



//12------------ Callback Function/----------

const add = function (a, b, pro) {
  var result = a + b;
  console.log("result: " + result);
  pro();
};

add(212, 1215, () => console.log("added success"));
 

// 13---- Using Core modules like fs and os for data and -- message to user---
var fs = require("fs");
var os = require("os");

var userdetail = os.userInfo();
console.log(userdetail);
console.log(userdetail.username);

fs.appendFile("greet.txt", "Hi " + userdetail.username + " !\n", () => {
  console.log("file created");
});


// 14---- Importing files and data from another file.-----
const notes = require("./notes.js");

var fruit = notes.fruit;
var result = notes.addnumber(fruit, 12);
console.log(result);
console.log(fruit);

// 15 ---- NPM package-lodash ----
var _ = require("lodash");

var data = ["xzy", "xyz", 1, 1, 1, 2, 3, 333];
var fdata = _.uniq(data);
console.log(fdata);


*/
