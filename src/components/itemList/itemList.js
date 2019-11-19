import React, {Component} from 'react';
import {ListGroup,ListGroupItem} from 'reactstrap';
import gotService from '../../services/gotService'
import styled from 'styled-components';
import Spinner from '../spinner/spinner'

const ListItemStyle = styled(ListGroupItem)`
    cursor: pointer;
`;
const ListGroupBg = styled(ListGroup)`
    background: #fff;
    border-radius: 0.25rem !important;
`;

export default class ItemList extends Component {

    gotService = new gotService();

    state = {
        charList: null
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then((charList) => {
                this.setState({
                    charList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item) => {
            return (
                <ListItemStyle 
                    key={item.id}
                    onClick={() => this.props.onCharSelected(item.id)}
                >
                    {item.name}
                </ListItemStyle>
            )
        })
    }

    render() {
        const {charList} = this.state;

        const content = charList ? this.renderItems(charList) : <Spinner/>;

        return (
            <ListGroupBg>
                {content}
            </ListGroupBg>
        );
    }
}