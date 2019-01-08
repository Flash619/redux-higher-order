const snakeCaseToCamelCase = (string) => {
  string = string.toLowerCase()
  const n = /(_\w)/g
  const c = (m) => m[1].toUpperCase()
  return string.replace(n, c)
}

export default snakeCaseToCamelCase
