import React,{Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import GotService from '../../services/gotService';
import ErrorMessage from '../errorMessage/errorMessage';
import CharacterPage from '../pages/characterPage/characterPage';
import BooksPage from '../pages/booksPage/booksPage';
import HousesPage from '../pages/housesPage/housesPage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import BooksItem from '../pages/booksItem/booksItem';
import HomePage from '../pages/homePage/homePage';
import './app.scss';

export default class App extends Component {
    constructor() {
        super();
        this.gotService = new GotService();
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
            <Router>
            <div className="app"> 
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
                    <Route path='/' exact component={HomePage}/>
                    <Route path='/characters' component={CharacterPage}/>
                    <Route path='/houses' component={HousesPage}/>
                    <Route path='/books' exact component={BooksPage}/>
                    <Route path='/books/:id'  render={
                        ({match}) => {
                            const {id} = match.params;
                            return <BooksItem bookId={id}/>
                            }
                        }/>
                </Container>
            </div>
            </Router>
        );
    }
}
