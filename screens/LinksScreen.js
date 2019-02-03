import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Layout from '../components/layout/Layout';
import {WebView} from 'react-native';
export default class LinksScreen extends React.Component {

  render = () =>
    <Layout title="Links" navigation={this.props.navigation}>
      <WebView
          source={{uri: 'https://github.com/facebook/react-native'}}
      />
    </Layout>
}