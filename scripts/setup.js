var map;
var directionsService;
var directionsDisplay;


function initMap() {
  const {travelType, start, end, via, zoom} = findCurrentActivity()
  const mapOptions = {
    center: getCenter(start, end),
    disableDefaultUI: true,
    // draggable: false,
    zoom: zoom
  }

  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  if (travelType === 'plane') {
    const lineSymbol = {
      path: 'M 0,-1 0,1',
      strokeOpacity: 1,
      scale: 4
    };
    const flightOptions = {
      path: [start, end],
      strokeOpacity: 0,
      icons: [{
        icon: lineSymbol,
        offset: '0',
        repeat: '20px'
      }],
      map
    }
    new google.maps.Polyline(flightOptions);
  }

  if (travelType === 'car') {
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);
    var request = {
      origin: start,
      destination: end,
      travelMode: 'DRIVING',
      waypoints: (via || []).map((location) => {return {location, stopover: true}})
    };
    directionsService.route(request, (result, status) => {
      if (status == 'OK') {
        directionsDisplay.setDirections(result);
      }
    });
  }
}

function findCurrentActivity() {

  return timetable.find((event, index) => {
    const nextEvent = timetable.length > index + 1 ? timetable[index + 1] : undefined
    if (!nextEvent) {
      return true
    }

    const eventDate = getTimeFromString(nextEvent.startTime)
    return eventDate > now
  }) || {}
}

function updateTimesOnPage() {
  const yourTime = getLocalTime()
  document.getElementById('your-time').innerHTML = `
    <div>Your Time</div>
    <div>${getDayOfWeek(yourTime)}</div>
    <div>${getPrettyTime(yourTime)}</div>
    <div>${getPrettyDate(yourTime)}</div>
  `

  const ourTimezone =getTimezoneFromString(findCurrentActivity().startTime)
  const ourTime = getLocalTime({timezone: ourTimezone})
  document.getElementById('our-time').innerHTML = `
    <div>Our Time</div>
    <div>${getDayOfWeek(ourTime)}</div>
    <div>${getPrettyTime(ourTime)}</div>
    <div>${getPrettyDate(ourTime)}</div>
  `

  if (now.getTimezoneOffset() !== -getTimezoneOffset('nz')) {
    const nzTime = getLocalTime({timezone: 'nz'})
    document.getElementById('nz-time').innerHTML = `
      <div>New Zealand Time</div>
      <div>${getDayOfWeek(nzTime)}</div>
      <div>${getPrettyTime(nzTime)}</div>
      <div>${getPrettyDate(nzTime)}</div>
    `
  }
}

function updateEventDetails(event) {
  document.getElementById('event-details').innerHTML = `
    <div>${event.name}</div>
  `
}

updateTimesOnPage()
updateEventDetails(findCurrentActivity())
