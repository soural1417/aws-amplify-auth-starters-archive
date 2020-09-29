import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Route2 from './Route2';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Stacka = createStackNavigator();
const Stackb = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyStackk({navigation}) {
  return (
    <Stacka.Navigator>
      <Stacka.Screen
        name="Home"
        component={Feed}
        options={{
          headerLeft: () => (
            <TouchableOpacity  onPress={() => navigation.openDrawer()} 
            title="Info"><Image
            source={require('./drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 15 }}
          />
            </TouchableOpacity>    
          ),
        }}
      />
    </Stacka.Navigator>
  );
}

function MyStackkk({navigation}) {
  return (
    <Stacka.Navigator>
      <Stacka.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerLeft: () => (
            <TouchableOpacity  onPress={() => navigation.openDrawer()} 
            title="Info"><Image
            source={require('./drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 15 }}
          />
            </TouchableOpacity>    
          ),
        }}
      />
    </Stacka.Navigator>
  );
}

function MyStackkkk({navigation}) {
  return (
    <Stacka.Navigator>
      <Stacka.Screen
        name="Profile"
        component={Profile}
        options={{
          headerLeft: () => (
            <TouchableOpacity  onPress={() => navigation.openDrawer()} 
            title="Info"><Image
            source={require('./drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 15 }}
          />
            </TouchableOpacity>    
          ),
        }}
      />
    </Stacka.Navigator>
  );
}

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={MyStackk}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Image
            source={require('./drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 15 }}
          />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={MyStackkk}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: () => (
            <Image
            source={require('./drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 15 }}
          />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={MyStackkkk}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <Image
            source={require('./drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 15 }}
          />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function MyStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => (
            <TouchableOpacity  onPress={() => navigation.openDrawer()} 
            title="Info"><Image
            source={require('./drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 15 }}
          />
            </TouchableOpacity>
           
              
          ),
        }}
      />
      <Stack.Screen name="Route2" component={Route2} />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MyTabs} />
      <Drawer.Screen name="Settings" component={MyStack} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
