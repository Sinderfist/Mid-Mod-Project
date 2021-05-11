import React, { Component } from 'react';
import ChampCard from './ChampCard';


class ChampionSearch extends Component {
    constructor() {
        super()
    //these are the two things in state that I'm going to be changing on this page and passing through props    
        this.state = {
            userInput: '',

            //this is what is populating and displaying my default from my data.js
            name: 'NoNameYet'

        }
    }

//Handles the change for my input field and changes the state of UserInput
    handleChange = (event) => {
        this.setState({
            userInput: event.target.value
        })
        console.log(this.userInput)
    }


    //This is the onsubmit function for my form that put the word in the correct format for search then changes the state of the name to the user's input
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
                        <input typeof="text" name='name' onChange={this.handleChange} placeholder='Do not use spaces'></input>
                        <button typeof='submit'>Search</button>
                        
                    </form>
                </label>
                <ChampCard champData={this.props.champData} name={this.state.name} />
            </div>
        );
    }
}

export default ChampionSearch;