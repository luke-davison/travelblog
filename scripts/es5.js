"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// const now = new Date()
var now = new Date(2019, 5, 22, 7, 0); // used for testing

function getCenter(coord1, coord2) {
  if (!coord2) {
    return coord1;
  }

  var lat = (coord1.lat + coord2.lat) / 2;
  var lng = (coord1.lng + coord2.lng) / 2;

  if (coord1.lng > 90 && coord2.lng < -90 || coord2.lng > 90 && coord1.lng < -90) {
    lng = (coord1.lng + coord2.lng + 360) / 2;

    if (lng > 180) {
      lng -= 360;
    }
  }

  return {
    lat: lat,
    lng: lng
  };
}

function getDayOfWeek(date) {
  return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];
}

function getLocalTime() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      timezone = _ref.timezone;

  if (!timezone) {
    return now;
  }

  var utcTime = getUtcTime();
  var offset = getTimezoneOffset(timezone);
  var localDate = new Date(utcTime.getTime() - offset * 60000);
  return localDate;
}

function getPrettyDate(date) {
  return "".concat(date.getDate(), "/").concat(date.getMonth() + 1, "/").concat(date.getFullYear());
}

function getPrettyTime(date) {
  var hours24 = date.getHours();
  var hours = hours24 > 12 ? hours24 - 12 : hours24 === 0 ? 12 : hours24;
  var minutes = String(date.getMinutes()).padStart(2, '0');
  var abbr = hours24 > 11 ? 'PM' : 'AM';
  return "".concat(hours, ":").concat(minutes).concat(abbr);
}

function getTimeFromString(string) {
  var _string$split = string.split(' '),
      _string$split2 = _slicedToArray(_string$split, 2),
      dateString = _string$split2[0],
      timeString = _string$split2[1];

  var _dateString$split = dateString.split('/'),
      _dateString$split2 = _slicedToArray(_dateString$split, 3),
      year = _dateString$split2[0],
      month = _dateString$split2[1],
      day = _dateString$split2[2];

  var _timeString$split = timeString.split(':'),
      _timeString$split2 = _slicedToArray(_timeString$split, 2),
      hour = _timeString$split2[0],
      restofTime = _timeString$split2[1];

  var minute = restofTime.slice(0, 2);
  return new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute));
}

function getTimezoneFromString(string) {
  return string.slice(-2);
}

function getTimezoneOffset(timezone) {
  switch (timezone) {
    case 'et':
      return 4 * 60;

    case 'mt':
      return 6 * 60;

    case 'nz':
      return -(12 * 60);

    case 'pt':
      return 7 * 60;

    case 'utc':
      return 0;

    default:
      return 0;
  }
}

function convertToCurrentTimezone(_ref2) {
  var date = _ref2.date,
      timezone = _ref2.timezone;
  var utcTime = getUtcTime({
    date: date,
    timezone: timezone
  });
  var timezoneOffset = now.getTimezoneOffset();
  return new Date(utcTime.getTime() - timezoneOffset * 60000);
}

function getUtcTime() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      date = _ref3.date,
      timezone = _ref3.timezone;

  if (!date) {
    date = now;
  }

  var timezoneOffset = getTimezoneOffset(timezone);

  if (!timezone) {
    timezoneOffset = date.getTimezoneOffset();
  }

  var utcTime = new Date(date.getTime() + timezoneOffset * 60000);
  return utcTime;
}

function getDifferenceInHours(date) {
  var now = getUtcTime().getTime();
  var then = getUtcTime({
    date: date
  }).getTime() + getTimezoneOffset();
  var hoursAgo = Math.floor((then - now) / (1000 * 60 * 60));

  if (hoursAgo === -1) {
    return '1 hour ago';
  }

  if (hoursAgo === 1) {
    return 'In 1 hour\'s time';
  }

  if (hoursAgo <= 0) {
    return -hoursAgo + ' hour(s) ago';
  } else {
    return 'In ' + hoursAgo + ' hours\' time';
  }
}

