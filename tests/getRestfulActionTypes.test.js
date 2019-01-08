import 'babel-polyfill'
import assert from 'assert'
import getRestfulActions from '../lib/getRestfulActionTypes'
import restfulActionTypes from '../lib/restfulActionTypes'

describe('getRestfulActions', () => {
  it("should return an object who's keys correlate to a list of predefined restful action types", () => {
    const model = 'customModel'
    const actionTypes = getRestfulActions(model)

    assert.equal(
      actionTypes.GET,
      model + '/GET',
      'action type value does not match expected value'
    )

    assert.equal(
      Object.keys(actionTypes).length,
      restfulActionTypes.length,
      'number of action creators generated does not match expected number'
    )
  })
})
