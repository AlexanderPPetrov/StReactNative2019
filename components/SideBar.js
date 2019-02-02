import React, { Component } from "react";
import { View, Text, Image } from "react-native";

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
            <View>
                <Text>SIDEBAR TEXT</Text>
            </View>
        );
    }
}

export default SideBar;