var newZealand = {
  lat: -39.6775,
  lng: 174.5588
};
var auckland = {
  lat: -37.003,
  lng: 174.7893
};
var sanFrancisco = {
  lat: 37.7992,
  lng: -122.4316
};
var yosemite = {
  lat: 37.7378,
  lng: -119.5722
};
var juneLake = {
  lat: 37.8188,
  lng: -119.0634
};
var lasVegas = {
  lat: 36.1145,
  lng: -115.1696
};
var grandCanyon = {
  lat: 36.0726,
  lng: -112.121
};
var grandCanyonEast = {
  lat: 36.0392,
  lng: -111.8296
};
var marbleCanyon = {
  lat: 36.8116,
  lng: -111.6292
};
var page = {
  lat: 36.8953,
  lng: -111.4882
};
var springdale = {
  lat: 37.1889,
  lng: -112.9988
};
var zion = {
  lat: 37.2528,
  lng: -112.9557
};
var glendale = {
  lat: 37.3214,
  lng: -112.5973
};
var bryce = {
  lat: 37.6723,
  lng: -112.1569
};
var bryceCanyon = {
  lat: 37.6101,
  lng: -112.18
};
var tropic = {
  lat: 37.6223,
  lng: -112.0813
};
var evanston = {
  lat: 41.2567,
  lng: -110.9591
};
var grandTeton = {
  lat: 43.7252,
  lng: -110.6537
};
var oldFaithful = {
  lat: 44.4558,
  lng: -110.832
};
var yellowstone = {
  lat: 44.6653,
  lng: -110.4663
};
var towerJunction = {
  lat: 44.9152,
  lng: -110.4163
};
var lamarValley = {
  lat: 44.8676,
  lng: -110.1792
};
var westYellowstone = {
  lat: 44.6275,
  lng: -111.3318
};
var saltLakeCity = {
  lat: 40.7819,
  lng: -111.9816
};
var orlando = {
  lat: 28.4316,
  lng: -81.3082
};
var diceTowerCon = {
  lat: 28.3594,
  lng: -81.4934
};
var jacksonville = {
  lat: 30.3205,
  lng: -81.6701
};
var savannah = {
  lat: 32.1331,
  lng: -81.4473
};
var northCarolina = {
  lat: 36.1639,
  lng: -77.6497
};
var fredericksburg = {
  lat: 38.3324,
  lng: -77.5011
};
var belAir = {
  lat: 39.527,
  lng: -76.2653
};
var newYork = {
  lat: 40.753,
  lng: -73.9787
};
var montreal = {
  lat: 45.5363,
  lng: -73.6428
};
var quebec = {
  lat: 46.8079,
  lng: -71.2279
};
var calgary = {
  lat: 51.0926,
  lng: -114.0018
};
var canmore = {
  lat: 51.0892,
  lng: -115.3588
};
var banff = {
  lat: 51.1783,
  lng: -115.5709
};
var jasper = {
  lat: 52.8733,
  lng: -118.0823
};
var kamloops = {
  lat: 50.6765,
  lng: -120.3345
};
var vancouver = {
  lat: 49.2818,
  lng: -123.1171
};
var timetable = [{
  startTime: '2019/05/09 9:00nz',
  name: 'Still in New Zealand',
  start: newZealand,
  zoom: 6
}, {
  startTime: '2019/06/19 19:00nz',
  name: 'Flying to San Francisco',
  travelType: 'plane',
  start: auckland,
  end: sanFrancisco,
  zoom: 3
}, {
  startTime: '2019/06/19 13:00pt',
  name: 'Exploring San Francisco',
  start: sanFrancisco,
  zoom: 12
}, {
  startTime: '2019/06/21 8:00pt',
  name: 'Driving to Yosemite National Park',
  travelType: 'car',
  start: sanFrancisco,
  end: yosemite,
  zoom: 8
}, {
  startTime: '2019/06/21 13:00pt',
  name: 'Exploring Yosemite National Park',
  start: yosemite,
  zoom: 12
}, {
  startTime: '2019/06/22 14:00pt',
  name: 'Leaving Yosemite National Park',
  travelType: 'car',
  start: yosemite,
  end: juneLake,
  zoom: 10
}, {
  startTime: '2019/06/22 20:00pt',
  name: 'Staying at June Lake',
  start: juneLake,
  zoom: 12
}, {
  startTime: '2019/06/23 8:00pt',
  name: 'Driving to Las Vegas',
  travelType: 'car',
  start: juneLake,
  end: lasVegas,
  zoom: 8
}, {
  startTime: '2019/06/23 16:00pt',
  name: 'Staying in Las Vegas',
  start: lasVegas,
  zoom: 13
}, {
  startTime: '2019/06/24 8:00pt',
  name: 'Driving to Grand Canyon',
  travelType: 'car',
  start: lasVegas,
  end: grandCanyon,
  zoom: 8
}, {
  startTime: '2019/06/24 14:00mt',
  name: 'Staying at Grand Canyon',
  start: grandCanyon,
  zoom: 13
}, {
  startTime: '2019/06/25 8:00mt',
  name: 'Exploring Grand Canyon South Rim',
  travelType: 'car',
  start: grandCanyon,
  end: grandCanyonEast,
  zoom: 11
}, {
  startTime: '2019/06/25 13:00mt',
  name: 'Driving to Marble Canyon',
  travelType: 'car',
  start: grandCanyonEast,
  end: marbleCanyon,
  zoom: 9
}, {
  startTime: '2019/06/25 18:00mt',
  name: 'Staying at Marble Canyon',
  start: marbleCanyon,
  zoom: 13
}, {
  startTime: '2019/06/26 7:30mt',
  name: 'Driving to Page',
  travelType: 'car',
  start: marbleCanyon,
  end: page,
  zoom: 10
}, {
  startTime: '2019/06/26 9:00mt',
  name: 'Exploring around Page',
  start: page,
  zoom: 12
}, {
  startTime: '2019/06/26 12:00mt',
  name: 'Driving to Springdale',
  travelType: 'car',
  start: page,
  end: springdale,
  zoom: 9
}, {
  startTime: '2019/06/26 19:00mt',
  name: 'Staying in Springdale',
  start: springdale,
  zoom: 13
}, {
  startTime: '2019/06/27 6:00mt',
  name: 'Exploring Zion',
  start: zion,
  zoom: 13
}, {
  startTime: '2019/06/27 15:00mt',
  name: 'Driving to Glendale',
  travelType: 'car',
  start: springdale,
  end: glendale,
  zoom: 11
}, {
  startTime: '2019/06/27 19:00mt',
  name: 'Staying in Glendale',
  start: glendale,
  zoom: 10
}, {
  startTime: '2019/06/28 8:00mt',
  name: 'Driving to Bryce Canyon',
  travelType: 'car',
  start: glendale,
  end: bryce,
  zoom: 10
}, {
  startTime: '2019/06/28 12:00mt',
  name: 'Exploring Bryce Canyon',
  start: bryceCanyon,
  zoom: 13
}, {
  startTime: '2019/06/28 18:00mt',
  name: 'Driving to Tropic',
  travelType: 'car',
  start: bryce,
  end: tropic,
  zoom: 12
}, {
  startTime: '2019/06/28 19:00mt',
  name: 'Staying in Tropic',
  start: tropic,
  zoom: 12
}, {
  startTime: '2019/06/29 8:00mt',
  name: 'Driving to Evanston',
  travelType: 'car',
  start: tropic,
  end: evanston,
  zoom: 7
}, {
  startTime: '2019/06/29 19:00mt',
  name: 'Staying in Evanston',
  start: evanston,
  zoom: 10
}, {
  startTime: '2019/06/30 8:00mt',
  name: 'Driving to Yellowstone',
  travelType: 'car',
  start: evanston,
  end: oldFaithful,
  via: [grandTeton],
  zoom: 7
}, {
  startTime: '2019/06/30 19:00mt',
  name: 'Staying near Old Faithful',
  start: oldFaithful,
  zoom: 12
}, {
  startTime: '2019/07/01 8:00mt',
  name: 'Exploring Yellowstone',
  travelType: 'car',
  start: oldFaithful,
  via: [yellowstone],
  end: towerJunction,
  zoom: 11
}, {
  startTime: '2019/07/01 19:00mt',
  name: 'Staying at Tower Junction',
  start: towerJunction,
  zoom: 12
}, {
  startTime: '2019/07/02 8:00mt',
  name: 'Exploring Yellowstone',
  travelType: 'car',
  start: towerJunction,
  via: [lamarValley],
  end: westYellowstone,
  zoom: 10
}, {
  startTime: '2019/07/02 19:00mt',
  name: 'Staying west of Yellowstone',
  start: westYellowstone,
  zoom: 10
}, {
  startTime: '2019/07/03 8:00mt',
  name: 'Driving to Salt Lake City',
  travelType: 'car',
  start: westYellowstone,
  end: saltLakeCity,
  zoom: 7
}, {
  startTime: '2019/07/03 16:00mt',
  name: 'Staying in Salt Lake City',
  start: saltLakeCity,
  zoom: 10
}, {
  startTime: '2019/07/04 9:00mt',
  name: 'Flying to Orlando',
  travelType: 'plane',
  start: saltLakeCity,
  end: orlando,
  zoom: 5
}, {
  startTime: '2019/07/04 16:00et',
  name: 'Staying in Orlando',
  start: orlando,
  zoom: 11
}, {
  startTime: '2019/07/05 8:00et',
  name: 'Attending Dice Tower Con',
  start: diceTowerCon,
  zoom: 13
}, {
  startTime: '2019/07/05 19:00et',
  name: 'Staying in Orlando',
  start: orlando,
  zoom: 11
}, {
  startTime: '2019/07/06 8:00et',
  name: 'Playing board games at Dice Tower Con',
  start: diceTowerCon,
  zoom: 13
}, {
  startTime: '2019/07/06 19:00et',
  name: 'Staying in Orlando',
  start: orlando,
  zoom: 11
}, {
  startTime: '2019/07/07 8:00et',
  name: 'Hopefully not buying too many games at Dice Tower Con',
  start: diceTowerCon,
  zoom: 13
}, {
  startTime: '2019/07/07 19:00et',
  name: 'Staying in Orlando',
  start: orlando,
  zoom: 11
}, {
  startTime: '2019/07/08 12:00et',
  name: 'Overnight train to New York',
  travelType: 'train',
  start: orlando,
  via: [jacksonville, savannah, northCarolina, fredericksburg, belAir],
  end: newYork,
  zoom: 5
}, {
  startTime: '2019/07/09 11:00et',
  name: 'Exploring New York',
  start: newYork,
  zoom: 12
}, {
  startTime: '2019/07/14 12:00et',
  name: 'Flight to Quebec',
  travelType: 'plane',
  start: newYork,
  via: [montreal],
  end: quebec,
  zoom: 6
}, {
  startTime: '2019/07/14 17:00et',
  name: 'Exploring Quebec',
  start: quebec,
  zoom: 11
}, {
  startTime: '2019/07/17 8:00et',
  name: 'Train to Montreal',
  travelType: 'plane',
  start: montreal,
  end: quebec,
  zoom: 8
}, {
  startTime: '2019/07/17 12:00et',
  name: 'Exploring Montreal',
  start: montreal,
  zoom: 11
}, {
  startTime: '2019/07/18 18:00et',
  name: 'Flight to Calgary',
  travelType: 'plane',
  start: montreal,
  end: calgary,
  zoom: 4
}, {
  startTime: '2019/07/18 21:00mt',
  name: 'Staying in Calgary',
  travelType: 'plane',
  start: calgary,
  zoom: 10
}, {
  startTime: '2019/07/19 10:00mt',
  name: 'Driving to Banff',
  travelType: 'car',
  start: calgary,
  end: banff,
  zoom: 9
}, {
  startTime: '2019/07/19 12:00mt',
  name: 'Exploring Banff',
  start: banff,
  zoom: 10
}, {
  startTime: '2019/07/19 18:00mt',
  name: 'Staying in Canmore',
  start: canmore,
  zoom: 12
}, {
  startTime: '2019/07/20 9:00mt',
  name: 'Exploring Banff',
  start: banff,
  zoom: 10
}, {
  startTime: '2019/07/20 18:00mt',
  name: 'Staying in Canmore',
  start: canmore,
  zoom: 12
}, {
  startTime: '2019/07/21 9:00mt',
  name: 'Exploring Banff',
  start: banff,
  zoom: 10
}, {
  startTime: '2019/07/21 18:00mt',
  name: 'Staying in Canmore',
  start: canmore,
  zoom: 12
}, {
  startTime: '2019/07/22 9:00mt',
  name: 'Driving to Jasper',
  travelType: 'car',
  start: canmore,
  end: jasper,
  zoom: 7
}, {
  startTime: '2019/07/22 15:00mt',
  name: 'Exploring Jasper',
  start: jasper,
  zoom: 10
}, {
  startTime: '2019/07/24 10:00mt',
  name: 'Driving to Kamloops',
  travelType: 'car',
  start: jasper,
  end: kamloops,
  zoom: 7
}, {
  startTime: '2019/07/24 18:00pt',
  name: 'Staying in Kamloops',
  start: kamloops,
  zoom: 12
}, {
  startTime: '2019/07/25 10:00pt',
  name: 'Driving to Vancouver',
  travelType: 'car',
  start: kamloops,
  end: vancouver,
  zoom: 8
}, {
  startTime: '2019/07/25 15:00pt',
  name: 'Exploring Vancouver',
  start: vancouver,
  zoom: 11
}, {
  startTime: '2019/07/28 20:00et',
  name: 'Flight back to New Zealand',
  travelType: 'plane',
  start: vancouver,
  end: auckland,
  zoom: 3
}, {
  startTime: '2019/07/30 5:00nz',
  name: 'Back in New Zealand',
  start: newZealand,
  zoom: 6
}];
timetable.forEach(function (event) {
  event.startTimeUtc = getUtcTime();
});
var map;

