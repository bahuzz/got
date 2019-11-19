import React, {Component} from 'react';
import styled from 'styled-components';
import CharInfo from '../charInfo/charInfo';
import gotService from '../../services/gotService';
import Spinner from '../../components/spinner/spinner';
import ErrorMessage from '../../components/errorMessage/errorMessage';

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

    gotService = new gotService();

    state = {
        char: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateChar()
    }

    componentDidUpdate(prevProps) {
        if(this.props.charId !== prevProps.charId) this.updateChar()
    }

    updateChar() {
        const {charId} = this.props;
        if(!charId) {
            return;
        }
        this.gotService.getCharacter(charId)
            .then((char) => {
                this.setState({char, loading: false})
            }).catch(this.onError)
        // this.foo.bar = 0;
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    render() {
        if(!this.state.char) {
            return (
                <CharDetailsContainer className="rounded">
                    <span className="select-error">Please select a character</span>
                </CharDetailsContainer>
            )
        }

        const {name, gender, born, died, culture} = this.state.char;

        let content = this.state.loading ? <Spinner/> :
                <>
                <h4>{name}</h4>
                <CharInfo 
                    gender = {gender} 
                    born = {born}
                    died = {died}
                    culture = {culture}
                /></>;
        
        if(this.state.error) {
            content = <ErrorMessage/>;
        }
        return (
            <CharDetailsContainer className="rounded">
                {content}
            </CharDetailsContainer>
        );
    }
}