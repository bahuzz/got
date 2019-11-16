import React, {Component} from 'react';
import styled from 'styled-components';
import CharInfo from '../charInfo/charInfo';

const CharDetailsContainer = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;

    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`;
export default class CharDetails extends Component {

    render() {
        return (
            <CharDetailsContainer className="rounded">
                <h4>John Snow</h4>
                <CharInfo/>
            </CharDetailsContainer>
        );
    }
}