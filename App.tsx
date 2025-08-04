/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Reels from 'react-native-reels-player';
// var data = [];
function App(): React.JSX.Element {
  const [data, setData] = useState([])

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch(
      'https://a035cc04acd2.ngrok-free.app/public/api/v1/get-videos?limit=1000&page=1',
    )
      .then(response => response.json())
      .then(json => {
        console.log('===>', json.videos);

        setData(json.videos);
      })
      .catch(error => {
        console.error(error.message);
      });
  }

  const personalData = {
    username: 'YourUsername',
    profileImage: 'https://your-profile-image-url.png',
  };
  return (
    <SafeAreaView>
      <StatusBar />

      <Reels data={data} personalData={personalData} />
    </SafeAreaView>
  );
}

export default App;
