/* eslint-disable no-unsafe-finally */
const getFetch = async (url, params=false)  => {
  let error = false;
  let data = [];
  try {
    const response = params ? await fetch(`http://localhost:7070/${url}/${params}`) : await fetch(`http://localhost:7070/${url}`)
    if (!response.ok) {
      error = response.status 
      console.log('401')
      throw new Error(response.statusText)
    }
      data = await response.json()
  } catch (e) {
    console.dir(e)
    console.log('404')
    error ? null : error = e.message

  } finally {
      return {data, error}
  }
}

export default getFetch
