import React, { Component } from 'react'

class ChampCard extends Component {
    render() {
        return (
            <div>
                <img src={this.props.champData.data[this.props.name].image.full}></img>
                <h1>{this.props.champData.data[this.props.name].id}</h1>
                <h2>{this.props.champData.data[this.props.name].title}</h2>
                <h2>{this.props.champData.data[this.props.name].blurb}</h2>
             </div>
        );
    }
}

export default ChampCard;