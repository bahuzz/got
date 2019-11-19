import React,{Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import GotService from '../../services/gotService';
import ErrorMessage from '../../components/errorMessage/errorMessage';
import CharacterPage from '../../components/characterPage/characterPage'


export default class App extends Component {
    constructor() {
        super();
        this.got = new GotService();
        this.state = {
            randomHide: false,
            error: false
        }
    }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    hideRandom = () => {
        this.setState((prevState) => {
            return {randomHide: !prevState.randomHide}
        })
    }

    render() {

        const randomChar = this.state.randomHide ? null : <RandomChar />;

        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <div> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randomChar}
                        </Col>
                        <Col>
                            <button 
                                className="btn btn-warning"
                                onClick={this.hideRandom}
                            >Boom!</button>
                        </Col>
                    </Row>
                    <CharacterPage/>
                </Container>
            </div>
        );
    }
}
