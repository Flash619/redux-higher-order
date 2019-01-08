import restfulActionTypes from './restfulActionTypes'
import snakeCaseToCamelCase from './utils/snakeCaseToCamelCase'

const getRestfulActions = () => {
  const o = {}
  const func = (action, payload) => ({ type: action, payload: payload })
  restfulActionTypes.forEach((t) => { o[snakeCaseToCamelCase(t)] = func.bind({}) })
  return o
}

export default getRestfulActions
