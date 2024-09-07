export const getYouTubeVideoId = url => {
  const parsedUrl = new URL(url)
  return parsedUrl.searchParams.get("v")
}
export const ExtractNumber = str => {
  // Split the string by hyphen
  const parts = str.split("-")

  // Take the last part and convert it to a number
  const number = parseInt(parts[parts.length - 1], 10)
  return number
}
export const getRandomFloat = (min, max) => {
  return Math.random() * (max - min) + min
}
export const handleLabel = (obj, duration, setVisibMessLabel, setMessLabel) => {
  // obj = title và icon
  setMessLabel(obj)
  setVisibMessLabel(true)
  setTimeout(() => {
    setVisibMessLabel(false)
  }, duration)
}
