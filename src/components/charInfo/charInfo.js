import React from 'react';
import {ListGroupItem,ListGroup} from 'reactstrap';
import styled from 'styled-components';

const ListItemStyle = styled(ListGroupItem)`
    display: flex !important;
    justify-content: space-between !important;
    border-left: none !important;
    border-right: none !important;
`;

const CharInfo = (props) => {
    let {gender, born, died, culture} = props;
    gender = gender ? gender : 'unknown';
    born = born ? born : 'unknown';
    died = died ? died : 'unknown';
    culture = culture ? culture : 'unknown';
    return (
        <ListGroup>
            <ListItemStyle>
                <b>Gender</b>
                <span>{gender}</span>
            </ListItemStyle>
            <ListItemStyle>
                <b>Born</b>
                <span>{born}</span>
            </ListItemStyle>
            <ListItemStyle>
                <b>Died</b>
                <span>{died}</span>
            </ListItemStyle>
            <ListItemStyle>
                <b>Culture</b>
                <span>{culture}</span>
            </ListItemStyle>
        </ListGroup>
    )
}

export default CharInfo;