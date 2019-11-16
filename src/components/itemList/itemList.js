import React, {Component} from 'react';
import {ListGroup,ListGroupItem} from 'reactstrap';
import styled from 'styled-components';

const ListItemStyle = styled(ListGroupItem)`
    cursor: pointer;
`;

export default class ItemList extends Component {

    render() {
        return (
            <ListGroup>
                <ListItemStyle>
                    John Snow
                </ListItemStyle>
                <ListItemStyle>
                    Brandon Stark
                </ListItemStyle>
                <ListItemStyle>
                    Geremy
                </ListItemStyle>
            </ListGroup>
        );
    }
}