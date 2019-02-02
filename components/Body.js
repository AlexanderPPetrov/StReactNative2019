import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

class Body extends React.Component {
    render = () =>
    <View style={styles.content}>
        { this.props.children }
    </View>
}
export default Body;

const styles = StyleSheet.create({
    content: {
        flex: 1,
        padding: 15
    }
});