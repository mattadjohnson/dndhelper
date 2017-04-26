/* eslint-env jasmine */
import dnd from 'dndmatrix'

it('returns a stat value between 3 and 16 (inclusive)', () => {
  const stat = dnd.generateStat()
  expect(stat >= 3 && stat <= 16).toBeTruthy()
})
