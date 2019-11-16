import React, {Component} from 'react';
import CharInfo from '../charInfo/charInfo';
import styled from 'styled-components';

const RandomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4 {
    margin-bottom: 20px;
    text-align: center;
    }
`;
export default class RandomChar extends Component {

    render() {

        return (
            <RandomBlock className="rounded">
                <h4>Random Character: John</h4>
                <CharInfo/>
            </RandomBlock>
        );
    }
}
