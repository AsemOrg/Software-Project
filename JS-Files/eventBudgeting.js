const Page = require("../JS-Files/Page.js");
const DB = require("../JS-Files/ourDataBase.js");
const readlineSync = require("readline-sync");
const Server = require("../main");
const PrintData = require("../JS-Files/printData.js");

class EventBudgeting {
  printMenu() {
    console.log(
      `----------------------------------------------------------------
Track Your Event Expences, Vendor Payments and Venue Rental Fees.`
    );

    printData.printEventData(DB.eventMap);
    let option = readlineSync.question("Choose an Event:");

    let tempMap = new Map();
    tempMap = DB.eventMap;
    let eventID;
    let choice;
    let venueIdChoice;
    tempMap.forEach((value, key) => {
      eventID = value.event_id;
      if(eventID == option){
        choice = eventID;
        venueIdChoice = value.venueId;
      }
    });
    if (choice == option) {
      let mergedDetails = printData.mergeData(venueIdChoice, DB.venueMap, DB.eventMap);
      printData.printMergedTable(mergedDetails);
    } else{
      console.log("Event Doesn't Exist");
    }
  }
}

let event = new EventBudgeting();
let printData = new PrintData();
DB.init();
event.printMenu();
<<<<<<< HEAD
// printData.printBudgetExpenses(DB.userMap, DB.venueMap, DB.eventMap);
// printData.printBudgetExpenses(DB.venueMap, DB.eventMap);
let mergedDetails = printData.mergeData(101, DB.venueMap, DB.eventMap);
// let parsedMergedDetails = JSON.parse(mergedDetails);
console.log(mergedDetails);
printData.printMergedTable(mergedDetails);
=======
>>>>>>> 476117377c18e983a80fa9102cf10c439871c132