function initMap() {
  var _timetable$currentAct = timetable[currentActivityIndex],
      start = _timetable$currentAct.start,
      end = _timetable$currentAct.end,
      zoom = _timetable$currentAct.zoom;
  var mapOptions = {
    center: getCenter(start, end),
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
    // disableDefaultUI: true,
    // draggable: false,
    zoom: zoom
  };
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  drawFlights();
  drawRoadTrips();
}

var currentActivityIndex = timetable.findIndex(function (event, index) {
  var nextEvent = timetable.length > index + 1 ? timetable[index + 1] : undefined;

  if (!nextEvent) {
    return true;
  }

  var date = getTimeFromString(nextEvent.startTime);
  var timezone = getTimezoneFromString(nextEvent.startTime);
  var eventDate = convertToCurrentTimezone({
    date: date,
    timezone: timezone
  });
  return eventDate > now;
}) || 0;
var ourCurrentActivityIndex = currentActivityIndex;

function getRecentEvents() {
  return timetable.filter(function (event, index) {
    return Math.abs(index - currentActivityIndex) < 3;
  });
}

function updateTimesOnPage() {
  var yourTime = getLocalTime();
  document.getElementById('your-time').innerHTML = "\n    <div>Your Time</div>\n    <div>".concat(getPrettyTime(yourTime), "</div>\n    <div>").concat(getDayOfWeek(yourTime), " ").concat(getPrettyDate(yourTime), "</div>\n  ");
  var ourTimezone = getTimezoneFromString(timetable[ourCurrentActivityIndex].startTime);
  var ourTime = getLocalTime({
    timezone: ourTimezone
  });

  if (timetable[ourCurrentActivityIndex].travelType === 'plane') {
    document.getElementById('our-time').innerHTML = "\n      <div>Our Time</div>\n      <div>In Flight</div>\n    ";
  } else {
    document.getElementById('our-time').innerHTML = "\n      <div>Our Time</div>\n      <div>".concat(getPrettyTime(ourTime), "</div>\n      <div>").concat(getDayOfWeek(ourTime), " ").concat(getPrettyDate(ourTime), "</div>\n    ");
  }

  document.getElementById('nz-time').innerHTML = "\n      <div>Where are Luke and Betty?</div>";
}

