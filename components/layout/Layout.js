import React from 'react';
import {
    Button,
    View
} from 'react-native';

import Container from './Container';
import Header from './Header';
import Body from './Body';

class Layout extends React.Component {
    render = () =>
    <Container>
        <Header navigation={this.props.navigation}
                title={this.props.title}/>
        <Body>
            { this.props.children }
        </Body>
    </Container>
}
export default Layout;
