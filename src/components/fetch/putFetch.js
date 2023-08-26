export default async function putFetch(id, content) {
  try {
    const created = Date.now()
    const response = await fetch(`http://localhost:7070/posts/`+ id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Ilnas Gilyasov',
        content: content,
        created
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
