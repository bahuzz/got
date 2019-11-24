import React, {Component} from 'react';
import ItemList from '../../itemList/itemList';
import ItemDetails,{Field} from '../../itemDetails/itemDetails';
import RowBlock from '../../rowBlock/rowBlock';
import ErrorMessage from '../../errorMessage/errorMessage';
import gotService from '../../../services/gotService';


export default class BooksPage extends Component {

    gotService = new gotService();

    state = {
        selectedBook: null,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
        console.log(id);
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) return <ErrorMessage/>;

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected} 
                getData={this.gotService.getAllBooks}  
                renderItem={({name}) => name}  
                />
        );

        const bookDetails = (
            <ItemDetails 
                itemId={this.state.selectedBook}
                getData={this.gotService.getBook}
                itemName={'book'}
                >
                <Field field='publisher' label='Publisher'/>
                <Field field='numberOfPages' label='Pages'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        );

        return (
            <RowBlock
                left={itemList}
                right={bookDetails}
            />
        )
    }
}