//header of table start
var storeColumn = document.getElementById("cookieSales");
var headerRow = document.createElement('tr');
var newStoreColumn = document.createElement('th');
newStoreColumn.appendChild(document.createTextNode("Store/Hours"));
headerRow.appendChild(newStoreColumn);
storeColumn.appendChild(headerRow);
console.log("Store hours header");

var hoursOpen = ['10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM'];

for (var i=0; i<hoursOpen.length; i++) {
  var hoursOpenHeader = document.createElement('th');
  hoursOpenHeader.appendChild(document.createTextNode(hoursOpen[i]));
  headerRow.appendChild(hoursOpenHeader);
  console.log("Header hours working");
}

var totalColumn = document.createElement('th');
totalColumn.appendChild(document.createTextNode("TOTAL"));
headerRow.appendChild(totalColumn);
console.log("Total cookies header");
//header of table end

//object constructor
var CookieStand = function(place, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.place = place;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.cookiesByHourList = [];

//customer randomiser
  this.randCustPerHour = function() {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
  };

//function that calculates daily cookies
  this.dailyCookies = function(id) {
    var dailyCookieTotal = 0;

    for (var i=0; i<hoursOpen.length; i++) {
      this.cookiesByHourList.push(parseInt(this.randCustPerHour() * this.avgCookiesPerCust));

      dailyCookieTotal += this.cookiesByHourList[i];
    }

//store location row start
    var infoRow = document.createElement('tr');
    var storeLocation = document.createElement('td');
    storeLocation.appendChild(document.createTextNode(this.place.toUpperCase()));
    infoRow.appendChild(storeLocation);
    storeColumn.appendChild(infoRow);
    console.log("Place row working");
//store location row end

//loop for inserting cookie by hour by place
    for (var i=0; i<hoursOpen.length; i++) {
      var cookieByHour = document.createElement('td');
      cookieByHour.appendChild(document.createTextNode(this.cookiesByHourList[i]));
      infoRow.appendChild(cookieByHour);
      console.log(place + " Result Count: " + dailyCookieTotal);
    }

//total cookies by place
    var dailyNewTotal = document.createElement('td');
    dailyNewTotal.appendChild(document.createTextNode(dailyCookieTotal));
    infoRow.appendChild(dailyNewTotal);
    dailyNewTotal.className="totalTableAlign";

    console.log(this.place + " " + this.cookiesByHourList);
    console.log("Daily Cookie Total: " + dailyCookieTotal);
  };
  //call function to make new objects below
  this.dailyCookies();
};

var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2);
var seaTac = new CookieStand('SeaTac Airport', 6, 44, 1.2);
var southcenter = new CookieStand('Southcenter Mall', 11, 38, 1.9);
var bellevue = new CookieStand('Bellevue Square', 20, 48, 3.3);
var alki = new CookieStand('Alki', 3, 24, 2.6);


//form js here
var newLocationSubmit = function(e) {
  e.preventDefault();
  var newStoreLocation = document.getElementById('placeForm');
  var newMinCust = document.getElementById('minCustForm');
  var newMaxCust = document.getElementById('maxCustForm');
  var newAvgCookie = document.getElementById('avgCookieForm');

  //error checking for values in all boxes
  if (!newStoreLocation.value || !newMinCust.value || !newMaxCust.value || !newAvgCookie.value ) {
    return alert('Please fill all values');
  }
  //error checking for number value
  else if (isNaN(newMinCust.value) || isNaN(newMaxCust.value) || isNaN(newAvgCookie.value)) {
    return alert('Please enter a number');
  }
  //error checking for max and min values
  else if ((newMinCust.value) > (newMaxCust.value)) {
    return alert('Please enter a maximum customers per hours value greater than the minimum customers per hour');
  }
  else {
    console.log("No errors");
  }

//this updates values for existing store
  if (newStoreLocation.value === this.place) {
    this.minCustPerHour = newMinCust.value;
    this.maxCustPerHour = newMaxCust.value;
    this.avgCookiesPerCust = newAvgCookie.value;
    console.log("Same location with updated values");
  }

//gets values from form and puts into object constructor
  var newLocation = new CookieStand((newStoreLocation.value.toUpperCase()), newMinCust.value, newMaxCust.value, newAvgCookie.value);
  console.log("Submit location working");

//clear values in form once inserted
    newStoreLocation.value = null;
    newMinCust.value = null;
    newMaxCust.value = null;
    newAvgCookie.value = null;
};

//submit button to add event listener
var submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', newLocationSubmit);
