//const now = new Date()
const now = new Date(2019, 6, 1, 9, 45) // used for testing

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
  return {lat, lng}
}

function getDayOfWeek(date) {
  return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()]
}

function getLocalTime({timezone, date} = {}) {
  const offset = timezone ? getTimezoneOffset(timezone) : now.getTimezoneOffset()
  return new Date(getUtcTime(date).getTime() + (offset * 60000))
}

function getPrettyDate(date) {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

function getPrettyTime(date) {
  const hours24 = date.getHours()
  const hours = hours24 > 12 ? hours24 - 12 : (hours24 === 0 ? 12 : hours24)
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const abbr = hours24 > 11 ? 'PM' : 'AM'
  
  return `${hours}:${minutes}${abbr}`
}

function getTimeFromString(string) {
  const [dateString, timeString] = string.split(' ')
  const [year, month, day] = dateString.split('/')
  const [hour, restofTime] = timeString.split(':')
  const minute = restofTime.slice(0, 2)
  return new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute))
}

function getTimezoneFromString(string) {
  return string.slice(-2)
}

function getTimezoneOffset(timezone) {
  console.log(timezone)
  switch (timezone) {
    case 'et': return -(6 * 60)
    case 'mt': return -(7 * 60)
    case 'nz': return (12 * 60)
    case 'pt': return -(8 * 60)
    case 'utc': return 0
    default: return 0
  }
}

function getUtcTime(date) {
  if (!date) {
    date = now
  }
  return new Date(date.getTime() + (date.getTimezoneOffset() * 60000))
}
