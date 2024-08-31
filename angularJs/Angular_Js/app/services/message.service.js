angular.module("app").service("message", function(){
  this.message = message;
});

function message(){
  console.log("Message From Message Service......")
}