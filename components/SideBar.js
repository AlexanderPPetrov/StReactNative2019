import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Constants } from "expo";

import colors from '../constants/Colors';

const datas = [
    {
        name: "Home",
        route: "Home",
        icon: "phone-portrait",
        bg: "#C5F442"
    },
    {
        name: "Links",
        route: "Links",
        icon: "easel",
        bg: "#C5F442"
    },
    {
        name: "Settings",
        route: "Settings",
        icon: "phone-portrait",
        bg: "#477EEA",
        types: "10"
    },


];

class SideBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.sidebar}>
                <Text>SIDEBAR TEXT</Text>
            </View>
        );
    }
}
export default SideBar;

const styles = StyleSheet.create({
    sidebar: {
        padding: 10,
        flex: 1,
        backgroundColor: colors.sidebarBackground,
        paddingTop: Constants.statusBarHeight
    },
});