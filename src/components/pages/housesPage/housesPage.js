import React, {Component} from 'react';
import ItemList from '../../itemList/itemList';
import ItemDetails,{Field} from '../../itemDetails/itemDetails';
import RowBlock from '../../rowBlock/rowBlock';
import ErrorMessage from '../../errorMessage/errorMessage';
import gotService from '../../../services/gotService';


export default class HousesPage extends Component {

    gotService = new gotService();

    state = {
        selectedHouse: null,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id
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
                getData={this.gotService.getAllHouses}  
                renderItem={({name}) => name}  
                />
        );

        const houseDetails = (
            <ItemDetails 
                itemId={this.state.selectedHouse}
                getData={this.gotService.getHouse}
                itemName={'house'}
                >
                <Field field='words' label='Words'/>
                <Field field='region' label='Region'/>
                <Field field='coatOfArms' label='Coat Of Arms'/>
            </ItemDetails>
        );

        return (
            <RowBlock
                left={itemList}
                right={houseDetails}
            />
        )
    }
}