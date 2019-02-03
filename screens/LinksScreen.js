import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Layout from '../components/layout/Layout';
import Card from '../components/Card';
import colors from '../constants/Colors';
export default class LinksScreen extends React.Component {

  render = () =>
    <Layout title="Links" navigation={this.props.navigation}>
      <Card>
          <Text style={styles.header}>Links</Text>
      </Card>
    </Layout>
}

const styles = StyleSheet.create({
    header: {
    color: colors.textPrimary,
  },
});
