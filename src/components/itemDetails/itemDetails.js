import React, {Component} from 'react';
import {ListGroupItem,ListGroup} from 'reactstrap';
import styled from 'styled-components';
import gotService from '../../services/gotService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

const ItemDetailsContainer = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;

    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`;

const ListItemStyle = styled(ListGroupItem)`
    display: flex !important;
    justify-content: space-between !important;
    border-left: none !important;
    border-right: none !important;
`;

const Field = ({item,field,label}) => {
    return (
        <ListItemStyle>
            <b>{label}</b>
            <span>{item[field]}</span>
        </ListItemStyle>
    )
}

export {Field};

export default class ItemDetails extends Component {

    gotService = new gotService();

    state = {
        item: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prevProps) {
        if(this.props.itemId !== prevProps.itemId) this.updateItem()
    }

    updateItem() {
        const {itemId} = this.props;
        const {getData} = this.props;
        if(!itemId) {
            return;
        }
        getData(itemId)
            .then((item) => {
                this.setState({item, loading: false})
            }).catch(this.onError)
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    render() {
        let {itemName} = this.props;
        if(!this.state.item) {
            return (
                <ItemDetailsContainer className="rounded">
                <span>Please select a {itemName}</span>
                </ItemDetailsContainer>
            )
        }

        const {item} = this.state;

        const {name} = item;

        let content = this.state.loading ? <Spinner/> :
                <>
                <h4>{name}</h4>
                    <ListGroup>
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, {item})
                            })
                        }
                    </ListGroup>
                </>;
        
        if(this.state.error) {
            content = <ErrorMessage/>;
        }
        return (
            <ItemDetailsContainer className="rounded">
                {content}
            </ItemDetailsContainer>
        );
    }
}