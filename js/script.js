// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
//only appears when the guest list is full.
const assignButton = document.querySelector(".assign");
//targets the list that will populate with the guest’s name and their assigned dish.
const assignedItems = document.querySelector(".assigned-items");

//Call the addToList function and pass it to guest as an argument:
//addToList(guest);

//Call the updateGuestCount function in the addGuestButton event handler.
//updateGuestCount();

//Add an Event Listener & Create an Element
addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  if (guest !== "") {
    addToList(guest);
    updateGuestCount();
    clearInput();
  }
});

//Clear the Input Box
const clearInput = function () {
  guestInput.value = "";
};

//Refactor Code
const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

//Limit the Guest List
const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;

  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

//Select Assigned Items & Build an Array
const assignItems = function () {
  const potluckItems = [
    "Fruit Tray",
    "Veggie Platter",
    "Cheese and Crackers",
    "Skewers",
    "Mini Sandwhiches",
    "Potato Salad",
    "Couscous Salad",
    "Pasta Salad",
    "Cold Slaw",
    "Deviled Eggs",
    "Cucumber Salad",
    "Cookies"
  ];

  //Select Elements & Loop Through the Array
  const allGuests = document.querySelectorAll(".guest-list li");

  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    //In the value, add the item from the potluckItems array at the index position of randomPotluckIndex.
    let randomPotluckItem = potluckItems[randomPotluckIndex];
    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);
    potluckItems.splice(randomPotluckIndex, 1);
  }
};

//Add an Event Listener & Update PotluckItems Array
assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});
