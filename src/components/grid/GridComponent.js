import React from 'react'
import {GridList, GridTile} from 'material-ui/GridList'
import Subheader from 'material-ui/Subheader'
import './GridComponent.css'

const styles = {
  tile: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#607D8B',
    color: '#FFFFFF',
    fontSize: '24px'
  }
}
const tilesData = [...Array(36)]
const rollDice = (dice) => dice.map(() => Math.floor(Math.random() * 6) + 1)
const dropLow = (rolls) => rolls.filter(a => a !== Math.min.apply(null, rolls))
const addRolls = (rolls) => rolls.reduce((a, b) => a + b, 0)
const calcRoll = (dice) => addRolls(dropLow(rollDice(dice)))

const GridComponent = () => (
  <div className='grid'>
    <GridList className='grid-list' cellHeight={80} cols={6} padding={1}>
      <Subheader>Character Stat Rolls</Subheader>
      {tilesData.map((_, i) => (
        <GridTile className='grid-tile' key={i} style={styles.tile}>{calcRoll([...Array(4)])}</GridTile>
      ))}
    </GridList>
  </div>
)

export default GridComponent
