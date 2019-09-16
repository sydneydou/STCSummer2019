import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';
import {deleteToken} from '../../config/models/authentication';
import styles from './styles';
import TabViewProfile from '../../components/TabViewProfile';
import {withNavigation} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

const Profile = ({navigation, user}) => {
  return (
    <View style={styles.container}>
      <Button
        title={'Log Out'}
        onPress={async () => {
          await deleteToken();
          navigation.navigate('AuthLoading');
        }}
      />

      <View style={styles.imgWrapper}>
        <Image
          source={require('../../assets/profilepic.png')}
          styles={styles.img}
        />
        <View style={styles.btnWrapper}>
          <Text style={styles.userName}>{user.fullname}</Text>
        </View>
      </View>
      <TabViewProfile />
    </View>
  );
};

export default withNavigation(Profile);
