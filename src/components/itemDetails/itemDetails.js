import React, {useState,useEffect} from 'react';
import {ListGroupItem,ListGroup} from 'reactstrap';
import styled from 'styled-components';
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

function ItemDetails(props) {
    const {itemId,getData,itemName} = props;
    // const gotServ = new gotService();

    const [item, updItem] = useState(null);
    const [loading, updLoading] = useState(true);
    const [error, updError] = useState(false);

    // state = {
    //     item: null,
    //     loading: true,
    //     error: false
    // }

    useEffect(() => {
        let prevId = itemId; 
        updateItem();
        if(itemId !== prevId) updateItem()
    });

    // componentDidMount() {
    //     this.updateItem()
    // }

    // componentDidUpdate(prevProps) {
    //     if(this.props.itemId !== prevProps.itemId) this.updateItem()
    // }
    const onError = (err) => {
        updError(true);
        updLoading(false);
        // this.setState({
        //     error: true,
        //     loading: false
        // })
    }

    function updateItem() {
        if(!itemId) {
            return;
        }
        getData(itemId)
            .then((item) => {
                updItem(item);
                updLoading(false);
            }).catch(onError)
    }

    if(!item) {
        return (
            <ItemDetailsContainer className="rounded">
            <span>Please select a {itemName}</span>
            </ItemDetailsContainer>
        )
    }

    const {name} = item;

    let content = loading ? <Spinner/> :
            <>
            <h4>{name}</h4>
                <ListGroup>
                    {
                        React.Children.map(props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ListGroup>
            </>;
    
    if(error) {
        content = <ErrorMessage/>;
    }
    return (
        <ItemDetailsContainer className="rounded">
            {content}
        </ItemDetailsContainer>
        );
}

export default ItemDetails;