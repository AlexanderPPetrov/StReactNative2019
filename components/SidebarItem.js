import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

import colors from '../constants/Colors';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";


class SidebarItem extends React.Component {

    menuItemPressed = () => {
        this.props.navigation.navigate(this.props.item.route);
        this.props.setSelectedRoute(this.props.item.route);
    };
    getTitleStyle = () => {
        if(this.props.item.route == this.props.selectedRoute){
            return [styles.label, styles.activeLabel]
        }
        return styles.label
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
            <Text style={this.getTitleStyle()}>{this.props.item.name}</Text>
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
    },
    activeLabel: {
        color: colors.textPrimary
    }
});


const mapStateToProps = state => ({ ...state });

const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setSelectedRoute: actions.setSeletedRoute
    }, dispatch)
};

export default connect(
    mapStateToProps,
    mapStateToDispatch)
(SidebarItem)
