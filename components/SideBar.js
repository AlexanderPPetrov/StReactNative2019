import React, { Component } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { Constants } from "expo";
import SidebarItem from "./SidebarItem";

import colors from '../constants/Colors';

const menuItems = [
    {
        name: "Home",
        route: "Home",
        icon: "home",
    },
    {
        name: "Links",
        route: "Links",
        icon: "list",
    },
    {
        name: "Settings",
        route: "Settings",
        icon: "cogs",
    },


];

class SideBar extends Component {
    constructor(props) {
        super(props);
    }

    renderSidebarMenu = () => {
        return <FlatList
            data={menuItems}
            renderItem={({item}) => <SidebarItem
                item={item}
                navigation={this.props.navigation}
            />}
            keyExtractor={(item, index) => item.icon}
        />
    }
    render = () =>
    <View style={styles.sidebar}>
        <View style={styles.headerContainer}>
            <Text style={styles.header}>Sidebar Header</Text>
        </View>
        {this.renderSidebarMenu()}
    </View>

}
export default SideBar;

const styles = StyleSheet.create({
    sidebar: {
        padding: 10,
        flex: 1,
        backgroundColor: colors.sidebarBackground,
        paddingTop: Constants.statusBarHeight
    },
    headerContainer: {
        padding: 15,
        borderBottomColor: colors.listItemBorder,
        borderBottomWidth: 1,
        marginBottom: 15,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.textPrimary
    }
});