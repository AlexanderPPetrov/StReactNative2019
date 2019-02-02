import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import colors from '../constants/Colors';
import { Constants, LinearGradient } from 'expo';

class Container extends React.Component {

    render = () =>
    <View style={styles.container}>
        <LinearGradient style={styles.gradient} colors={[colors.background.light, colors.background.dark]}>
        </LinearGradient>
        { this.props.children }
    </View>
}
export default Container;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    },
    gradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});