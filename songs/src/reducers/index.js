import { combineReducers } from 'redux';

const songReducer = () => {
  return [
    { title: 'Dominium Marus Baltici', duration: '0:29' },
    { title: 'Lion From The North', duration: '4:43' },
    { title: 'Gott Mit Uns', duration: '3:16' },
    { title: 'A Lifetime Of War', duration: '5:46' },
    { title: '1 6 4 8', duration: '3:55' },
    { title: 'The Caroleans Prayer', duration: '6:15' },
    { title: 'Carolus Rex', duration: '4:54' },
    { title: 'Killing Ground', duration: '4:25' },
    { title: 'Poltava', duration: '4:04' },
    { title: 'Long Live The King', duration: '4:10' },
    { title: 'Ruina Imperii', duration: '3:21' },
    { title: 'In The Army Now', duration: '3:59' }
  ];
}

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});
