
angular.module("app").service("print", function() {
  this.display = display;
});

function display() {
  console.log("Welcome To Angular Js");
}