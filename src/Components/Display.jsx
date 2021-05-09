import React, { Component } from 'react';
import ChampionSearch from './ChampionSearch';
import apiChampionData from './data.js'

class Display extends Component {
    render() {
        return (
            <div className='display'>
                <h1>Choose your Champion</h1>
                <div className='justInCase'>
                    <text>If you're unfamiliar with League of Legends please type in one of these names to see what this app does!</text>
                    <ul>
                        <li>Aatrox</li>
                        <li>Renekton</li>
                        <li>Jhin</li>
                    </ul>
                </div>
                <ChampionSearch champData={apiChampionData}/>
            </div>
        );
    }
}

export default Display;

