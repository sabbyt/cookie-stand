var CookieStand = function(place, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.place = place;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.cookiesByHourList = [];

  this.randCustPerHour = function() {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
  };

  this.dailyCookies = function(id) {
    var dailyCookieTotal = 0;
    var hoursOpen = ['10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM'];

    for (var i=0; i<hoursOpen.length; i++) {
      this.cookiesByHourList.push(parseInt(this.randCustPerHour() * this.avgCookiesPerCust));

      dailyCookieTotal += this.cookiesByHourList[i];
      var list = document.getElementById(id);
      var item = document.createElement('li');
      item.appendChild(document.createTextNode(hoursOpen[i] + ': ' + this.cookiesByHourList[i] + " cookies"));
      list.appendChild(item);
      console.log(place + " Result Count: " + dailyCookieTotal);
    }

    var dailyNewTotal = document.createElement('li');
    dailyNewTotal.appendChild(document.createTextNode('Total: ' + dailyCookieTotal + " cookies"));
    list.appendChild(dailyNewTotal);

    console.log(this.place + " " + this.cookiesByHourList);
    console.log("Daily Cookie Total: " + dailyCookieTotal);
  };

};

var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2);
var seaTac = new CookieStand('SeaTac Airport', 6, 44, 1.2);
var southcenter = new CookieStand('Southcenter Mall', 11, 38, 1.9);
var bellevue = new CookieStand('Bellevue Square', 20, 48, 3.3);
var alki = new CookieStand('Alki', 3, 24, 2.6);

pikePlace.dailyCookies('pike');
seaTac.dailyCookies('seatac');
southcenter.dailyCookies('southcenter');
bellevue.dailyCookies('bellevue');
alki.dailyCookies('alki');
