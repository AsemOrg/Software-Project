const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

Given("the user is on the Create Business Account page", function () {});

When("the user enters valid name page", function () {});

When("clicks on create Business Account page option", function () {});

Then("redirect him to myAccount page", function () {});

When("the user enters valid name page that already exist", function () {});

When("the user enters invalid name page like null", function () {});

When(
  "the user enters invalid integer in create Business Account Page {int}",
  function (int) {}
);

Then("return him to create Business Account page", function () {});

When(
  "the user enters invalid integer in create Business Account Page {string}",
  function (string) {}
);

When("user select {string} options", function (string) {});

Then("back to myAccount page", function () {});
