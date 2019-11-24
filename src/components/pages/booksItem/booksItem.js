import React, {Component} from 'react';
import gotService from '../../../services/gotService';
import ItemDetails,{Field} from '../../itemDetails/itemDetails';

export default class BooksItem extends Component {
    gotService = new gotService();

    render() {
        return (
            <div className="row">
                <div className="col-6">
                    <ItemDetails 
                        itemId={this.props.bookId}
                        getData={this.gotService.getBook}
                        itemName={'book'}
                        >
                        <Field field='publisher' label='Publisher'/>
                        <Field field='numberOfPages' label='Pages'/>
                        <Field field='released' label='Released'/>
                    </ItemDetails>
                </div>
            </div>
        )
    }
}
