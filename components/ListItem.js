import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import colors from '../constants/Colors';

export default class ListItem extends React.Component {

    render = () => (
        <View style={styles.listItem}>
            { this.props.children }
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 3,
        backgroundColor: colors.listItemBackground,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.listItemBorder
    },
});