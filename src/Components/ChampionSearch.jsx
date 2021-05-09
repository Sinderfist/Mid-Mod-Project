import React, { Component } from 'react';
import ChampCard from './ChampCard';


class ChampionSearch extends Component {
    constructor() {
        super()
        this.state = {
            userInput: '',
            name: 'NoNameYet'
            // this.state.data.userInput.blurb

        }
    }


    handleChange = (event) => {
        this.setState({
            userInput: event.target.value
        })
        console.log(this.userInput)
    }

    searchChampion = (event) => {
        event.preventDefault()
        this.setState({ name: this.state.userInput })

        // fetch ('http://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion.json')
        // .then((res)=> res.json())
        // .then((data)=> {
        //     console.log(data.data)
        //     this.setState({
        //     name: this.state.userInput,
        //     data: data.data
        //      })
        // })   

    }

    render() {
        return (
            <div>
                <label>
                    <form onSubmit={this.searchChampion}>
                        <input typeof="text" name='name' value={this.state.userInput} onChange={this.handleChange}></input>
                        <button typeof='submit'>Search</button>
                        <ChampCard champData={this.props.champData} name={this.state.name} />
                    </form>
                </label>
            </div>
        );
    }
}

export default ChampionSearch;