import 'babel-polyfill'
import assert from 'assert'
import getRestfulActions from '../lib/getRestfulActions'

describe('getRestfulActions', () => {
  it('should return a series of functions matching a known type and following a known pattern', () => {
    const testActions = { GET: 'test/GET' }
    const actions = getRestfulActions(testActions)
    const ta = actions.get({ enabled: true })

    assert.equal(
      Object.keys(actions).length,
      1,
      'number of functions generated does not match what is expected'
    )

    assert.equal(
      actions.get != null,
      true,
      'failed to generate test action creator'
    )
    assert.equal(
      ta.type,
      testActions.GET,
      'generated action creator does not have correct type'
    )
  })
})
