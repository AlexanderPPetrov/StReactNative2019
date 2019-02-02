import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SideBar from '../components/SideBar';

const Drawer = createDrawerNavigator(
    {
        Home: { screen: HomeScreen },
        Links: { screen: LinksScreen },
        Settings: { screen: SettingsScreen },
    },
    {
        initialRouteName: "Home",
        contentOptions: {
            activeTintColor: "#e91e63"
        },
        contentComponent: props => <SideBar {...props} />
    }
);

export default createStackNavigator({
    DrawerNavigator:{
        screen: Drawer
    },
    Home: { screen: HomeScreen },
    Links: { screen: LinksScreen },
    Settings: { screen: SettingsScreen },
});