const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const EventManagementPage = require("../JS-Files/EventManagementPage.js");
const DB = require("../JS-Files/ourDataBase.js");
DB.init();
let eventManagmentPage = new EventManagementPage();

Given("the user navicates to event page", function () {
  eventManagmentPage.openPage();
  console.log("open page");
});

When("clicks on {string} option in evenet page", function (string) {
  eventManagmentPage.printMenu();
  console.log("user select " + string + "option");
});

When("the user fill all data to add event", function () {
  eventManagmentPage.run('add new event');
});

Then("reture user to Event management page", function () {
  eventManagmentPage.openPage();
  console.log("open page");
});

When("the user fill data with existed event", function () {
  eventManagmentPage.addEvent(
    "event-001",
    "event c",
    "2024-5-6",
    "4:00",
    "blue",
    "101",
    "D/D/D",
    "42",
    "party"
  );
});

When("the user fill data with invalid input", function () {
  eventManagmentPage.addEvent(
    "event-003",
    "",
    "2024-5-6",
    "4:00",
    "blue",
    "101",
    "D/D/D",
    "",
    "party"
  );
});

When("the user fill data to update", function () {
  eventManagmentPage.run('update event');
});

When("the user enter ID that does not exist", function () {
  eventManagmentPage.editEvent(
    "event-004",
    "event n",
    "2024-5-6",
    "4:00",
    "blue",
    "101",
    "D/D/D",
    "20",
    "party"
  );
});

When("the user fill data to update with invalid data", function () {
  eventManagmentPage.editEvent(
    "event-001",
    "event n",
    "",
    "4:00",
    null,
    "101",
    "D/D/D",
    "20",
    "party"
  );
});

When("the user enter ID to delete", function () {
  eventManagmentPage.run('delete event')
});

When("the user enter unexisted ID to delete", function () {
  eventManagmentPage.deleteEvent("event-004");
});

Then("back to user page", function () {
  eventManagmentPage.goToUserPage();
});
When(
  "user select {string} options in event management page",
  function (string) {
    eventManagmentPage.run('return')
  }
);
When(
  "the user enters invalid integer in event management page Page {int}",
  function (int) {
    eventManagmentPage.run(String(int));
  }
);

When(
  "the user enters invalid integer in event management page Page {string}",
  function (string) {
    eventManagmentPage.run(string)
  }
);
