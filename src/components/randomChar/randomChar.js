import React, {Component} from 'react';
import CharInfo from '../charInfo/charInfo';
import gotService from '../../services/gotService'
import styled from 'styled-components';
import Spinner from '../spinner/spinner'
import ErrorMessage from '../errorMessage/errorMessage'

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
    constructor() {
        super();
        this.updateChar();
    }

    gotService = new gotService();
    state = {
        char: {},
        loading: true,
        error: false
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar() {
        const id = Math.floor(Math.random()*270 + 23);
        // const id = 12345689;
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    

    render() {
        const {char,loading, error} = this.state;

        let content = loading ? <Spinner/> : <View char={char}/>;
        
        if(error) content = <ErrorMessage/>;

        return (
            <RandomBlock className="rounded">
                {content}
            </RandomBlock>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return (
        <>
            <h4>Random Character: {name}</h4>
            <CharInfo 
                gender = {gender} 
                born = {born}
                died = {died}
                culture = {culture}
            />
        </>
    )
}