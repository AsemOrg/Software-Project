const { Given, When, Then } = require("@cucumber/cucumber");
const myAccountP = require("../JS-Files/myAccountP");
const DB = require("../JS-Files/ourDataBase");
let account = new myAccountP();
DB.init();

Given("the user in my account page", function () {
  account.openPage();
});

When("select {string} options", function (string) {
  
  account.printMenu();
  account.run(string);
});

When("the user enter his page name", function () {
  
  account.loginBusinessAccount("Asem-Hesam");
});

When("the user enter unexisted page name", function () {
  account.loginBusinessAccount("hakonaa matataa");
});

When("the user enter invalid page name", function () {
  account.loginBusinessAccount("");
});

Then("display all user information", function () {
  account.userProfileInfo();
});

Then("send him to Create business account page", function () {
  account.creatBusinessAccount();
});

Then("send him to business account page", function () {
  account.loginBusinessAccount();
});



When("the user enters invalid integer in MyAccount Page {int}", function (int) {
  account.run(String(int));
});

Then("display this message {string}", function (string) {
  console.log(string);
});

Then("bake to user home page", function () {
  account.returnBack();
});

When(
  "the user enters invalid integer in MyAccount Page {string}",
  function (string) {
    account.run(string);
  }
);
Then("return him to My Account page", function () {
  account.returnBack();
});
