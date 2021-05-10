import React, { Component } from 'react';
import ChampCard from './ChampCard';


class ChampionSearch extends Component {
    constructor() {
        super()
        this.state = {
            userInput: '',
            name: 'NoNameYet'

        }
    }


    handleChange = (event) => {
        this.setState({
            userInput: event.target.value
        })
        console.log(this.userInput)
    }

    // spellingCorrector = (input) => {
    //     (console.log('input'))
    // }

    searchChampion = (event) => {
        event.preventDefault()
        let word = this.state.userInput
        word = word.toLowerCase()
        let editedWord = word.charAt(0).toUpperCase() + word.slice(1)
        console.log(editedWord)
        this.setState({ name: editedWord  })
    }

    render() {
        return (
            <div className='formBox'>
                <div className='justInCase'>
                    <text>If you're unfamiliar with League of Legends please type in one of these names to see what this app does!</text>
                    <ul>
                        <li>Aatrox</li>
                        <li>Renekton</li>
                        <li>Jhin</li>
                    </ul>
                </div>

                <label>
                    <form onSubmit={this.searchChampion}>
                        <input typeof="text" name='name' onChange={this.handleChange}></input>
                        <button typeof='submit'>Search</button>
                        
                    </form>
                </label>
                <ChampCard champData={this.props.champData} name={this.state.name} />
            </div>
        );
    }
}

export default ChampionSearch;