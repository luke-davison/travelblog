var newZealand = {lat: -39.6775, lng: 174.5588}
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
var bryce = {lat: 37.6723, lng: -112.1569}
var bryceCanyon = {lat: 37.6101, lng: -112.18}
var tropic = {lat: 37.6223, lng: -112.0813}
var evanston = {lat: 41.2567, lng: -110.9591}
var oldFaithful = {lat: 44.4558, lng: -110.832}
var yellowstone = {lat: 44.6653, lng: -110.4663}
var towerJunction = {lat: 44.9152, lng: -110.4163}
var lamarValley = {lat: 44.8676, lng: -110.1792}
var mammothJunction = {lat: 44.9753, lng: -110.702}
var westYellowstone = {lat: 44.6275, lng: -111.3318}
var saltLakeCity = {lat: 40.7819, lng: -111.9816}
var orlando = {lat: 28.4316, lng: -81.3082}
var diceTowerCon = {lat: 28.3594, lng: -81.4934}
var newYork = {lat: 40.753, lng: -73.9787}

var timetable = [
  {
    startTime: '2019/05/09 9:00nz',
    name: 'Still in New Zealand',
    start: newZealand,
    zoom: 6
  },
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
    startTime: '2019/06/27 19:00mt',
    name: 'Staying in Glendale',
    start: glendale,
    zoom: 10
  },
  {
    startTime: '2019/06/28 8:00mt',
    name: 'Driving to Bryce Canyon',
    travelType: 'car',
    start: glendale,
    end: bryce,
    zoom: 10
  },
  {
    startTime: '2019/06/28 12:00mt',
    name: 'Exploring Bryce Canyon',
    start: bryceCanyon,
    zoom: 13
  },
  {
    startTime: '2019/06/28 18:00mt',
    name: 'Driving to Tropic',
    travelType: 'car',
    start: bryce,
    end: tropic,
    zoom: 12
  },
  {
    startTime: '2019/06/28 19:00mt',
    name: 'Staying in Tropic',
    start: tropic,
    zoom: 12
  },
  {
    startTime: '2019/06/29 8:00mt',
    name: 'Driving to Evanston',
    travelType: 'car',
    start: tropic,
    end: evanston,
    zoom: 7
  },
  {
    startTime: '2019/06/29 19:00mt',
    name: 'Staying in Evanston',
    start: evanston,
    zoom: 10
  },
  {
    startTime: '2019/06/30 8:00mt',
    name: 'Driving to Yellowstone',
    travelType: 'car',
    start: evanston,
    end: oldFaithful,
    zoom: 7
  },
  {
    startTime: '2019/06/30 19:00mt',
    name: 'Staying near Old Faithful',
    start: oldFaithful,
    zoom: 12
  },
  {
    startTime: '2019/07/01 8:00mt',
    name: 'Exploring Yellowstone',
    travelType: 'car',
    start: oldFaithful,
    via: [yellowstone],
    end: towerJunction,
    zoom: 11
  },
  {
    startTime: '2019/07/01 19:00mt',
    name: 'Staying at Tower Junction',
    start: towerJunction,
    zoom: 12
  },
  {
    startTime: '2019/07/02 8:00mt',
    name: 'Exploring Yellowstone',
    travelType: 'car',
    start: towerJunction,
    via: [lamarValley],
    end: westYellowstone,
    zoom: 10
  },
  {
    startTime: '2019/07/02 19:00mt',
    name: 'Staying west of Yellowstone',
    start: westYellowstone,
    zoom: 10
  },
  {
    startTime: '2019/07/03 8:00mt',
    name: 'Driving to Salt Lake City',
    travelType: 'car',
    start: westYellowstone,
    end: saltLakeCity,
    zoom: 7
  },
  {
    startTime: '2019/07/03 16:00mt',
    name: 'Staying in Salt Lake City',
    travelType: 'car',
    start: saltLakeCity,
    zoom: 10
  },
  {
    startTime: '2019/07/04 9:00mt',
    name: 'Flying to Orlando',
    travelType: 'plane',
    start: saltLakeCity,
    end: orlando,
    zoom: 5
  },
  {
    startTime: '2019/07/04 16:00mt',
    name: 'Staying in Orlando',
    start: orlando,
    zoom: 11
  },
  {
    startTime: '2019/07/05 8:00mt',
    name: 'Attending Dice Tower Con',
    start: diceTowerCon,
    zoom: 13
  },
  {
    startTime: '2019/07/05 19:00mt',
    name: 'Staying in Orlando',
    start: orlando,
    zoom: 11
  },
  {
    startTime: '2019/07/06 8:00mt',
    name: 'Playing board games at Dice Tower Con',
    start: diceTowerCon,
    zoom: 13
  },
  {
    startTime: '2019/07/06 19:00mt',
    name: 'Staying in Orlando',
    start: orlando,
    zoom: 11
  },
  {
    startTime: '2019/07/07 8:00mt',
    name: 'Hopefully not buying too many games at Dice Tower Con',
    start: diceTowerCon,
    zoom: 13
  },
  {
    startTime: '2019/07/07 19:00mt',
    name: 'Staying in Orlando',
    start: orlando,
    zoom: 11
  },
  {
    startTime: '2019/07/08 11:00mt',
    name: 'Overnight train to New York',
    travelType: 'train',
    start: orlando,
    end: newYork,
    zoom: 5
  },
]