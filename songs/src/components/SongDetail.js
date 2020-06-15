import React from 'react'
import { connect } from 'react-redux'

export const SongDetail = ({song}) => {
  if (!song) {
    return (
      <div>Select a song!</div>
    )
  }

  return (
    <div>
      <h3>Details for: </h3>
      <p>
        <strong>Title:</strong> {song.title}
        <br />
        <strong>Duration:</strong> {song.duration}
      </p>
      
    </div>
  )
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)