import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import colors from '../constants/Colors';

export default class Card extends React.Component {
    render = () => (
        <View style={styles.card}>
            { this.props.children }
        </View>

    )
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        backgroundColor: colors.cardBackground
    },
});