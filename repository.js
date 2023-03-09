
// make the request to the API
// fetch() returns a promise
export async function fetchApiData (query) {
    const baseQuery = 'https://health.data.ny.gov/resource/gnzp-ekau.json'
    const response = await fetch(`${baseQuery}${query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-App-Token': 'frMEX8tSiv4BT2K6zo8qzpXAk'
      }
    })
  
    // check the response status
    if (response.ok) {
      const data = response.json()
      return data
    } else {
      const err = await response.text()
      alert(err)
      console.error(err)
    }
  }