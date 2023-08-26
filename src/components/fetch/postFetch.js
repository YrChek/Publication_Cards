export default async function postFetch(content) {
  try {
    const response = await fetch(`http://localhost:7070/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Ilnas Gilyasov',
        content: content
      })
    })
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return true
  } catch (e) {
    console.log(e)
    return false
  } 
}
