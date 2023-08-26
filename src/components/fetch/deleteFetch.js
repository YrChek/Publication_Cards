export default async function deleteFetch(id) {
  try {
    const response = await fetch(`http://localhost:7070/posts/`+ id, {
      method: 'DELETE',
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
