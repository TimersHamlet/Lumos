import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';
import {publicStyles} from '../publicStyles/index';
import Video from 'react-native-video';

const IndexPage = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <View>
      <Button
        title={'播放'}
        onPress={() => {
          setPlayState(!playState);
        }}
      />
      <Video
        source={require('../music/testMusic.m4a')}
        rate={playState ? 1 : 0}
      />
      <Text style={publicStyles.textFont}>这里是主页面</Text>
    </View>
  );
};

export default IndexPage;
