const getRestfulReducers = (restfulActionTypes) => {
  const o = {}
  o['all'] = (state = [], action) => {
    switch (action.type) {
      case restfulActionTypes.GET:
        return []
      case restfulActionTypes.GET_FULFILLED:
        return action.payload
    }
  }
  o['byId'] = (state = {}, action) => {
    switch (action.type) {
      case restfulActionTypes.GET:
        return []
      case restfulActionTypes.GET_FULFILLED:
        return action.payload
    }
  }
  o['getLoading'] = (state = false, action) => {
    switch (action.type) {
      case restfulActionTypes.GET:
        return true
      case restfulActionTypes.GET_FULFILLED:
      case restfulActionTypes.GET_FAILED:
        return false
    }
  }
  o['postLoading'] = (state = false, action) => {
    switch (action.type) {
      case restfulActionTypes.POST:
        return true
      case restfulActionTypes.POST_FULFILLED:
      case restfulActionTypes.POST_FAILED:
        return false
    }
  }
  o['patchLoading'] = (state = false, action) => {
    switch (action.type) {
      case restfulActionTypes.PATCH:
        return true
      case restfulActionTypes.PATCH_FULFILLED:
      case restfulActionTypes.PATCH_FAILED:
        return false
    }
  }
  o['updateLoading'] = (state = false, action) => {
    switch (action.type) {
      case restfulActionTypes.UPDATE:
        return true
      case restfulActionTypes.UPDATE_FULFILLED:
      case restfulActionTypes.UPDATE_FAILED:
        return false
    }
  }
  o['deleteLoading'] = (state = false, action) => {
    switch (action.type) {
      case restfulActionTypes.DELETE:
        return true
      case restfulActionTypes.DELETE_FULFILLED:
      case restfulActionTypes.DELETE_FAILED:
        return false
    }
  }
  return o
}

export default getRestfulReducers
