import React, {useState,useEffect} from 'react';
import CharInfo from '../charInfo/charInfo';
import gotService from '../../services/gotService';
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


function RandomChar() {

    const gotServ = new gotService();
       
    const [char,updChar] = useState({});
    const [loading,updateLoading] = useState(true);
    const [error,updateError] = useState(false);

    // state = {
    //     char: {},
    //     loading: true,
    //     error: false
    // }

    useEffect(() => {
        updateChar();
        const timerId = setInterval(updateChar, 4000);
        return () => clearInterval(timerId);
    },[]);

    // componentDidMount() {
    //     this.updateChar();
    //     this.timerId = setInterval(this.updateChar, 4000);
    // }

    // componentWillUnmount() {
    //     clearInterval(this.timerId);
    // }

    function onCharLoaded(char) {
        updChar(char);
        updateLoading(false);
        // this.setState({
        //     char,
        //     loading: false
        // })
    }

    function onError() {
        updateLoading(false);
        updateError(true)
        // this.setState({
        //     error: true,
        //     loading: false
        // })
    }

    function updateChar() {
        const id = Math.floor(Math.random()*270 + 23);
        // const id = 12345689;
        gotServ.getCharacter(id)
            .then(onCharLoaded)
            .catch(onError);
    }

    let content = loading ? <Spinner/> : <View char={char}/>;
    
    if(error) content = <ErrorMessage/>;

    return (
        <RandomBlock className="rounded">
            {content}
        </RandomBlock>
    );

}

export default RandomChar;

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