import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Layout from '../components/layout/Layout';
import Card from '../components/Card';
import colors from '../constants/Colors';
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

export default class SettingsScreen extends React.Component {

    render = () =>
      <Layout title="Settings" navigation={this.props.navigation}>
        <Card>
            <AreaChart
                style={{ height: 200 }}
                data={ data }
                contentInset={{ top: 30, bottom: 30 }}
                curve={ shape.curveNatural }
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
            >
                <Grid/>
            </AreaChart>
        </Card>
      </Layout>
}

const styles = StyleSheet.create({
    header: {
        color: colors.textPrimary,
    },
});
