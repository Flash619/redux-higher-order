import restfulActionTypes from './restfulActionTypes'

const getRestfulActionTypes = modelName => {
  const o = {}
  restfulActionTypes.forEach(a => { o[a] = modelName + '/' + a })
  return o
}

export default getRestfulActionTypes
