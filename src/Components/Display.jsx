import React, { Component } from 'react';
import ChampionSearch from './ChampionSearch';


class Display extends Component {
    render() {
        return (
            <div>
                <h1>Choose your Champion</h1>
                <ChampionSearch />
            </div>
        );
    }
}

export default Display;

