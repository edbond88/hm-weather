let myHeaders = new Headers({
  'Accept': 'application/json',
  'Content-Type': 'application/json'
})

const defaultParams = {
  url: '/',
  method: 'GET',
  mode: 'cors',
  credentials: 'same-origin',
  headers: myHeaders,
  body: null
}

export default function serverRequest (params) {
  const {
    url,
    method,
    mode,
    credentials,
    headers,
    body
  } = { ...defaultParams, ...params }

  console.log('req: ', params)

  let requestOpts = {
    method,
    mode,
    credentials,
    headers
  }

  if (method === 'PUT' || method === 'POST') {
    requestOpts.body = JSON.stringify(body)
  }

  return fetch(url, requestOpts)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response
    })
    .then((response) => {
      return response.json()
    })
    .catch((error) => {
      console.error(error)
      throw new Error(error)
    })
}
