// Action creator -- returns an action (js obj)
export const selectSong = (song) => {
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};