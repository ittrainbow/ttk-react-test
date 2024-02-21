export const fetchData = async (url: string) => {
  const data = await fetch(url).then((resp) => resp.json())
  return data
}
