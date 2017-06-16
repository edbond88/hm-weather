import { serverRequest } from '../helpers/'

export default function requestCalendarData (params) {
  return serverRequest({
    url: process.env.PUBLIC_URL + '/cal.json'
  })
}
