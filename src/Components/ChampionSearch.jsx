import React, { Component } from 'react';

class ChampionSearch extends Component {
    constructor(){
        super()
        this.state={
            userInput:'',
            data: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            userInput: event.target.value
            
        })
        console.log(this.userInput)
    }

    searchChampion = (event) => {
        event.preventDefault();
        console.log('submitted')
        const search = this.state.userInput
        const url = 'http://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion.json'
        console.log(url)
    }

    render() {
        return (
            <div>
                <input typeof="text" name= 'name' value={this.state.userInput} onChange={this.handleChange}></input>
                <button typeof='submit' onClick={this.searchChampion}>Search</button>
            </div>
        );
    }
}

export default ChampionSearch;