function setEvent(index) {
  currentActivityIndex = index;
  updateTimesOnPage();
  createEventsList();
  initMap();
}

function createEventsList() {
  var eventsList = '';
  var numOfEvents = 2;

  for (var i = currentActivityIndex - numOfEvents; i < currentActivityIndex; i++) {
    if (i < 0) {
      eventsList += '<a class="hide"></a>';
      continue;
    }

    eventsList += createEvent(i);
  }

  eventsList += createEvent(currentActivityIndex);

  for (var _i2 = currentActivityIndex + 1; _i2 < currentActivityIndex + numOfEvents + 1; _i2++) {
    if (_i2 > timetable.length - 1) {
      continue;
    }

    eventsList += createEvent(_i2);
  }

  document.getElementById('event-list').innerHTML = eventsList;
}

function createEvent(i) {
  var event = timetable[i];
  var startTimezone = getTimezoneFromString(i > ourCurrentActivityIndex ? timetable[i].startTime : timetable[i + 1].startTime);
  var startDate = getTimeFromString(i > ourCurrentActivityIndex ? timetable[i].startTime : timetable[i + 1].startTime);
  var localStartDate = convertToCurrentTimezone({
    timezone: startTimezone,
    date: startDate
  });
  var hoursAgo = getDifferenceInHours(localStartDate);
  var className = i === ourCurrentActivityIndex ? 'in-progress' : i === currentActivityIndex ? 'viewing' : '';
  return "\n    <a onClick=\"setEvent(".concat(i, ")\" class=\"").concat(className, "\">\n      <div>").concat(i === ourCurrentActivityIndex ? '' : hoursAgo, "</div>\n      <div>").concat(event.name, "</div>\n    </a>\n    ");
}

