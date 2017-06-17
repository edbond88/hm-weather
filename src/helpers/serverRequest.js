
const defaultParams = {
  url: '/',
  method: 'POST',
  mode: 'cors',
  credentials: 'same-origin'
}

export default function serverRequest (params) {
  const {
    url,
    method,
    mode,
    credentials
  } = { ...defaultParams, ...params }

  let requestOpts = {
    method,
    mode,
    credentials
  }

  return fetch(url, requestOpts)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(Error('Server error'))
      }
      return response
    })
    .then(response => {
      return response.json()
    })
    .catch(error => {
      return Promise.reject(Error(error))
    })
}
