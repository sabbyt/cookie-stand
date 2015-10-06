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
  var pikeTotal = 0;
  var hoursOpen = ['10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM'];
  for (var i=0; i<hoursOpen.length; i++) {
    result.push(parseInt(pikePlace.randCustPerHour(pikePlace.minCustPerHour, pikePlace.maxCustPerHour) * pikePlace.avgCookiesPerCust));
  }

  for (var i=0; i<result.length; i++) {
    var list = document.getElementById('pike');
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(hoursOpen[i] + ': ' + result[i] + " cookies" ));
    list.appendChild(item);
    pikeTotal+= result[i];
  }

  var pikeNewTotal = document.createElement('li');
  pikeNewTotal.appendChild(document.createTextNode('Total: ' + pikeTotal + " cookies"));
  list.appendChild(pikeNewTotal);

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
  var seaTacTotal = 0;
  var hoursOpen = ['10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM'];
  for (var i=0; i<hoursOpen.length; i++) {
    result.push(parseInt(seaTac.randCustPerHour(seaTac.minCustPerHour, seaTac.maxCustPerHour) * seaTac.avgCookiesPerCust));
  }
  for (var i=0; i<result.length; i++) {
    var list = document.getElementById('seatac');
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(hoursOpen[i] + ': ' + result[i] + " cookies" ));
    list.appendChild(item);
    seaTacTotal+= result[i];
  }

  var seaTacNewTotal = document.createElement('li');
  seaTacNewTotal.appendChild(document.createTextNode('Total: ' + seaTacTotal + " cookies"));
  list.appendChild(seaTacNewTotal);

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
  var southcenterTotal = 0;
  var hoursOpen = ['10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM'];
  for (var i=0; i<hoursOpen.length; i++) {
    result.push(parseInt(southcenter.randCustPerHour(southcenter.minCustPerHour, southcenter.maxCustPerHour) * southcenter.avgCookiesPerCust));
  }
  for (var i=0; i<result.length; i++) {
    var list = document.getElementById('southcenter');
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(hoursOpen[i] + ': ' + result[i] + " cookies"));
    list.appendChild(item);
    southcenterTotal+=result[i];
  }

  var southcenterNewTotal = document.createElement('li');
  southcenterNewTotal.appendChild(document.createTextNode('Total: ' + southcenterTotal + " cookies"));
  list.appendChild(southcenterNewTotal);

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
  var bellevueTotal = 0;
  var hoursOpen = ['10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM'];
  for (var i=0; i<hoursOpen.length; i++) {
    result.push(parseInt(bellevue.randCustPerHour(bellevue.minCustPerHour, bellevue.maxCustPerHour) * bellevue.avgCookiesPerCust));
  }
  for (var i=0; i<result.length; i++) {
    var list = document.getElementById('bellevue');
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(hoursOpen[i] + ': ' + result[i] + " cookies"));
    list.appendChild(item);
    bellevueTotal+= result[i];
  }
  var bellevueNewTotal = document.createElement('li');
  bellevueNewTotal.appendChild(document.createTextNode('Total: ' + bellevueTotal + " cookies"));
  list.appendChild(bellevueNewTotal);

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
  var alkiTotal = 0;
  var hoursOpen = ['10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM'];
  for (var i=0; i<hoursOpen.length; i++) {
    result.push(parseInt(alki.randCustPerHour(alki.minCustPerHour, alki.maxCustPerHour) * alki.avgCookiesPerCust));
  }
  for (var i=0; i<result.length; i++) {
    var list = document.getElementById('alki');
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(hoursOpen[i] + ': ' + result[i] + " cookies"));
    list.appendChild(item);
    alkiTotal+= result[i];
  }

  var alkiNewTotal = document.createElement('li');
  alkiNewTotal.appendChild(document.createTextNode('Total: ' + alkiTotal + " cookies"));
  list.appendChild(alkiNewTotal);

  return list;
}

alkiDailyCookiesByLocation();
