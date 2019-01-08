const snakeCaseToCamelCase = (string) => {
  const n = /(_\w)/g
  const c = (m) => m[1].toUpperCase()
  return string.replace(n, c)
}

export default snakeCaseToCamelCase
