import React from 'react'
import {GridList, GridTile} from 'material-ui/GridList'
import Subheader from 'material-ui/Subheader'
import dnd from 'dndmatrix'
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

const GridComponent = () => (
  <div className='grid'>
    <GridList className='grid-list' cellHeight={80} cols={6} padding={1}>
      <Subheader>Character Stat Rolls</Subheader>
      {tilesData.map((_, i) => (
        <GridTile className='grid-tile' key={i} style={styles.tile}>{dnd.generateStat()}</GridTile>
      ))}
    </GridList>
  </div>
)

export default GridComponent
