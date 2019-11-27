import React, {useState, useEffect} from 'react';
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

function ItemList({getData,onItemSelected,renderItem}) {

    const [itemList, updateList] = useState([]);
    // state = {
    //     itemList: null
    // }

    useEffect(() => {
        getData()
            .then((data) => {
                updateList(data)
            })
    }, [])

    // componentDidMount() {
    //     getData()
    //         .then((itemList) => {
    //             this.setState({
    //                 itemList
    //             })
    //         })
    // }

    function renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;

            const label = renderItem(item);

            return (
                <ListItemStyle 
                    key={id}
                    onClick={() => onItemSelected(id)}
                >
                    {label}
                </ListItemStyle>
            )
        })
    }

    const content = itemList ? renderItems(itemList) : <Spinner/>;

    return (
        <ListGroupBg>
            {content}
        </ListGroupBg>
        );
}

export default ItemList;