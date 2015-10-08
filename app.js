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
totalColumn.appendChild(document.createTextNode("Total"));
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
    storeLocation.appendChild(document.createTextNode(this.place));
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
var submitLocation  = function(placeForm, minCustForm, maxCustForm, avgCookieForm) {
  this.placeForm = placeForm;
  this.minCustForm = minCustForm;
  this.maxCustForm = maxCustForm;
  this.avgCookieForm = avgCookieForm;
};

var form = document.getElementById("new-location-form");
var formButton = document.getElementById("submit-button");
var newLocationArray = [];

var newLocationSubmit = function(event) {
  var newLocation = new submitLocation(event.target.placeForm.value, event.target.minCustForm.value, event.target.maxCustForm.value, event.target.avgCookieForm.value);
  newLocationArray.push(newLocation);
  console.log("Submit working");

  newLocationArray = new Object(placeForm, minCustForm, maxCustForm, avgCookieForm);
};

formButton.addEventListener('click', newLocationSubmit);
