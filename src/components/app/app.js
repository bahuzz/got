import React,{Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import ItemList from '../itemList/itemList';
import CharDetails from '../charDetails/charDetails';
import GotService from '../../services/gotService';


export default class App extends Component {
    constructor() {
        super();
        this.got = new GotService();
        this.state = {
            randomHide: false
        }
    }

    hideRandom = () => {
        this.setState((prevState) => {
            return {randomHide: !prevState.randomHide}
        })
    }

    render() {

        const randomChar = this.state.randomHide ? null : <RandomChar />;

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
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
