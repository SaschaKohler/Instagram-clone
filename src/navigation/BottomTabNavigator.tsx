import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PostUploadScreen from '../screens/PostUploadScreen/PostUploadScreen';
import HomeStackNavigator from './HomeStackNavigator';
import colors from '../theme/colors';
import ProfileStackNavigator from './ProfileStackNavigator';
import {BottomTabNavigatorParamList} from './types';
import SearchTabNavigator from './SearchTabNavigator';
import {Authenticator} from '@aws-amplify/ui-react-native';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabNavigator = () => {
  return (
    <Authenticator.Provider>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.black,
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStackNavigator}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="home-filled" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchTabNavigator}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="search" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Upload"
          component={PostUploadScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="plus-circle-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={PostUploadScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="heart-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="MyProfile"
          component={ProfileStackNavigator}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="user-circle-o" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </Authenticator.Provider>
  );
};

export default BottomTabNavigator;
