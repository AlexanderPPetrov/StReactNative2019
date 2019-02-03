import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

import colors from '../../constants/Colors';

export default class Header extends React.Component {

    toggleSidebar = () => {
        this.props.navigation.toggleDrawer();
    }
    render = () =>
    <View style={styles.header}>
        <View style={styles.left}>
            <TouchableOpacity onPress={this.toggleSidebar}>
                <FontAwesome name="bars" size={32} color={colors.textPrimary} />
            </TouchableOpacity>
        </View>
        <View style={styles.center}>
            <Text style={styles.title}>{this.props.title.toUpperCase()}</Text>
        </View>
        <View style={styles.right}>
        </View>
    </View>
}
const styles = StyleSheet.create({
    header: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.headerBackground,
    },
    left: {
        width: 32,
        padding: 1
    },
    center: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        color: colors.textPrimary,
        fontSize: 16,

    },
    right: {
        width: 32,
        padding: 1
    }
});