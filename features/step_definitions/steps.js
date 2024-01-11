const { assertThat, is } = require("hamjest");
const Person = require("../../src/shouty");
const { Given, When, Then } = require("@cucumber/cucumber");

// Given Lucy is Located 15 meters from Sean

Given("{person} is Located/Standing {int} metre(s) from Sean", function (Lucy,distance) {
  // Write code here that turns the phrase above into concrete actions
  this.lucy = new Person();
  this.sean = new Person();
  this.lucy.moveTo(distance);
});

Given('a person named {person}', function (name) {
    // Write code here that turns the phrase above into concrete actions
    this.person = new Person();
  });

// When Sean shouts "free Bagels at Sean's!"

When("{person} shout(s) {string}", function (Sean,message) {
  // Write code here that turns the phrase above into concrete actions
this.sean.shout(message);
this.message = message;
});

//    Then Lucy hears Sean's message

Then("{person} hears Sean's message", function (message) {
  // Write code here that turns the phrase above into concrete actions
assertThat(this.lucy.messageHeard(message), is([this.message]));
});
