import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

import colors from '../constants/Colors';

export default class SidebarItem extends React.Component {

    menuItemPressed = () => {
        this.props.navigation.navigate(this.props.item.route);
    }
    render = () => (
        <TouchableOpacity
            style={styles.listItem}
            onPress={this.menuItemPressed}
        >
            <FontAwesome
                style={styles.icon}
                name={this.props.item.icon}
                size={22}
                color={colors.textSecondary} />
            <Text style={styles.label}>{this.props.item.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 3,
        alignItems: 'center',
        paddingVertical: 5
    },
    icon: {
        marginHorizontal: 15,
    },
    label: {
        fontSize: 18,
        color: colors.textSecondary
    }
});