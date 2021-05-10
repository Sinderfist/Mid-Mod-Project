import React, { Component } from 'react';
import ChampCard from './ChampCard';
import ChampionSearch from './ChampionSearch';
import apiChampionData from './data.js'

class Display extends Component {
    render() {
        return (
            <div className='display'>
                <h1>Choose your Champion</h1>
                <ChampionSearch champData={apiChampionData}/>
            </div>
        );
    }
}

export default Display;

