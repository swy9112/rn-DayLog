import React from 'react';
import { Text, View } from 'react-native';
import styled,  {css} from 'styled-components/native';
import LogContext from '../contexts/LogContext';

const FeedScreen = () => {
  return <View>
    <LogContext.Consumer>
      {(value) => <Text>{value}</Text>}
    </LogContext.Consumer>
  </View>
}

export default FeedScreen;

