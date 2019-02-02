import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import colors from '../constants/Colors';

class Card extends React.Component {
    render = () => (
        <View style={styles.card}>
            { this.props.children }
        </View>

    )
}
export default Card;

const styles = StyleSheet.create({
    card: {
        padding: 10,
        backgroundColor: colors.cardBackground
    },
});