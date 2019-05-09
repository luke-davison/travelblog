var map;
var startLatLng;
var endLatLng;
var centerLatLng;
var zoom;
var directionsService;
var directionsDisplay;

function initMap() {
  const event = findCurrentActivity()
  map = new google.maps.Map(document.getElementById('map'), {
    center: getCenter(event.start, event.end),
    disableDefaultUI: true,
    // draggable: false,
    zoom: event.zoom
  });
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
