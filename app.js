var pikePlace = {
  location: "Pike Place Market",
  minCustPerHour: 17,
  maxCustPerHour: 88,
  avgCookiesPerCust: 5.2,
  randCustPerHour: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

function pikeDailyCookiesByLocation() {
  var result = [];
  var hoursOpen = ['10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM'];
  for (var i=0; i<hoursOpen.length; i++) {
    result.push(parseInt(pikePlace.randCustPerHour(pikePlace.minCustPerHour, pikePlace.maxCustPerHour) * pikePlace.avgCookiesPerCust));
  }
  for (var i=0; i<result.length; i++) {
    var list = document.getElementById('pike');
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(hoursOpen[i] + ': ' + result[i]));
    list.appendChild(item);
  }
  return list;
}

pikeDailyCookiesByLocation();

var seaTac = {
  location: "SeaTac Airport",
  minCustPerHour: 6,
  maxCustPerHour: 44,
  avgCookiesPerCust: 1.2,
  randCustPerHour: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

function seaTacDailyCookiesByLocation() {
  var result = [];
  var hoursOpen = ['10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM'];
  for (var i=0; i<hoursOpen.length; i++) {
    result.push(parseInt(seaTac.randCustPerHour(seaTac.minCustPerHour, seaTac.maxCustPerHour) * seaTac.avgCookiesPerCust));
  }
  for (var i=0; i<result.length; i++) {
    var list = document.getElementById('seatac');
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(hoursOpen[i] + ': ' + result[i]));
    list.appendChild(item);
  }
  return list;
}

seaTacDailyCookiesByLocation();

var southcenter = {
  location: "Southcenter Mall",
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 1.9,
  randCustPerHour: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

function southcenterDailyCookiesByLocation() {
  var result = [];
  var hoursOpen = ['10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM'];
  for (var i=0; i<hoursOpen.length; i++) {
    result.push(parseInt(southcenter.randCustPerHour(southcenter.minCustPerHour, southcenter.maxCustPerHour) * southcenter.avgCookiesPerCust));
  }
  for (var i=0; i<result.length; i++) {
    var list = document.getElementById('southcenter');
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(hoursOpen[i] + ': ' + result[i]));
    list.appendChild(item);
  }
  return list;
}

southcenterDailyCookiesByLocation();

var bellevue = {
  location: "Bellevue Square",
  minCustPerHour: 20,
  maxCustPerHour: 48,
  avgCookiesPerCust: 3.3,
  randCustPerHour: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

function bellevueDailyCookiesByLocation() {
  var result = [];
  var hoursOpen = ['10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM'];
  for (var i=0; i<hoursOpen.length; i++) {
    result.push(parseInt(bellevue.randCustPerHour(bellevue.minCustPerHour, bellevue.maxCustPerHour) * bellevue.avgCookiesPerCust));
  }
  for (var i=0; i<result.length; i++) {
    var list = document.getElementById('bellevue');
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(hoursOpen[i] + ': ' + result[i]));
    list.appendChild(item);
  }
  return list;
}

bellevueDailyCookiesByLocation();

var alki = {
  location: "Alki",
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 2.6,
  randCustPerHour: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

function alkiDailyCookiesByLocation() {
  var result = [];
  var hoursOpen = ['10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM'];
  for (var i=0; i<hoursOpen.length; i++) {
    result.push(parseInt(alki.randCustPerHour(alki.minCustPerHour, alki.maxCustPerHour) * alki.avgCookiesPerCust));
  }
  for (var i=0; i<result.length; i++) {
    var list = document.getElementById('alki');
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(hoursOpen[i] + ': ' + result[i]));
    list.appendChild(item);
  }
  return list;
}

alkiDailyCookiesByLocation();
