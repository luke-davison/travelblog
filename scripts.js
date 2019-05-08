var map;
var startLatLng;
var endLatLng;
var centerLatLng;
var zoom;
var directionsService;
var directionsDisplay;

var auckland = {lat: -37.003, lng: 174.7893}
var sanFrancisco = {lat: 37.7992, lng: -122.4316}
var yosemite = {lat: 37.7378, lng: -119.5722}
var juneLake = {lat: 37.8188, lng: -119.0634}
var lasVegas = {lat: 36.1145, lng: -115.1696}
var grandCanyon = {lat: 36.0726, lng: -112.121}
var grandCanyonEast = {lat: 36.0392, lng: -111.8296}
var marbleCanyon = {lat: 36.8116, lng: -111.6292}
var page = {lat: 36.8953, lng: -111.4882}
var springdale = {lat: 37.1889, lng: -112.9988}
var zion = {lat: 37.2528, lng: -112.9557}
var glendale = {lat: 37.3214, lng: -112.5973}

var timetable = [
  {
    startTime: '2019/06/19 7:45nz',
    name: 'Flying to San Francisco',
    travelType: 'plane',
    start: auckland,
    end: sanFrancisco,
    zoom: 3
  },
  {
    startTime: '2019/06/19 13:00pt',
    name: 'Exploring San Francisco',
    start: sanFrancisco,
    zoom: 12
  },
  {
    startTime: '2019/06/21 8:00pt',
    name: 'Driving to Yosemite National Park',
    travelType: 'car',
    start: sanFrancisco,
    end: yosemite,
    zoom: 8
  },
  {
    startTime: '2019/06/21 15:00pt',
    name: 'Exploring Yosemite National Park',
    start: yosemite,
    zoom: 12
  },
  {
    startTime: '2019/06/22 14:00pt',
    name: 'Leaving Yosemite National Park',
    travelType: 'car',
    start: yosemite,
    end: juneLake,
    zoom: 10
  },
  {
    startTime: '2019/06/22 20:00pt',
    name: 'Staying at June Lake',
    start: juneLake,
    zoom: 12
  },
  {
    startTime: '2019/06/23 8:00pt',
    name: 'Driving to Las Vegas',
    travelType: 'car',
    start: juneLake,
    end: lasVegas,
    zoom: 8
  },
  {
    startTime: '2019/06/23 20:00pt',
    name: 'Staying in Las Vegas',
    start: lasVegas,
    zoom: 13
  },
  {
    startTime: '2019/06/24 8:00pt',
    name: 'Driving to Grand Canyon',
    travelType: 'car',
    start: lasVegas,
    end: grandCanyon,
    zoom: 8
  },
  {
    startTime: '2019/06/24 14:00mt',
    name: 'Staying at Grand Canyon',
    start: grandCanyon,
    zoom: 13
  },
  {
    startTime: '2019/06/25 8:00mt',
    name: 'Exploring Grand Canyon South Rim',
    travelType: 'car',
    start: grandCanyon,
    end: grandCanyonEast,
    zoom: 11
  },
  {
    startTime: '2019/06/25 13:00mt',
    name: 'Driving to Marble Canyon',
    travelType: 'car',
    start: grandCanyonEast,
    end: marbleCanyon,
    zoom: 9
  },
  {
    startTime: '2019/06/25 18:00mt',
    name: 'Staying at Marble Canyon',
    start: marbleCanyon,
    zoom: 13
  },
  {
    startTime: '2019/06/26 7:30mt',
    name: 'Driving to Page',
    travelType: 'car',
    start: marbleCanyon,
    end: page,
    zoom: 10
  },
  {
    startTime: '2019/06/26 9:00mt',
    name: 'Exploring around Page',
    start: page,
    zoom: 12
  },
  {
    startTime: '2019/06/26 12:00mt',
    name: 'Driving to Springdale',
    travelType: 'car',
    start: page,
    end: springdale,
    zoom: 9
  },
  {
    startTime: '2019/06/26 19:00mt',
    name: 'Staying in Springdale',
    start: springdale,
    zoom: 13
  },
  {
    startTime: '2019/06/27 6:00mt',
    name: 'Exploring Zion',
    start: zion,
    zoom: 13
  },
  {
    startTime: '2019/06/27 15:00mt',
    name: 'Driving to Glendale',
    travelType: 'car',
    start: springdale,
    end: glendale,
    zoom: 11
  },
  {
    startTime: '2019/06/27 15:00mt',
    name: 'Staying in Glendale',
    start: glendale,
    zoom: 10
  },
]

function initMap(index = 19) {
  map = new google.maps.Map(document.getElementById('map'), {
    center: getCenter(timetable[index].start, timetable[index].end),
    disableDefaultUI: true,
    // draggable: false,
    zoom: timetable[index].zoom
  });
}

function getCenter(coord1, coord2) {
  if (!coord2) {
    return coord1
  }
  const lat = (coord1.lat + coord2.lat) / 2
  let lng = (coord1.lng + coord2.lng) / 2
  if ((coord1.lng > 90 && coord2.lng < -90) || (coord2.lng > 90 && coord1.lng < -90)) {
    lng = (coord1.lng + coord2.lng + 360) / 2
    if (lng > 180) {
      lng -= 360
    }
  }
  // console.log(lat, lng)
  return {lat, lng}
}