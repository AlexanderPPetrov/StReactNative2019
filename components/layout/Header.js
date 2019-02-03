import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { connect } from "react-redux";

import colors from '../../constants/Colors';

class Header extends React.Component {

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
            <Text style={styles.counter}>{this.props.movies.length}</Text>
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
        padding: 1,

    },
    counter: {
        color: colors.textPrimary,
        fontWeight: "bold",
        fontSize: 20
    }
});

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Header);