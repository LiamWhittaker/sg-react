import { useState, useEffect } from 'react';

export default () => {
  const [ lat, setLat] = useState(null);
  const [ errorMsg, setErrorMessage] = useState(null);
  
  useEffect(() => {
    // Get the user's location.
    window.navigator.geolocation.getCurrentPosition(
      (position) => setLat(position.coords.latitude), //success callback
      (err) => setErrorMessage(err.message) //failure
    );    
  }, []);

  return [lat, errorMsg];
}
