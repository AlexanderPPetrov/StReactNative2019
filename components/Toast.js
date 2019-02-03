import React from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Text
} from 'react-native';
import { connect } from "react-redux";
import {bindActionCreators} from "redux";

import colors from '../constants/Colors';
import _ from "lodash";

import * as actions from "../redux/actions";

class ToastContainer extends React.Component {

    render = () => {

        if(_.isEmpty(this.props.error)){
            return null;
        }
        return <Toast onSetError={this.props.setError} error={this.props.error}/>;
    }

}
class Toast extends React.Component {

    componentDidMount = () => {
        setTimeout(()=> {
            console.log()
            this.props.onSetError({});
        }, 5000)
    };

    getMessage = () => {
        return <ScrollView style={styles.toast}>
            <Text style = {styles.message}>
                {this.props.error.message}
            </Text>
        </ScrollView>
    };
    render = () => this.getMessage()
}

const styles = StyleSheet.create({
    toast: {
        position: 'absolute',
        backgroundColor: colors.toastBackground,
        borderRadius: 10,
        bottom: 10,
        left: 10,
        right: 10,
        padding: 15,
        height: 80,
        zIndex: 1
    },
    message: {
        color: colors.textPrimary,
        fontSize: 18,
        textAlign: 'center'
    }
});

const mapStateToProps = state => {
    return {
        error: state.error
    }
};

const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setError: actions.setError,
    }, dispatch)
};

export default
connect(mapStateToProps, mapStateToDispatch)(ToastContainer);