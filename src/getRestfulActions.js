import 'babel-polyfill'
import snakeCaseToCamelCase from './utils/snakeCaseToCamelCase'

const getRestfulActions = (restfulActionTypes) => {
  const o = {}
  Object.keys(restfulActionTypes).forEach((k) => {
    o[snakeCaseToCamelCase(k)] = (payload) => ({ type: restfulActionTypes[k], payload: payload })
  })
  return o
}

export default getRestfulActions
