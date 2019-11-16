import React from 'react';
import {ListGroupItem,ListGroup} from 'reactstrap';
import styled from 'styled-components';

const ListItemStyle = styled(ListGroupItem)`
    display: flex !important;
    justify-content: space-between !important;
    border-left: none !important;
    border-right: none !important;
`;

const CharInfo = () => {
    return (
        <ListGroup>
            <ListItemStyle>
                <b>Gender</b>
                <span>male</span>
            </ListItemStyle>
            <ListItemStyle>
                <b>Born</b>
                <span>1783</span>
            </ListItemStyle>
            <ListItemStyle>
                <b>Died</b>
                <span>1820</span>
            </ListItemStyle>
            <ListItemStyle>
                <b>Culture</b>
                <span>First</span>
            </ListItemStyle>
        </ListGroup>
    )
}

export default CharInfo;