import React, {Component} from 'react';
import {ListGroup,ListGroupItem} from 'reactstrap';
import styled from 'styled-components';
import Spinner from '../spinner/spinner';

const ListItemStyle = styled(ListGroupItem)`
    cursor: pointer;
`;
const ListGroupBg = styled(ListGroup)`
    background: #fff;
    border-radius: 0.25rem !important;
`;

export default class ItemList extends Component {

    state = {
        itemList: null
    }

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;

            const label = this.props.renderItem(item);

            return (
                <ListItemStyle 
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}
                >
                    {label}
                </ListItemStyle>
            )
        })
    }

    render() {
        const {itemList} = this.state;

        const content = itemList ? this.renderItems(itemList) : <Spinner/>;

        return (
            <ListGroupBg>
                {content}
            </ListGroupBg>
        );
    }
}