function drawFlights() {
  var _timetable$currentAct2 = timetable[currentActivityIndex],
      travelType = _timetable$currentAct2.travelType,
      start = _timetable$currentAct2.start,
      via = _timetable$currentAct2.via,
      end = _timetable$currentAct2.end;

  if (travelType !== 'plane' && travelType !== 'train') {
    return;
  }

  var linesToDraw = [];

  if (via) {
    via.forEach(function (place, index) {
      linesToDraw.push({
        start: index > 0 ? via[index - 1] : start,
        end: place
      });
    });
    linesToDraw.push({
      start: via[via.length - 1],
      end: end
    });
  } else {
    linesToDraw.push({
      start: start,
      end: end
    });
  }

  var lineSymbol = {
    path: 'M 0,-1 0,1',
    strokeOpacity: 1,
    scale: 4
  };
  linesToDraw.forEach(function (lineToDraw) {
    var flightOptions = {
      path: [lineToDraw.start, lineToDraw.end],
      strokeOpacity: 0,
      icons: [{
        icon: lineSymbol,
        offset: '0',
        repeat: '20px'
      }],
      map: map
    };
    new google.maps.Polyline(flightOptions);
  });
  var bounds = new google.maps.LatLngBounds();
  bounds.extend(start);
  bounds.extend(end);
  map.fitBounds(bounds);
}

function drawRoadTrips() {
  var _timetable$currentAct3 = timetable[currentActivityIndex],
      travelType = _timetable$currentAct3.travelType,
      start = _timetable$currentAct3.start,
      via = _timetable$currentAct3.via,
      end = _timetable$currentAct3.end;

  if (travelType !== 'car' || !end) {
    return;
  }

  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer({// suppressMarkers: true
  });
  directionsDisplay.setMap(map);
  var request = {
    origin: start,
    destination: end,
    travelMode: 'DRIVING',
    waypoints: (via || []).map(function (location) {
      return {
        location: location,
        stopover: true
      };
    })
  };
  directionsService.route(request, function (result, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(result);
    }
  });
}

function createButtons() {}

updateTimesOnPage();
createEventsList();